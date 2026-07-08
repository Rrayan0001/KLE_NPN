"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import s from "@/styles/layout.module.css";
import { searchIndex, SearchItem } from "@/data/searchIndex";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle clicking outside modal to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle search matching and ranking
  useEffect(() => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const queryWords = cleanQuery.split(/\s+/);
    const matched = searchIndex
      .map((item) => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const descLower = item.description.toLowerCase();
        const catLower = item.category.toLowerCase();
        
        let allWordsMatch = true;
        for (const word of queryWords) {
          let wordMatch = false;
          
          if (titleLower.includes(word)) {
            wordMatch = true;
            if (titleLower.startsWith(word)) {
              score += 15;
            } else {
              score += 8;
            }
          }
          if (descLower.includes(word)) {
            wordMatch = true;
            score += 3;
          }
          if (catLower.includes(word)) {
            wordMatch = true;
            score += 4;
          }
          
          // Match keywords
          for (const kw of item.keywords) {
            if (kw.toLowerCase().includes(word)) {
              wordMatch = true;
              score += 5;
              break;
            }
          }
          
          if (!wordMatch) {
            allWordsMatch = false;
            break;
          }
        }
        
        return { item, allWordsMatch, score };
      })
      .filter((res) => res.allWordsMatch)
      .sort((a, b) => b.score - a.score)
      .map((res) => res.item);

    setResults(matched);
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation inside search overlay
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          router.push(results[selectedIndex].href);
          onClose();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, results, selectedIndex, router, onClose]);

  // Keep selected item visible in scrolling container
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const activeEl = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        const container = resultsRef.current;
        const activeTop = activeEl.offsetTop;
        const activeHeight = activeEl.offsetHeight;
        const containerHeight = container.clientHeight;
        const containerScrollTop = container.scrollTop;

        if (activeTop < containerScrollTop) {
          container.scrollTop = activeTop;
        } else if (activeTop + activeHeight > containerScrollTop + containerHeight) {
          container.scrollTop = activeTop + activeHeight - containerHeight;
        }
      }
    }
  }, [selectedIndex, results]);

  function highlightText(text: string, searchVal: string) {
    if (!searchVal.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${searchVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className={s.searchMark}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  }

  if (!isOpen) return null;

  return (
    <div className={s.searchOverlay}>
      {/* Backdrop */}
      <div 
        className={s.searchBg}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div 
        ref={containerRef}
        className={s.searchBox}
      >
        {/* Search Header */}
        <div className={s.searchHeader}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={s.searchHeaderIcon} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className={s.searchInput}
            placeholder="Search programs, pages, certificates..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className={s.searchEscBadge}
          >
            ESC
          </button>
        </div>

        {/* Results / Empty View */}
        <div className={s.searchResults}>
          {query.trim() === "" ? (
            <div className={s.searchEmptyState}>
              <div className={s.searchEmptyIconBox}>
                <svg xmlns="http://www.w3.org/2000/svg" className={s.searchEmptyIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={s.searchEmptyTitle}>Quick Navigation Search</h3>
              <p className={s.searchEmptyText}>
                Type what you are looking for (e.g. &quot;BSc&quot;, &quot;NAAC&quot;, &quot;Library&quot;, &quot;Principal&quot;) to immediately locate pages.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className={s.searchEmptyState}>
              <div className={s.searchEmptyIconBox}>
                <svg xmlns="http://www.w3.org/2000/svg" className={s.searchEmptyIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={s.searchEmptyTitle}>No results found for &quot;{query}&quot;</h3>
              <p className={s.searchEmptyText}>
                Check spelling or try using alternative keywords.
              </p>
            </div>
          ) : (
            <div ref={resultsRef} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className={`${s.searchItem} ${idx === selectedIndex ? s.searchItemActive : ''}`}
                >
                  <div className={s.searchItemTitleRow}>
                    <span className={s.searchItemTitle}>
                      {highlightText(item.title, query)}
                    </span>
                    <span className={s.searchItemCategory}>
                      {item.category}
                    </span>
                  </div>
                  <p className={s.searchItemDesc}>
                    {highlightText(item.description, query)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className={s.searchFooter}>
          <div className={s.searchFooterKeys}>
            <span>
              <kbd className={s.searchKbd}>↑↓</kbd> to navigate
            </span>
            <span>
              <kbd className={s.searchKbd}>Enter</kbd> to select
            </span>
            <span>
              <kbd className={s.searchKbd}>Esc</kbd> to close
            </span>
          </div>
          <span className={s.searchFooterText}>GIB Search Engine</span>
        </div>
      </div>
    </div>
  );
}

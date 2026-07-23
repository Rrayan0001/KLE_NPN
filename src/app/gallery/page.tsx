'use client';

import { useState } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'Sports & Aquatic' | 'Cultural & Events' | 'Campus & Infrastructure' | 'Academics & Ceremonies';
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Custom titles for featured showcase images and full 28 images
  const customTitles: Record<number, { title: string; category: GalleryItem['category'] }> = {
    1: { title: 'Indoor Sports Complex', category: 'Campus & Infrastructure' },
    2: { title: 'NCC & Cadet Corps Drill', category: 'Cultural & Events' },
    3: { title: 'Traditional Cultural Dance', category: 'Cultural & Events' },
    4: { title: 'Olympic Swimming Competition', category: 'Sports & Aquatic' },
    5: { title: 'Campus Academic Block', category: 'Campus & Infrastructure' },
    6: { title: 'Auditorium Felicitation Ceremony', category: 'Academics & Ceremonies' },
    7: { title: 'Student Ethnic Day Celebration', category: 'Cultural & Events' },
    8: { title: 'Library & Information Center', category: 'Campus & Infrastructure' },
    9: { title: 'Science Laboratories', category: 'Academics & Ceremonies' },
    10: { title: 'Campus Greenery & Garden', category: 'Campus & Infrastructure' },
  };

  // Generate paths for all 28 main_gallery images (npn1 to npn28)
  const galleryImages: GalleryItem[] = Array.from({ length: 28 }, (_, i) => {
    const num = i + 1;
    const ext = num === 4 ? 'jpg' : 'JPG';
    const custom = customTitles[num];
    return {
      id: num,
      src: `/images/main_gallery/npn${num}.${ext}`,
      title: custom ? custom.title : `KLE G.I.B. Campus Scene #${num}`,
      category: custom ? custom.category : (num % 2 === 0 ? 'Cultural & Events' : 'Campus & Infrastructure')
    };
  });

  const categories = ['All', 'Campus & Infrastructure', 'Sports & Aquatic', 'Cultural & Events', 'Academics & Ceremonies'];

  const filteredImages = filterCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filterCategory);

  return (
    <SubpageLayout breadcrumb="Gallery">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ background: 'transparent', padding: '12px 0', margin: 0 }}>
          <li className="breadcrumb-item">
            <Link href="/" style={{ color: '#0A1628', fontWeight: 500 }}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: '#E8722A', fontWeight: 600 }}>
            Photo Gallery
          </li>
        </ol>
      </nav>

      <div className="main-content py-4">
        <div className="container">
          <section className="gallery pb-5">
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 700, color: '#E8722A' }}>Campus Visuals</span>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#0A1628', marginTop: '6px' }}>Photo &amp; Event <span style={{ color: '#E8722A' }}>Gallery</span></h2>
                <p style={{ color: '#555', maxWidth: '640px', margin: '12px auto 0' }}>Explore state-of-the-art infrastructure, athletic sports arenas, vibrant cultural celebrations, and academic highlights at KLE Society&apos;s G.I.Bagewadi College.</p>
              </div>

              {/* Filter Tabs */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '24px',
                      border: filterCategory === cat ? 'none' : '1px solid rgba(10,22,40,0.18)',
                      background: filterCategory === cat ? '#0A1628' : '#ffffff',
                      color: filterCategory === cat ? '#ffffff' : '#0A1628',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: filterCategory === cat ? '0 4px 14px rgba(10,22,40,0.2)' : 'none'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="inner-sec">
                <div className="row proj_gallery_grid">
                  {filteredImages.map((img) => (
                    <div key={img.id} className="col-md-4 col-sm-6 section_1_gallery_grid mb-4">
                      <a
                        href={img.src}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedImage(img.src);
                        }}
                        style={{ textDecoration: 'none', display: 'block' }}
                      >
                        <div
                          className="section_1_gallery_grid1"
                          style={{
                            overflow: 'hidden',
                            borderRadius: '12px',
                            cursor: 'zoom-in',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                            background: '#fff',
                            border: '1px solid rgba(0,0,0,0.06)'
                          }}
                        >
                          <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                            <img
                              src={img.src}
                              alt="Gallery photo"
                              className="img-fluid gallery-image-hover"
                              style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s ease'
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 22, 40, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s ease-out',
            padding: '20px'
          }}
        >
          <div 
            style={{ position: 'relative', maxWidth: '92%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged gallery view"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 16px 50px rgba(0,0,0,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .gallery-image-hover:hover {
          transform: scale(1.06) !important;
        }
      `}} />
    </SubpageLayout>
  );
}

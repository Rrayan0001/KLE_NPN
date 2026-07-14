'use client';

import { useState } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import Link from 'next/link';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate paths for the 28 gallery images (npn1 to npn28)
  const galleryImages = Array.from({ length: 28 }, (_, i) => {
    const num = i + 1;
    const ext = num === 4 ? 'jpg' : 'JPG';
    return {
      src: `/images/main_gallery/npn${num}.${ext}`,
      title: "G.I.B College"
    };
  });

  return (
    <SubpageLayout breadcrumb="Gallery">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Gallery
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          <section className="gallery py-5">
            <div className="container py-xl-5 py-lg-3">
              <h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">
                our gallery
              </h3>
              <div className="inner-sec pt-md-4">
                <div className="row proj_gallery_grid">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="col-md-4 col-sm-6 section_1_gallery_grid mb-4">
                      <a
                        href={img.src}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedImage(img.src);
                        }}
                      >
                        <div className="section_1_gallery_grid1" style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'zoom-in' }}>
                          <img
                            src={img.src}
                            alt={`Gallery image ${index + 1}`}
                            className="img-fluid gallery-image-hover"
                            style={{
                              height: '260px',
                              width: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <div className="proj_gallery_grid1_pos">
                            <h3>{img.title}</h3>
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
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div 
            style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
          >
            <img
              src={selectedImage}
              alt="Enlarged gallery view"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '8px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
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
        .gallery-image-hover {
          transition: transform 0.4s ease;
        }
        .section_1_gallery_grid:hover .gallery-image-hover {
          transform: scale(1.06);
        }
      `}} />
    </SubpageLayout>
  );
}

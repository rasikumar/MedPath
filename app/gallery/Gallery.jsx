"use client";
import { useRef, useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";
import lgAutoplay from "lightgallery/plugins/autoplay";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";

const HeroGallery = ({ images }) => {
  const galleryRef = useRef(null);
  const [loadedIndices, setLoadedIndices] = useState(new Set());
  const imageRefs = useRef([]);

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = parseInt(entry.target.dataset.index, 10);
            setLoadedIndices((prev) => new Set(prev).add(imgIndex));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, [images]);

  const handleImageClick = (index) => {
    if (galleryRef.current) {
      galleryRef.current.openGallery(index);
    }
  };

  return (
    <div className="gallery-container">
      <div className="masonry-grid">
        {images.map((image, index) => {
          const isLoaded = loadedIndices.has(index);
          return (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              {isLoaded ? (
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  data-index={index}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="gallery-image"
                />
              ) : (
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  data-index={index}
                  className="image-placeholder"
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <LightGallery
        onInit={(detail) => {
          galleryRef.current = detail.instance;
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgHash, lgAutoplay]}
        dynamic
        dynamicEl={images.map((img) => ({
          src: img.src,
          thumb: img.src,
          subHtml: `<div>${img.alt}</div>`,
        }))}
      />

      <style jsx>{`
        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .masonry-grid {
          column-count: 3;
          column-gap: 16px;
        }
        .gallery-item {
          break-inside: avoid;
          margin-bottom: 16px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
        .gallery-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
          transition: opacity 0.3s;
        }
        @media (max-width: 900px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        @media (max-width: 600px) {
          .masonry-grid {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroGallery;

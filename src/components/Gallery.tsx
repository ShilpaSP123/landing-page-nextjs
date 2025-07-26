'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/2%20(3).webp",
      alt: "Bali Temple Gate",
      title: "Sacred Temples"
    },
    {
      id: 2,
      src: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Bali%20(3).webp",
      alt: "Rice Terraces Walk",
      title: "Rice Terraces"
    },
    {
      id: 3,
      src: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Aditi-Sharma-Bali-1.jpg",
      alt: "Bali Swing Adventure",
      title: "Adventure Swing"
    },
    {
      id: 4,
      src: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Rahul-Menon-1.jpg",
      alt: "Lake Reflection",
      title: "Peaceful Lakes"
    },
    {
      id: 5,
      src: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Saurabh-Tupe-Bali-1.jpg",
      alt: "Beach Sunset",
      title: "Golden Sunsets"
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1)
    } else {
      setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1)
    }
  }

  // Auto-scroll functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1)
    }, 5000) // Auto-scroll every 5 seconds for better viewing time

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const getTransformStyle = (index: number) => {
    const totalImages = galleryImages.length
    let offset = index - currentIndex

    // Create infinite loop effect by finding shortest path
    if (offset > totalImages / 2) {
      offset = offset - totalImages
    } else if (offset < -totalImages / 2) {
      offset = offset + totalImages
    }

    // Special handling for edge cases to create seamless loop
    if (currentIndex === 0 && index === totalImages - 1) {
      offset = -1 // Last image appears to the left of first
    } else if (currentIndex === totalImages - 1 && index === 0) {
      offset = 1 // First image appears to the right of last
    }

    const isCenter = offset === 0
    const absOffset = Math.abs(offset)

    // Enhanced positioning with smoother curves
    const translateX = offset * 300
    const translateY = absOffset * 20 // Slight vertical offset for depth
    const rotateY = offset * -18 // Increased rotation for more dramatic effect
    const rotateX = isCenter ? 0 : absOffset * 3 // Subtle X rotation for non-center items
    const scale = isCenter ? 1 : Math.max(0.7, 1 - absOffset * 0.15)
    const zIndex = isCenter ? 10 : Math.max(0, 8 - absOffset)

    // Smooth opacity curve
    let opacity = 1
    if (absOffset > 2) {
      opacity = 0
    } else if (absOffset > 1) {
      opacity = 1 - (absOffset - 1) * 0.6
    }

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity
    }
  }

  return (
    <section className="gallery-3d">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Discover Bali</h2>
          <p className="gallery-subtitle">Experience the magic through our lens</p>
        </div>

        <div className="gallery-3d-container">
          <button
            className="gallery-3d-nav gallery-3d-nav-left"
            onClick={() => scroll('left')}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="gallery-3d-viewport">
            <div className="gallery-3d-stage">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-3d-item"
                  style={getTransformStyle(index)}
                >
                  <div className="gallery-3d-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={350}
                      height={450}
                      style={{ objectFit: 'cover' }}
                      className="gallery-3d-image"
                    />
                    <div className="gallery-3d-overlay">
                      <h3 className="gallery-3d-title">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="gallery-3d-nav gallery-3d-nav-right"
            onClick={() => scroll('right')}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="gallery-3d-indicators">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`gallery-3d-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

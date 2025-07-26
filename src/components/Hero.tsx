'use client'

import Image from 'next/image'

interface HeroProps {
  onEnquireClick: () => void
}

const Hero = ({ onEnquireClick }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <Image 
          src="https://images.WanderOn.in/ad-campaign-files/2025/04/29/bali-2025/2%20(3).webp" 
          alt="Bali Hero Image" 
          className="hero-image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="hero-content">
        <div className="social-proof">
          <div className="review-item">
            <Image 
              src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/google.png" 
              alt="Google"
              width={20}
              height={20}
            />
            <div className="rating">
              <Image 
                src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/star.png" 
                alt="Star"
                width={12}
                height={12}
              />
              <span>4.9</span>
            </div>
            <span className="review-count">(13,230 reviews)</span>
          </div>
          <div className="review-item">
            <Image 
              src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/tripadvisor.png" 
              alt="TripAdvisor"
              width={20}
              height={20}
            />
            <div className="rating">
              <Image 
                src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/star.png" 
                alt="Star"
                width={12}
                height={12}
              />
              <span>5.0</span>
            </div>
            <span className="review-count">(3,720 reviews)</span>
          </div>
          <div className="review-item">
            <Image 
              src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/facebook.png" 
              alt="Facebook"
              width={20}
              height={20}
            />
            <div className="rating">
              <Image 
                src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/star.png" 
                alt="Star"
                width={12}
                height={12}
              />
              <span>4.9</span>
            </div>
            <span className="review-count">(1,031 reviews)</span>
          </div>
        </div>

        <h1 className="hero-title">Bali</h1>
        
        <div className="pricing">
          <span className="original-price">₹57,999</span>
          <span className="discounted-price">₹47,999</span>
          <span className="starting-from">STARTING FROM</span>
          <div className="deal-badge">Limited Time Deal</div>
        </div>

        <div className="cta-buttons">
          <button className="btn-primary" onClick={onEnquireClick}>
            Enquire Now
          </button>
          <a href="tel:+91-8105678808" className="btn-secondary">Call now</a>
        </div>

        <div className="whatsapp-chat">
          <a 
            href="https://api.whatsapp.com/send?phone=918105678808&text=Hi%20SoloPackers%2C%20I%20have%20a%20query!"
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
            Chat With Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

'use client'

import Image from 'next/image'

interface FooterProps {
  onEnquireClick?: () => void
}

const Footer = ({ onEnquireClick }: FooterProps) => {
  return (
    <footer className="footer-solopackers">
      <div className="container">
        <div className="footer-solopackers-content">
          {/* Column 1 - Logo and CTA */}
          <div className="footer-column footer-col-1">
            <div className="footer-brand">
              <div className="footer-logo">
                <Image
                  src="https://res.cloudinary.com/dwcislsn6/image/upload/v1751631790/App_Icon-02_beicdl.png"
                  alt="SoloPackers"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="footer-company-info">
                <h1 className="footer-company-name">SoloPackers</h1>
                <p className="footer-tagline">Your Travel Companion</p>
              </div>
            </div>
            <h2 className="footer-cta-title">Plan To Tour ?</h2>
            <button
              className="footer-enquire-btn"
              onClick={onEnquireClick}
            >
              Enquire Now
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column footer-col-2">
            <h3>Quick Link</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Tour Package</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-column footer-col-3">
            <div className="contact-item">
              <h4><i className="fas fa-phone"></i> More Inquiry</h4>
              <a href="tel:+918105678808" className="contact-link">+91 8105678808</a>
            </div>

            <div className="contact-item">
              <h4><i className="fas fa-envelope"></i> Send Mail</h4>
              <a href="mailto:info@solopackers.com" className="contact-link">info@solopackers.com</a>
            </div>
          </div>

          {/* Column 4 - Address */}
          <div className="footer-column footer-col-4">
            <div className="contact-item">
              <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
              <a
                href="https://maps.google.com/?q=Sierra+Cartel,+No.91,+17th+cross,+14th+Main+Rd,+Sector+4,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link address-link"
              >
                Sierra Cartel, No.91, 17th cross,<br />
                14th Main Rd, Sector 4,<br />
                HSR Layout, Bengaluru,<br />
                Karnataka 560102
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

'use client'

import { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image
              src="https://res.cloudinary.com/dwcislsn6/image/upload/v1751631790/App_Icon-02_beicdl.png"
              alt="SoloPackers Logo"
              className="logo"
              width={40}
              height={40}
            />
            <span className="company-name">SoloPackers</span>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li className={`nav-item dropdown ${activeDropdown === 'international' ? 'active' : ''}`}>
                <a 
                  href="#" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown('international')
                  }}
                >
                  International Trips <i className="fas fa-chevron-down"></i>
                </a>
                <div className="dropdown-content">
                  <a href="#">Europe</a>
                  <a href="#">Kazakhstan</a>
                  <a href="#">Kenya</a>
                  <a href="#">Georgia</a>
                  <a href="#">Japan</a>
                  <a href="#">Switzerland</a>
                  <a href="#">Bali</a>
                  <a href="#">Sri Lanka</a>
                  <a href="#">Australia</a>
                  <a href="#">Vietnam</a>
                  <a href="#">Dubai</a>
                  <a href="#">Mauritius</a>
                  <a href="#">Thailand</a>
                  <a href="#">Malaysia</a>
                  <a href="#">France</a>
                  <a href="#">Spain</a>
                  <a href="#">Bhutan</a>
                  <a href="#">Maldives</a>
                  <a href="#">Singapore</a>
                  <a href="#">South Africa</a>
                  <a href="#">New Zealand</a>
                </div>
              </li>
              <li className={`nav-item dropdown ${activeDropdown === 'india' ? 'active' : ''}`}>
                <a 
                  href="#" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown('india')
                  }}
                >
                  India Trips <i className="fas fa-chevron-down"></i>
                </a>
                <div className="dropdown-content">
                  <a href="#">Ladakh</a>
                  <a href="#">Rajasthan</a>
                  <a href="#">Spiti</a>
                  <a href="#">Arunachal Pradesh</a>
                  <a href="#">Uttarakhand</a>
                  <a href="#">Meghalaya</a>
                  <a href="#">Andaman</a>
                  <a href="#">Kerala</a>
                  <a href="#">Sikkim</a>
                  <a href="#">Himachal Pradesh</a>
                  <a href="#">Leh Ladakh Bike Trips</a>
                  <a href="#">Kashmir</a>
                  <a href="#">Spiti Valley Bike Trips</a>
                </div>
              </li>

            </ul>

            {/* Mobile Phone Button */}
            <div className="mobile-phone-section">
              <a href="tel:+91-8105678808" className="mobile-phone-link">
                <i className="fas fa-phone"></i>
                +91-8105678808
              </a>
            </div>
          </div>

          <div className="nav-actions">
            <a href="tel:+91-8105678808" className="phone-link">
              <i className="fas fa-phone"></i>
              +91-8105678808
            </a>
          </div>

          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            id="hamburger"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface PackagesProps {
  onEnquireClick: () => void
}

const Packages = ({ onEnquireClick }: PackagesProps) => {
  const [showItinerary, setShowItinerary] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({})

  const toggleSection = (packageId: number, section: string) => {
    const key = `${packageId}-${section}`
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }
  const packages = [
    {
      id: 1,
      image: "https://images.wanderon.in/ad-campaign-files/2025/04/28/bali-2025/kuta.jpg",
      duration: "7 NIGHTS 8 DAYS",
      locations: "Ubud • Gili • Nusa Penida • Kuta",
      title: "8 Days of Bali Trip With Mesmerising Gili and Nusa Penida",
      price: "₹47,999",
      priceLabel: "Per Person",
      inclusions: [
        { icon: "fas fa-bed", text: "Stay" },
        { icon: "fas fa-utensils", text: "Meals" },
        { icon: "fas fa-eye", text: "Sightseeing & Activities" },
        { icon: "fas fa-bus", text: "Local Transport" },
        { icon: "fas fa-headset", text: "Trip Assistance" },
        { icon: "fas fa-user-tie", text: "Trip Captain" },
        { icon: "fas fa-plane", text: "Flights", additional: true }
      ]
    },
    {
      id: 2,
      image: "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Ubud.webp",
      duration: "5 NIGHTS 6 DAYS",
      locations: "Ubud • Kintamani • Ubud Village • Kuta • Nusa Penida • Tanjung Benoa • Uluwatu Temple",
      title: "6 Days Exotic Bali Tour with Nusa Penida and Bali Swing",
      price: "₹58,500",
      priceLabel: "Per Person",
      inclusions: [
        { icon: "fas fa-bed", text: "Stay" },
        { icon: "fas fa-utensils", text: "Meals" },
        { icon: "fas fa-eye", text: "Sightseeing & Activities" },
        { icon: "fas fa-bus", text: "Local Transport" },
        { icon: "fas fa-headset", text: "Trip Assistance" },
        { icon: "fas fa-plane", text: "Flights" }
      ]
    }
  ]

  return (
    <section className="packages" id="packages">
      <div className="container">
        <h2 className="section-title">BALI PACKAGES</h2>



        <div className="packages-horizontal">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card-horizontal">
              <div className="package-image-horizontal">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <div className="package-duration-horizontal">{pkg.duration}</div>
              </div>

              <div className="package-content-horizontal">
                <h3 className="package-title-horizontal">{pkg.title}</h3>

                <div className="package-inclusions-horizontal">
                  {pkg.inclusions.map((inclusion, index) => (
                    <div
                      key={index}
                      className={`inclusion-item-horizontal ${inclusion.additional ? 'additional' : ''}`}
                    >
                      <i className={inclusion.icon}></i>
                      <span>{inclusion.text}</span>
                      {inclusion.additional && <small>Additional</small>}
                    </div>
                  ))}
                </div>

                <div className="package-sections-horizontal">
                  <div className="package-section-horizontal">
                    <div
                      className="package-section-header"
                      onClick={() => toggleSection(pkg.id, 'itinerary')}
                    >
                      <h4>BRIEF ITINERARY</h4>
                      <i className={`fas fa-chevron-down ${expandedSections[`${pkg.id}-itinerary`] ? 'rotated' : ''}`}></i>
                    </div>
                    {expandedSections[`${pkg.id}-itinerary`] && (
                      <div className="package-section-content">
                        <div className="itinerary-brief">
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 1</span>
                            <span className="day-desc">Welcome to Bali | Transfer to Ubud. Rest & relax amidst nature.</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 2</span>
                            <span className="day-desc">Swing Over Rice Fields| Thrilling ATV Ride through Ubud's Countryside</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 3</span>
                            <span className="day-desc">Leisure Day in Ubud | Explore temples, waterfalls & rice terraces</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 4</span>
                            <span className="day-desc">Transfer to Gili Trawangan| Sail through the sea to this island paradise</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 5</span>
                            <span className="day-desc">Explore Gili at Leisure| Enjoy beach vibes, snorkelling & sunsets</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 6</span>
                            <span className="day-desc">Ferry to Nusa Penida| Visit Kelingking Beach for a stunning sunset</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 7</span>
                            <span className="day-desc">Sunrise at Diamond Beach| Sunset at Uluwatu Temple & Kecak Dance</span>
                          </div>
                          <div className="day-item-accordion">
                            <span className="day-label">DAY 8</span>
                            <span className="day-desc">Leisure Day in Kuta| Surf, shop, relax or enjoy a Balinese spa</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="package-section-horizontal">
                    <div
                      className="package-section-header"
                      onClick={() => toggleSection(pkg.id, 'attractions')}
                    >
                      <h4>KEY ATTRACTIONS</h4>
                      <i className={`fas fa-chevron-down ${expandedSections[`${pkg.id}-attractions`] ? 'rotated' : ''}`}></i>
                    </div>
                    {expandedSections[`${pkg.id}-attractions`] && (
                      <div className="package-section-content">
                        <div className="attractions-brief">
                          <div className="attraction-item">• Diamond Beach, Nusa Penida</div>
                          <div className="attraction-item">• Bali Swing & Rice Terraces</div>
                          <div className="attraction-item">• Uluwatu Temple & Sunset</div>
                          <div className="attraction-item">• Gili Islands Snorkeling</div>
                          <div className="attraction-item">• Traditional Balinese Villages</div>
                          <div className="attraction-item">• Sacred Monkey Forest</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="package-bottom-horizontal">
                  <div className="package-price-horizontal">
                    <span className="price-label-horizontal">STARTS FROM</span>
                    <div className="price-horizontal">
                      <span className="price-amount">{pkg.price}</span>
                      <span className="price-per">/ {pkg.priceLabel}</span>
                    </div>
                  </div>

                  <button className="btn-enquire-horizontal" onClick={() => setShowItinerary(true)}>
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItinerary && (
        <div className={`modal active`} onClick={() => setShowItinerary(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowItinerary(false)}>&times;</span>
            <div className="modal-header">
              <h2>Brief Itinerary</h2>
            </div>

            <div className="enquiry-form">
              {/* Itinerary Days */}
              <div className="itinerary-content">
                <div className="itinerary-day">
                  <div className="day-number">DAY 1</div>
                  <div className="day-description">Welcome to Bali | Transfer to Ubud. Rest & relax amidst nature.</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 2</div>
                  <div className="day-description">Swing Over Rice Fields| Thrilling ATV Ride through Ubud's Countryside</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 3</div>
                  <div className="day-description">Leisure Day in Ubud | Explore temples, waterfalls & rice terraces</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 4</div>
                  <div className="day-description">Transfer to Gili Trawangan| Sail through the sea to this island paradise</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 5</div>
                  <div className="day-description">Explore Gili at Leisure| Enjoy beach vibes, snorkelling & sunsets</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 6</div>
                  <div className="day-description">Ferry to Nusa Penida| Visit Kelingking Beach for a stunning sunset</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 7</div>
                  <div className="day-description">Sunrise at Diamond Beach| Sunset at Uluwatu Temple & Kecak Dance</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 8</div>
                  <div className="day-description">Leisure Day in Kuta| Surf, shop, relax or enjoy a Balinese spa</div>
                </div>
                <div className="itinerary-day">
                  <div className="day-number">DAY 9</div>
                  <div className="day-description">Fly Back to Home| Take your tropical Bali memories!</div>
                </div>
              </div>

              {/* Key Attractions */}
              <div className="attractions-section">
                <h3>Key Attractions</h3>
                <ul className="attractions-list">
                  <li>
                    <span>•</span>
                    <span>Catch postcard-perfect sunrise moments at Diamond Beach on Nusa Penida.</span>
                  </li>
                  <li>
                    <span>•</span>
                    <span>Take a scenic sea ride to explore Gili Island bliss.</span>
                  </li>
                  <li>
                    <span>•</span>
                    <span>Dive into Bali's soul at Uluwatu and Kecak show.</span>
                  </li>
                  <li>
                    <span>•</span>
                    <span>Ride ATVs through rice fields, villages, and streams.</span>
                  </li>
                  <li>
                    <span>•</span>
                    <span>Fly high on Bali Swing with panoramic jungle views.</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <a href="tel:+91-9090403075" className="btn-call">
                  <i className="fas fa-phone"></i>
                </a>
                <button
                  onClick={onEnquireClick}
                  className="btn-submit"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Packages

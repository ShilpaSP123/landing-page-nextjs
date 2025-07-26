'use client'

import Image from 'next/image'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      images: [
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Aditi-Sharma-Bali-1.jpg",
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Aditi-Sharma-Bali-2.jpg"
      ],
      text: "SoloPackers handled everything, from my Delhi check‑in to the hotel in Ubud, so smoothly. Drivers were on time, rooms were clean, and I never had to worry about tickets or transfers. Perfect first trip abroad.",
      author: "Aditi Sharma (Delhi) - Smooth Flights & Stays"
    },
    {
      id: 2,
      images: [
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Rahul-Menon-1.jpg",
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Rahul-Menon-2.jpg"
      ],
      text: "The price looked high until I saw what was included: beachfront hotel, speedboat to Nusa Penida, and no hidden fees. Quality stays and smooth transport made every rupee count. The process from getting custom package, booking and everything untill the trip-end was managed perfectly.",
      author: "Rahul Menon (Bengaluru) - Value for Money Trip With SoloPackers"
    },
    {
      id: 3,
      images: [
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Saurabh-Tupe-Bali-1.jpg",
        "https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Saurabh-Tupe-Bali-2.jpg"
      ],
      text: "Had a visa glitch at midnight; SoloPackers support replied in minutes and fixed it. Knowing help was always there let me relax and enjoy Bali to the fullest.",
      author: "Saurabh Tupe (Pune) - A Perfect Bali Trip!"
    }
  ]

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="section-title">Unfiltered Reviews</h2>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-images">
                <Image 
                  src={review.images[0]} 
                  alt={review.author} 
                  className="review-img-1"
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                />
                <Image 
                  src={review.images[1]} 
                  alt={review.author} 
                  className="review-img-2"
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="review-content">
                <p>"{review.text}"</p>
                <h4>{review.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

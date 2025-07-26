'use client'

import { useState } from 'react'

const FAQ = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      number: "01",
      question: "What do SoloPackers' Bali tour packages from India include?",
      answer: "All our Bali tour packages from India cover return flights, comfy stays, daily breakfast, inter‑island ferries, activities (Bali Swing, ATV, Uluwatu sunset show) and a friendly trip captain, so you enjoy Bali hassle‑free."
    },
    {
      id: 2,
      number: "02",
      question: "Are flights part of every SoloPackers Bali trip package?",
      answer: "Most of our Bali packages include flights, but some offer flights as an additional option. Check the package details for specific inclusions."
    },
    {
      id: 3,
      number: "03",
      question: "Can I customise my Bali holiday package?",
      answer: "Yes, we offer customizable Bali packages. Contact our travel experts to tailor your itinerary according to your preferences and budget."
    },
    {
      id: 4,
      number: "04",
      question: "Are SoloPackers tours good for solo travellers?",
      answer: "Absolutely! Our group tours are perfect for solo travelers. You'll meet like-minded people and have a trip captain to ensure you have a great experience."
    },
    {
      id: 5,
      number: "05",
      question: "How much money should I carry for personal spends?",
      answer: "We recommend carrying $200-300 USD for personal expenses like shopping, additional meals, and optional activities not included in the package."
    }
  ]

  const toggleFAQ = (id: number) => {
    setActiveItem(activeItem === id ? null : id)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">FAQ&apos;S</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeItem === faq.id ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="faq-number">{faq.number}</span>
                <h3>{faq.question}</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

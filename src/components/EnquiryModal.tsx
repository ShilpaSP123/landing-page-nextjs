'use client'

import { useState, FormEvent, useEffect } from 'react'
import Image from 'next/image'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <Image 
            src="https://images.wanderon.in/ad-campaign-files/2025/04/29/bali-2025/Bali%20(3).webp" 
            alt="Bali" 
            className="modal-image"
            width={500}
            height={200}
            style={{ objectFit: 'cover' }}
          />
          <h2>Still Wondering? 🔥<br />Let Us Plan Your Dream Bali Trip!</h2>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name *" 
              required 
              value={formData.name}
              onChange={handleInputChange}
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email Id *" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone *" 
              required 
              value={formData.phone}
              onChange={handleInputChange}
            />
            <i className="fas fa-phone"></i>
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <i className="fas fa-comment"></i>
          </div>
          <button type="submit" className="btn-submit">ENQUIRE NOW</button>
        </form>
      </div>
    </div>
  )
}

export default EnquiryModal

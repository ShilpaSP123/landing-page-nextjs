'use client'

import { useState, FormEvent } from 'react'

interface CallbackModalProps {
  isOpen: boolean
  onClose: () => void
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Callback form submitted:', formData)
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

  if (!isOpen) return null

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>Where do you want to go next?</h2>
          <p>Make your move, fill out your details now!</p>
        </div>
        <form className="callback-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CallbackModal

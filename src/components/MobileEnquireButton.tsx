'use client'

import React from 'react'

interface MobileEnquireButtonProps {
  onEnquireClick: () => void
}

const MobileEnquireButton = ({ onEnquireClick }: MobileEnquireButtonProps) => {
  return (
    <div className="mobile-enquire-fixed">
      <button 
        className="mobile-enquire-btn"
        onClick={onEnquireClick}
      >
        <i className="fas fa-paper-plane"></i>
        Enquire Now
      </button>
    </div>
  )
}

export default MobileEnquireButton

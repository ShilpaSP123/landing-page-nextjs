'use client'

const WhatsAppFixed = () => {
  return (
    <div className="whatsapp-fixed">
      <a 
        href="https://api.whatsapp.com/send?phone=918105678808&text=Hi%20SoloPackers%2C%20I%20have%20a%20query!"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default WhatsAppFixed

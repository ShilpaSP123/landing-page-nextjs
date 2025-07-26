'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import EnquiryModal from '@/components/EnquiryModal'
import CallbackModal from '@/components/CallbackModal'
import WhatsAppFixed from '@/components/WhatsAppFixed'
import MobileEnquireButton from '@/components/MobileEnquireButton'

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false)

  const openEnquiryModal = () => setIsEnquiryModalOpen(true)
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false)
  const openCallbackModal = () => setIsCallbackModalOpen(true)
  const closeCallbackModal = () => setIsCallbackModalOpen(false)

  return (
    <>
      <Header />
      <Hero onEnquireClick={openEnquiryModal} />
      <Packages onEnquireClick={openEnquiryModal} />
      <Reviews />
      <Gallery />
      <FAQ />
      <Footer onEnquireClick={openEnquiryModal} />
      <WhatsAppFixed />
      <MobileEnquireButton onEnquireClick={openEnquiryModal} />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
      />
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={closeCallbackModal}
      />
    </>
  )
}

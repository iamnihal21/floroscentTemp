
"use client"

import { useState, useEffect } from "react"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "../../../../../public/UI/button"
import { FullMenu } from "./full-menu"
import AdmissionInquiry from "../home/admissionInquiry"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          px-4 py-3 md:px-6 md:py-4
          ${scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="flex items-center justify-between w-full">
          {/* LEFT — Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/UI/button.svg"
              alt="School Logo"
              width={200}
              height={80}
              priority
              className="h-12 w-auto md:h-16"
            />
          </div>

          {/* RIGHT — Actions */}
          <nav className="flex items-center gap-4 md:gap-8">
            {/* Inquiry */}
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              className={`
                p-0 font-semibold text-base md:text-xl tracking-wide
                transition-all
                ${scrolled
                  ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent"
                  : "text-white"}
              `}
            >
              Inquiry
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-colors ${
                  scrolled ? "text-yellow-400" : "text-white"
                }`}
              />
            </Button>

            {/* Payment */}
            <Button
              variant="ghost"
              className={`
                p-0 font-semibold text-base md:text-xl tracking-wide
                transition-all
                ${scrolled
                  ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent"
                  : "text-white"}
              `}
            >
              Payment
            </Button>

            {/* Menu */}
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-300 hover:text-yellow-300 hover:bg-white/10 transition p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Modals */}
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  )
}

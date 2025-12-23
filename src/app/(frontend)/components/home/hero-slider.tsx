"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const heroRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image:
        "https://c1.wallpaperflare.com/preview/968/730/441/building-cheyenne-photos-high-school.jpg",
      title: "DISCOVER YOUR POWER",
      highlightWord: "YOUR",
    },
    {
      image:
        "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
      title: "PURSUE YOUR PASSION",
      highlightWord: "YOUR",
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/611/708/941/star-wars-emperor-palpatine-stormtrooper-school-wallpaper-preview.jpg",
      title: "EXPRESS YOUR CREATIVITY",
      highlightWord: "YOUR",
    },
    {
      image:
        "https://wallpaper.forfun.com/fetch/e4/e4ed827f7070b0b921e0d100201e95a9.jpeg",
      title: "ACHIEVE YOUR GOALS",
      highlightWord: "YOUR",
    },
  ]

  /* Scroll fade */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.94])

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length
        setDirection(next > prev ? 1 : -1)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.8,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.8,
    }),
  }

  const contentVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 80 : -80,
    }),
    center: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -80 : 80,
    }),
  }

  return (
    <section className="relative h-[200vh] bg-black">
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Background */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center max-w-5xl"
            >
              {/* RESPONSIVE TITLE */}
              <h1
                className="
                font-bold leading-[1.15]
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                flex flex-wrap justify-center gap-x-3 gap-y-2
              "
              >
                {slides[activeSlide].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      word === slides[activeSlide].highlightWord
                        ? "bg-[#374151] px-4 py-1 rounded-sm"
                        : ""
                    }
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12" />
          </motion.div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-6 left-6 text-white z-20 max-w-xs">
          <p className="text-xs sm:text-sm leading-relaxed mb-3">
            An independent, co-educational college
            <br />
            preparatory day school for grades 7–12
          </p>

          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeSlide ? 1 : -1)
                  setActiveSlide(index)
                }}
                className={`w-3 h-3 rounded-full border-2 ${
                  index === activeSlide
                    ? "bg-[#FFD700] border-[#FFD700]"
                    : "border-[#FFD700]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="border-b-4 border-[#FFD700] pb-1">
            <span className="text-sm sm:text-lg font-bold tracking-wider">
              #HWDISCOVER
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HomePage, Media } from "@/payload/payload-types"

type ResultItem = NonNullable<HomePage["resultsHighlight"]>[number]

interface ResultsProps {
  results: ResultItem[]
}

export function ResultsSection({ results = [] }: ResultsProps) {
  if (!results.length) return null

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-slate-900 tracking-tight"
        >
          Academic Achievements
        </motion.h2>

        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {results.map((result, idx) => {
            const image = result.image as Media
            const imageOnLeft = idx % 2 === 1 
            const sanitizedTitle = result.title ?? undefined

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
              >
                {/* IMAGE CARD 
                  On Mobile: Always appears first (order-1)
                  On Desktop: Alternates based on index
                */}
                <div className={`order-1 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ImageCard image={image} title={sanitizedTitle} />
                </div>

                {/* CONTENT CARD 
                  On Mobile: Always appears second (order-2)
                  On Desktop: Alternates based on index
                */}
                <div className={`order-2 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ContentCard 
                    result={result} 
                    animateFrom={imageOnLeft ? "right" : "left"} 
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------- */
/* Content Card Component */
/* ----------------------- */

function ContentCard({
  result,
  animateFrom,
}: {
  result: ResultItem
  animateFrom: "left" | "right"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: animateFrom === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 lg:p-14 shadow-sm border border-slate-100"
    >
      <span className="text-primary font-bold text-base md:text-lg mb-2 md:mb-3 block">
        {result.year}
      </span>

      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-slate-800 leading-tight">
        {result.title}
      </h3>

      {result.stats?.length ? (
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {result.stats.map((stat, i) => (
            <div key={i} className="bg-white/50 p-4 rounded-2xl border border-slate-100/50">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-slate-600 text-[10px] md:text-xs uppercase font-semibold tracking-wider mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 italic text-sm">Statistics not provided</p>
      )}
    </motion.div>
  )
}

/* -------------------- */
/* Image Card Component */
/* -------------------- */

function ImageCard({
  image,
  title,
}: {
  image?: Media
  title?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-100"
    >
      {image?.url ? (
        <Image
          src={image.url}
          alt={image.alt || title || "Result"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-medium">
          Image Placeholder
        </div>
      )}
      
      {/* Decorative overlay for a premium look */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] md:rounded-[2.5rem]" />
    </motion.div>
  )
}
'use client'

import React from 'react' // Add this line to fix the ESLint error
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HomePage, Media } from '@/payload/payload-types'

type ResultItem = NonNullable<HomePage['resultsHighlight']>[number]

interface ResultsProps {
  results: ResultItem[]
}

export function ResultsSection({ results = [] }: ResultsProps) {
  if (!results.length) return null

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          {results.map((result, idx) => {
            const image = result.image as Media
            const imageOnLeft = idx % 2 === 1

            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ImageCard image={image} title={result.title || 'Result Image'} />
                </div>
                <div className={`${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ResultTableCard result={result} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ResultTableCard({ result }: { result: ResultItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-8 px-2 uppercase">
        {result.title}
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-widest">
                Academic Year
              </th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-widest text-right">
                School Result
              </th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-widest text-right">
                Board Result
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {result.yearlyData?.map((data: any, i: number) => (
              <tr key={i} className="bg-white hover:bg-slate-50 transition">
                {/* Academic Year */}
                <td className="p-4 text-sm md:text-base font-semibold text-[#1e3a5a]">
                  {data.academicYear}
                </td>

                {/* School Result */}
                <td className="p-4 text-xl md:text-2xl font-bold text-[#ffc107] text-right">
                  {data.schoolResult}
                </td>

                {/* Board Result */}
                <td className="p-4 text-xl md:text-2xl font-bold text-[#ffc107] text-right">
                  {data.boardResult}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 px-2 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">
        OFFICIAL G.S.E.B BOARD STANDARDS
      </p>
    </motion.div>
  )
}

function ImageCard({ image, title }: { image?: Media; title: string }) {
  return (
    <div className="relative h-[300px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl">
      {image?.url ? (
        <Image
          src={image.url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400">
          <span className="text-4xl mb-2">🎓</span>
          <p className="text-xs uppercase font-bold tracking-tighter">No Image Provided</p>
        </div>
      )}
    </div>
  )
}

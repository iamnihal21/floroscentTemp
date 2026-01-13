'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AchievementsPage, Media } from '@/payload/payload-types'
import { Trophy, Award, Star, TrendingUp, Target, Zap } from 'lucide-react'

const statColors = [
  'from-primary/20 to-primary/10',
  'from-secondary/20 to-secondary/10',
  'from-accent/20 to-accent/10',
  'from-primary/20 to-accent/20',
]

function resolveMediaUrl(image?: number | Media | null): string | null {
  if (!image || typeof image !== 'object') return null
  return image.url ?? null
}

export default function SchoolView({ data }: { data: AchievementsPage['schoolAchievements'] }) {
  if (!data) return null

  const achievementIcons = [Trophy, Award, Star, TrendingUp, Target, Zap]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* ---------------- HERO ---------------- */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-24 h-1 bg-chart-1 mx-auto mb-10"
            ></motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative md:mt-20"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Here To Guide You Forward
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- STATS ---------------- */}
      {data.stats?.length ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.stats.map((stat, i) => (
              <div key={stat.id} className="rounded-2xl border bg-card p-6 text-center">
                <div
                  className={`inline-block p-3 rounded-xl bg-gradient-to-r ${statColors[i % statColors.length]}`}
                >
                  {stat.iconEmoji ?? '⭐'}
                </div>
                <div className="text-3xl font-bold mt-3">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}

      {/* ---------------- GALLERY ---------------- */}
      {data.items?.length ? (
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-16">Achievements Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {data.items.map((item, i) => {
                const Icon = achievementIcons[i % achievementIcons.length]
                const imageUrl = resolveMediaUrl(item.image)

                return (
                  <motion.div key={item.id} className="rounded-3xl border bg-card overflow-hidden">
                    {imageUrl && (
                      <div className="relative aspect-video">
                        <Image src={imageUrl} alt={item.title} fill className="object-cover" />
                        <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-xl">
                          <Icon />
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>
      ) : null}
    </div>
  )
}

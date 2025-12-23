import { HeroSlider } from '@/app/(frontend)/components/home/hero-slider'
import { ContentSection } from '@/app/(frontend)/components/home/content-section'
import { TestimonialsSlider } from '@/app/(frontend)/components/home/testimonials-slider'
import { MapsSection } from '@/app/(frontend)/components/home/maps-section'
import { ResultsSection } from '@/app/(frontend)/components/home/result-secion'
// import { DiscoverSection } from "@/app/components/home/textDiscoverSection"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      {/* <DiscoverSection /> */}
      <ContentSection />
      <ResultsSection />
      <TestimonialsSlider />
      <MapsSection />
    </main>
  )
}

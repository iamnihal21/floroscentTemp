"use client"

import { motion } from "framer-motion"

export default function LeadershipPage() {
  // Static data for the page
  const director = {
    name: "Dr. Kirit Joshi",
    designation: "Educationalist | Academic Administrator",
    experience_years: 47,
    message: "Education is not merely the acquisition of knowledge but the cultivation of wisdom, character, and humanity. At Florescent, we believe that every child is a unique potential waiting to be realized.",
    achievements: [
      "National Presidential Award",
      "State Best Teacher Award",
      "Author of multiple textbooks & educational materials",
      "Contributor to SCE Project of GSHSEB",
      "Trained hundreds of teachers across Gujarat"
    ],
    bio: "Director, M.R. Patel Educational Campus. Member, Gujarat School Quality Accreditation Council. Teacher, Principal, Campus Director in leading schools."
  }

  const principal = {
    name: "Dr. Anjali Sharma",
    designation: "Visionary Educator | School Leader",
    experience_years: 25,
    message: "As the Principal of Florescent Public School, my vision is to create a learning ecosystem that empowers every student to reach their fullest potential. We focus on holistic development—balancing academic rigor with emotional intelligence and ethical values.",
    achievements: [
      "National Awardee in Education",
      "Published Author on Child Psychology",
      "Innovator in Digital Learning",
      "Leader in Inclusive Education"
    ]
  }

  const school = {
    founder_quote: "Education is the most powerful tool for nation-building. A teacher's duty extends far beyond the classroom—it's about shaping lives and building futures.",
    core_values: [
      "Every child has unique potential",
      "Education shapes character and competence",
      "Learning extends beyond classrooms",
      "Innovation in teaching methodologies",
      "Community engagement and service"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        {/* Animated Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Leadership & Vision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Guiding <span className="text-primary">Lights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leaders who shape the future of Florescent with dedication, innovation, and excellence.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Director's Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Director's <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Visionary leadership that transforms education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Director Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg sticky top-24">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍🏫</div>
                    <p className="text-sm text-muted-foreground">Director's Portrait</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{director.name}</h3>
                  <p className="text-primary font-semibold mb-4">{director.designation}</p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">{director.experience_years}+</div>
                      <div className="text-sm text-muted-foreground">Years of Service</div>
                    </div>
                    
                    <div className="space-y-2">
                      {director.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-center justify-center gap-2">
                          <span className="text-yellow-500">🏆</span>
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Director's Message & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                {/* Director's Message */}
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">A Message from Our Director</h3>
                      <p className="text-muted-foreground text-sm">Wisdom from decades of educational leadership</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {director.message}
                    </p>
                    <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary">
                      <p className="text-foreground italic">
                        "{school.founder_quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🏛️</span>
                      </div>
                      <h4 className="font-bold text-foreground">Leadership Roles</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {director.bio.split('. ').map((role, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📚</span>
                      </div>
                      <h4 className="font-bold text-foreground">Contributions</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {director.achievements.slice(2, 5).map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Principal's <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Dedicated leadership for academic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Principal's Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Principal's Vision</h3>
                      <p className="text-muted-foreground text-sm">Shaping tomorrow's leaders today</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {principal.message}
                    </p>
                    <div className="bg-secondary/5 p-4 rounded-xl border-l-4 border-secondary">
                      <p className="text-foreground italic">
                        "The role of an educator is to light the path, not to fill the vessel. 
                        At Florescent, we focus on nurturing curious minds and compassionate hearts."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Principal Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👩‍🏫</div>
                    <p className="text-sm text-muted-foreground">Principal's Portrait</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{principal.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{principal.designation}</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-secondary">{principal.experience_years}+</div>
                        <div className="text-xs text-muted-foreground">Years Exp</div>
                      </div>
                      <div className="bg-accent/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-accent">1000+</div>
                        <div className="text-xs text-muted-foreground">Students Guided</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {principal.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-center justify-center gap-2">
                          <span className="text-yellow-500">🎖️</span>
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      

      {/* Call to Action */}
    </div>
  )
}
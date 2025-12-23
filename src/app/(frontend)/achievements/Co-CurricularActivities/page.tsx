"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Music, Palette, Dumbbell, Theater,
  Users, Trophy, Calendar, Clock,
  MapPin, Users2, Target, BookOpen,
  Search, Heart,Download
} from "lucide-react"

export default function CoCurricularPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [likedActivities, setLikedActivities] = useState<Set<number>>(new Set())

  const categories = [
    { id: "all", label: "All Activities", count: 32 },
    { id: "sports", label: "Sports", count: 12 },
    { id: "arts", label: "Arts & Crafts", count: 8 },
    { id: "music", label: "Music & Dance", count: 6 },
    { id: "drama", label: "Drama & Theater", count: 4 },
    { id: "clubs", label: "Student Clubs", count: 10 },
  ]

  const featuredActivities = [
    {
      id: 1,
      title: "Annual Music Concert",
      category: "music",
      description: "A grand musical extravaganza featuring student performances",
      schedule: "Every Friday, 3:00 PM - 5:00 PM",
      venue: "School Auditorium",
      instructor: "Mr. Sharma (Professional Musician)",
      capacity: "50 students",
      icon: Music,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      id: 2,
      title: "Basketball Academy",
      category: "sports",
      description: "Professional coaching for budding basketball players",
      schedule: "Mon, Wed, Fri - 4:00 PM - 6:00 PM",
      venue: "School Basketball Court",
      instructor: "Coach Singh (State Level Player)",
      capacity: "30 students",
      icon: Dumbbell,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      id: 3,
      title: "Art & Painting Workshop",
      category: "arts",
      description: "Creative sessions exploring various painting techniques",
      schedule: "Every Saturday, 10:00 AM - 1:00 PM",
      venue: "Art Room",
      instructor: "Ms. Gupta (Professional Artist)",
      capacity: "25 students",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-500"
    },
  ]

  const clubsAndSocieties = [
    {
      name: "Science Club",
      category: "clubs",
      members: "45",
      description: "Exploring scientific wonders through experiments and projects",
      achievements: ["National Science Fair Winners", "3 Research Papers Published"],
      icon: BookOpen,
      color: "bg-blue-500/10"
    },
    {
      name: "Eco Warriors",
      category: "clubs",
      members: "38",
      description: "Environmental conservation and sustainability initiatives",
      achievements: ["Green School Certification", "Tree Plantation Drive"],
      icon: Users,
      color: "bg-green-500/10"
    },
    {
      name: "Literary Society",
      category: "clubs",
      members: "52",
      description: "Creative writing, debates, and literary discussions",
      achievements: ["Inter-school Debate Champions", "Published School Magazine"],
      icon: Theater,
      color: "bg-yellow-500/10"
    },
    {
      name: "Sports Council",
      category: "sports",
      members: "60",
      description: "Organizing sports events and promoting fitness",
      achievements: ["State Level Champions", "Annual Sports Day"],
      icon: Trophy,
      color: "bg-red-500/10"
    },
  ]

  const upcomingEvents = [
    {
      title: "Inter-house Sports Meet",
      date: "March 25, 2024",
      time: "9:00 AM - 4:00 PM",
      venue: "School Ground",
      category: "sports",
      participants: "All Students"
    },
    {
      title: "Art Exhibition",
      date: "April 5, 2024",
      time: "10:00 AM - 5:00 PM",
      venue: "Art Gallery",
      category: "arts",
      participants: "Art Club Members"
    },
    {
      title: "Music Recital",
      date: "April 12, 2024",
      time: "4:00 PM - 6:00 PM",
      venue: "Auditorium",
      category: "music",
      participants: "Music Students"
    },
    {
      title: "Drama Production",
      date: "April 20, 2024",
      time: "5:00 PM - 8:00 PM",
      venue: "Auditorium",
      category: "drama",
      participants: "Drama Club"
    },
  ]

  const activitySchedule = [
    { day: "Monday", activities: ["Basketball", "Music", "Science Club"] },
    { day: "Tuesday", activities: ["Swimming", "Art", "Debate Club"] },
    { day: "Wednesday", activities: ["Football", "Dance", "Eco Club"] },
    { day: "Thursday", activities: ["Cricket", "Drama", "Literary Society"] },
    { day: "Friday", activities: ["Music Concert", "Yoga", "Sports Council"] },
    { day: "Saturday", activities: ["Art Workshop", "Special Events", "Club Meetings"] },
  ]

  const achievements = [
    { activity: "Basketball Team", achievement: "State Champions 2024", level: "State" },
    { activity: "Music Band", achievement: "National Competition Winners", level: "National" },
    { activity: "Art Club", achievement: "International Exhibition", level: "International" },
    { activity: "Debate Team", achievement: "Inter-school Champions", level: "Regional" },
  ]

  const resources = [
    { name: "Sports Equipment List", type: "PDF", size: "2.4 MB" },
    { name: "Music Practice Schedule", type: "DOC", size: "1.8 MB" },
    { name: "Art Supplies Guide", type: "PDF", size: "3.1 MB" },
    { name: "Club Registration Form", type: "DOC", size: "1.2 MB" },
  ]

  const toggleLike = (activityId: number) => {
    const newLiked = new Set(likedActivities)
    if (newLiked.has(activityId)) {
      newLiked.delete(activityId)
    } else {
      newLiked.add(activityId)
    }
    setLikedActivities(newLiked)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        
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
          className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Beyond Academics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Co-curricular <span className="text-chart-1">Activities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Nurturing talents, building character, and creating well-rounded individuals
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}

      {/* Featured Activities */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-chart-1" />
                Featured Activities
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center`}>
                          <activity.icon className="w-6 h-6" />
                        </div>
                        <button
                          onClick={() => toggleLike(activity.id)}
                          className={`p-2 rounded-full ${likedActivities.has(activity.id) ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          <Heart className={`w-5 h-5 ${likedActivities.has(activity.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
                      <p className="text-muted-foreground mb-6">{activity.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{activity.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{activity.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users2 className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Instructor: {activity.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Capacity: {activity.capacity}</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clubs & Societies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Clubs & Societies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clubsAndSocieties.map((club, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${club.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <club.icon className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{club.name}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{club.members} Members</span>
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            {club.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {club.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {achievement}</li>
                        ))}
                      </ul>
                    </div>

                    {/* <button className="w-full px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                      Join Club
                    </button> */}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Upcoming Events</h2>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Event</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Date & Time</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Venue</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Participants</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingEvents.map((event, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-foreground">{event.title}</div>
                              <div className="text-sm text-muted-foreground">{event.category}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{event.venue}</td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{event.participants}</td>
                          <td className="py-4 px-4">
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div> */}

            {/* Weekly Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Weekly Activity Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activitySchedule.map((day, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">{day.day}</h3>
                    <ul className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Recent Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-foreground">{item.activity}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.level === 'International' ? 'bg-purple-500/10 text-purple-500' :
                        item.level === 'National' ? 'bg-blue-500/10 text-blue-500' :
                        item.level === 'State' ? 'bg-green-500/10 text-green-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { useState } from 'react'
// import { 
//   Music, Palette, Dumbbell, Theater,
//   Users, Trophy, Calendar, Clock,
//   MapPin, Users2, Target, BookOpen,
//   Heart, ChevronRight
// } from 'lucide-react'
// import { useCoCurricularActivities, useStudentClubs } from '../../hooks/useSupabaseData'

// // Category mapping for icons
// const categoryIcons: Record<string, any> = {
//   music: Music,
//   arts: Palette,
//   sports: Dumbbell,
//   drama: Theater,
//   clubs: Users,
//   other: Trophy
// }

// // Category colors
// const categoryColors: Record<string, string> = {
//   music: 'bg-purple-500/10 text-purple-500',
//   sports: 'bg-blue-500/10 text-blue-500',
//   arts: 'bg-pink-500/10 text-pink-500',
//   drama: 'bg-orange-500/10 text-orange-500',
//   clubs: 'bg-green-500/10 text-green-500',
//   other: 'bg-gray-500/10 text-gray-500'
// }

// export default function CoCurricularPage() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [likedActivities, setLikedActivities] = useState<Set<string>>(new Set())

//   // Fetch data from Supabase
//   const { data: activities, loading: activitiesLoading, error: activitiesError } = useCoCurricularActivities()
//   const { data: clubs, loading: clubsLoading, error: clubsError } = useStudentClubs()

//   const categories = [
//     { id: 'all', label: 'All Activities', count: activities?.length || 0 },
//     { id: 'sports', label: 'Sports', count: activities?.filter(a => a.category === 'sports').length || 0 },
//     { id: 'arts', label: 'Arts & Crafts', count: activities?.filter(a => a.category === 'arts').length || 0 },
//     { id: 'music', label: 'Music & Dance', count: activities?.filter(a => a.category === 'music').length || 0 },
//     { id: 'drama', label: 'Drama & Theater', count: activities?.filter(a => a.category === 'drama').length || 0 },
//     { id: 'clubs', label: 'Student Clubs', count: clubs?.length || 0 },
//   ]

//   const toggleLike = (activityId: string) => {
//     const newLiked = new Set(likedActivities)
//     if (newLiked.has(activityId)) {
//       newLiked.delete(activityId)
//     } else {
//       newLiked.add(activityId)
//     }
//     setLikedActivities(newLiked)
//   }

//   const filteredActivities = activities?.filter(activity => 
//     activeCategory === 'all' || activity.category === activeCategory
//   ) || []

//   // Sample data (fallback when database is empty)
//   const sampleFeaturedActivities = [
//     {
//       id: '1',
//       title: 'Annual Music Concert',
//       category: 'music',
//       description: 'A grand musical extravaganza featuring student performances',
//       schedule: 'Every Friday, 3:00 PM - 5:00 PM',
//       venue: 'School Auditorium',
//       instructor: 'Mr. Sharma (Professional Musician)',
//       capacity: '50 students',
//       likes: 0
//     },
//     {
//       id: '2',
//       title: 'Basketball Academy',
//       category: 'sports',
//       description: 'Professional coaching for budding basketball players',
//       schedule: 'Mon, Wed, Fri - 4:00 PM - 6:00 PM',
//       venue: 'School Basketball Court',
//       instructor: 'Coach Singh (State Level Player)',
//       capacity: '30 students',
//       likes: 0
//     },
//     {
//       id: '3',
//       title: 'Art & Painting Workshop',
//       category: 'arts',
//       description: 'Creative sessions exploring various painting techniques',
//       schedule: 'Every Saturday, 10:00 AM - 1:00 PM',
//       venue: 'Art Room',
//       instructor: 'Ms. Gupta (Professional Artist)',
//       capacity: '25 students',
//       likes: 0
//     },
//   ]

//   const featuredActivities = filteredActivities.length > 0 
//     ? filteredActivities.slice(0, 3) 
//     : sampleFeaturedActivities

//   // Loading state
//   if (activitiesLoading || clubsLoading) {
//     return (
//       <div className="min-h-screen bg-background">
//         <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
//           <div className="container mx-auto px-4 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="animate-pulse">
//                 <div className="h-6 w-32 bg-muted rounded mx-auto mb-6"></div>
//                 <div className="h-12 w-3/4 bg-muted rounded mx-auto mb-6"></div>
//                 <div className="h-4 w-2/3 bg-muted rounded mx-auto mb-8"></div>
//                 <div className="h-1 w-24 bg-muted mx-auto"></div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }

//   // Error state
//   if (activitiesError || clubsError) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-red-500 mb-4">Error loading activities</div>
//           <button 
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
//         />

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
//               Beyond Academics
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Co-curricular <span className="text-chart-1">Activities</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Nurturing talents, building character, and creating well-rounded individuals
//             </p>
//             <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Categories Filter */}
//       <section className="py-8 border-b border-border">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                     activeCategory === category.id
//                       ? 'bg-chart-1 text-chart-1-foreground'
//                       : 'bg-card text-foreground border border-border hover:bg-muted'
//                   }`}
//                 >
//                   {category.label}
//                   <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-chart-1-foreground/20">
//                     {category.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Activities */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
//                 <Target className="w-8 h-8 text-chart-1" />
//                 Featured Activities
//               </h2>

//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {featuredActivities.map((activity, index) => {
//                   const IconComponent = categoryIcons[activity.category] || Music
//                   const colorClass = categoryColors[activity.category] || 'bg-purple-500/10 text-purple-500'
                  
//                   return (
//                     <motion.div
//                       key={activity.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
//                     >
//                       <div className="p-6">
//                         <div className="flex items-start justify-between mb-4">
//                           <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center`}>
//                             <IconComponent className="w-6 h-6" />
//                           </div>
//                           <button
//                             onClick={() => toggleLike(activity.id)}
//                             className={`p-2 rounded-full ${likedActivities.has(activity.id) ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
//                           >
//                             <Heart className={`w-5 h-5 ${likedActivities.has(activity.id) ? 'fill-current' : ''}`} />
//                           </button>
//                         </div>

//                         <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
//                         <p className="text-muted-foreground mb-6">{activity.description}</p>

//                         <div className="space-y-3 mb-6">
//                           <div className="flex items-center gap-2">
//                             <Clock className="w-4 h-4 text-muted-foreground" />
//                             <span className="text-sm">{activity.schedule}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-muted-foreground" />
//                             <span className="text-sm">{activity.venue}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Users2 className="w-4 h-4 text-muted-foreground" />
//                             <span className="text-sm">Instructor: {activity.instructor}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Users className="w-4 h-4 text-muted-foreground" />
//                             <span className="text-sm">Capacity: {activity.capacity}</span>
//                           </div>
//                         </div>

//                         <button className="w-full px-4 py-2 bg-chart-1 text-chart-1-foreground rounded-lg hover:bg-chart-1/90 transition-colors flex items-center justify-center gap-2">
//                           Register Now <ChevronRight className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </motion.div>

//             {/* Clubs & Societies */}
//             {clubs && clubs.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="mb-12"
//               >
//                 <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Clubs & Societies</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {clubs.slice(0, 4).map((club, index) => {
//                     const IconComponent = categoryIcons[club.category || 'clubs'] || Users
//                     const colorClass = categoryColors[club.category || 'clubs'] || 'bg-blue-500/10'
                    
//                     return (
//                       <div
//                         key={club.id}
//                         className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
//                       >
//                         <div className="flex items-start gap-4 mb-4">
//                           <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
//                             <IconComponent className="w-6 h-6 text-chart-1" />
//                           </div>
//                           <div>
//                             <h3 className="text-xl font-bold text-foreground mb-1">{club.name}</h3>
//                             <div className="flex items-center gap-4">
//                               <span className="text-sm text-muted-foreground">{club.members || 0} Members</span>
//                               <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
//                                 {club.category || 'Club'}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <p className="text-muted-foreground mb-4">{club.description}</p>

//                         {club.achievements && club.achievements.length > 0 && (
//                           <div className="mb-4">
//                             <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
//                             <ul className="space-y-1">
//                               {club.achievements.map((achievement, idx) => (
//                                 <li key={idx} className="text-sm text-muted-foreground">• {achievement}</li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}

//                         <button className="w-full px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
//                           Join Club
//                         </button>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
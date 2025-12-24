// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { Search, Filter, X, ZoomIn, Calendar, Users, MapPin, Heart, Share2, Download, ChevronLeft, ChevronRight, Play } from "lucide-react"
// import Image from "next/image"

// export default function GalleryPage() {
//   const [activeCategory, setActiveCategory] = useState("all")
//   const [selectedImage, setSelectedImage] = useState<number | null>(null)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

//   const categories = [
//     { id: "all", label: "All Photos", count: 48 },
//     { id: "events", label: "School Events", count: 18 },
//     { id: "sports", label: "Sports Day", count: 12 },
//     { id: "cultural", label: "Cultural Fest", count: 10 },
//     { id: "academics", label: "Academic", count: 8 },
//   ]

//   const galleryImages = [
//     {
//       id: 1,
//       title: "Annual Sports Day 2024",
//       category: "sports",
//       date: "Feb 15, 2024",
//       description: "Students showcasing their athletic talents during the annual sports day",
//       likes: 124,
//       comments: 23,
//       imageUrl: "data:image/jpeg;base64,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",
//       featured: true,
//       tags: ["Sports", "Achievement", "Team Spirit"]
//     },
//     {
//       id: 2,
//       title: "Science Exhibition",
//       category: "academics",
//       date: "Jan 28, 2024",
//       description: "Innovative projects by our young scientists",
//       likes: 89,
//       comments: 17,
//       imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
//       featured: true,
//       tags: ["Science", "Innovation", "Projects"]
//     },
//     {
//       id: 3,
//       title: "Cultural Fest Performance",
//       category: "cultural",
//       date: "Dec 20, 2023",
//       description: "Traditional dance performance by Grade 10 students",
//       likes: 156,
//       comments: 34,
//       imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
//       featured: true,
//       tags: ["Dance", "Culture", "Performance"]
//     },
//     {
//       id: 4,
//       title: "Teachers Day Celebration",
//       category: "events",
//       date: "Sep 5, 2023",
//       description: "Students honoring their teachers with special performances",
//       likes: 203,
//       comments: 45,
//       imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Teachers", "Celebration", "Respect"]
//     },
//     {
//       id: 5,
//       title: "Art & Craft Exhibition",
//       category: "events",
//       date: "Nov 12, 2023",
//       description: "Creative artworks by our talented students",
//       likes: 97,
//       comments: 21,
//       imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Art", "Creativity", "Exhibition"]
//     },
//     {
//       id: 6,
//       title: "Field Trip to Science Museum",
//       category: "academics",
//       date: "Oct 8, 2023",
//       description: "Students exploring science museum exhibits",
//       likes: 78,
//       comments: 15,
//       imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Field Trip", "Learning", "Science"]
//     },
//     {
//       id: 7,
//       title: "Inter-School Debate Competition",
//       category: "events",
//       date: "Mar 22, 2024",
//       description: "Our debate team in action during inter-school competition",
//       likes: 112,
//       comments: 28,
//       imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
//       featured: true,
//       tags: ["Debate", "Competition", "Public Speaking"]
//     },
//     {
//       id: 8,
//       title: "Yoga Day Celebration",
//       category: "events",
//       date: "Jun 21, 2023",
//       description: "Students participating in International Yoga Day",
//       likes: 134,
//       comments: 31,
//       imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Yoga", "Health", "Wellness"]
//     },
//     {
//       id: 9,
//       title: "Music Concert",
//       category: "cultural",
//       date: "Feb 28, 2024",
//       description: "Annual music concert featuring student performances",
//       likes: 167,
//       comments: 39,
//       imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
//       featured: true,
//       tags: ["Music", "Concert", "Talent"]
//     },
//     {
//       id: 10,
//       title: "Graduation Ceremony",
//       category: "events",
//       date: "May 30, 2024",
//       description: "Class of 2024 graduation ceremony",
//       likes: 245,
//       comments: 56,
//       imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
//       featured: true,
//       tags: ["Graduation", "Achievement", "Celebration"]
//     },
//     {
//       id: 11,
//       title: "Robotics Workshop",
//       category: "academics",
//       date: "Apr 5, 2024",
//       description: "Students learning robotics and programming",
//       likes: 93,
//       comments: 19,
//       imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Robotics", "Technology", "Workshop"]
//     },
//     {
//       id: 12,
//       title: "Environment Day",
//       category: "events",
//       date: "Jun 5, 2023",
//       description: "Tree plantation drive by students",
//       likes: 118,
//       comments: 26,
//       imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&h=300&fit=crop",
//       featured: false,
//       tags: ["Environment", "Plantation", "Awareness"]
//     },
//   ]

//   const videos = [
//     {
//       id: 1,
//       title: "Annual Day Highlights 2024",
//       duration: "4:32",
//       views: "1.2K",
//       thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=225&fit=crop",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Sports Day Montage",
//       duration: "3:45",
//       views: "856",
//       thumbnail: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?w=400&h=225&fit=crop",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "School Tour Virtual",
//       duration: "6:18",
//       views: "2.1K",
//       thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=225&fit=crop",
//       featured: false
//     },
//   ]

//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = activeCategory === "all" || image.category === activeCategory
//     const matchesSearch = searchQuery === "" || 
//       image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//     return matchesCategory && matchesSearch
//   })

//   const toggleLike = (imageId: number) => {
//     const newLiked = new Set(likedImages)
//     if (newLiked.has(imageId)) {
//       newLiked.delete(imageId)
//     } else {
//       newLiked.add(imageId)
//     }
//     setLikedImages(newLiked)
//   }

//   const nextImage = () => {
//     if (selectedImage !== null) {
//       const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
//       const nextIndex = (currentIndex + 1) % galleryImages.length
//       setSelectedImage(galleryImages[nextIndex].id)
//     }
//   }

//   const prevImage = () => {
//     if (selectedImage !== null) {
//       const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
//       const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
//       setSelectedImage(galleryImages[prevIndex].id)
//     }
//   }

//   const Lightbox = () => {
//     if (selectedImage === null) return null

//     const image = galleryImages.find(img => img.id === selectedImage)
//     if (!image) return null

//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//         onClick={() => setSelectedImage(null)}
//       >
//         <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
//           <button
//             onClick={() => setSelectedImage(null)}
//             className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="flex flex-col lg:flex-row h-full gap-6">
//             {/* Image */}
//             <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-900">
//               <div className="relative w-full h-[60vh]">
//                 {image?.imageUrl ? (
//                   <Image
//                     src={image.imageUrl}
//                     alt={image.title}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 animate-pulse flex items-center justify-center">
//                     <div className="text-white text-center">
//                       <p className="text-lg">Image: {image.title}</p>
//                       <p className="text-sm text-gray-300 mt-2">No image available</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                 <button
//                   onClick={prevImage}
//                   className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="lg:w-96 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-white">
//               <h3 className="text-2xl font-bold mb-4">{image.title}</h3>
              
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-4 h-4" />
//                   <span className="text-gray-300">{image.date}</span>
//                 </div>
//                 <p className="text-gray-300">{image.description}</p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {image.tags.map((tag, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-chart-1/20 text-chart-1 rounded-full text-sm">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex items-center justify-between border-t border-gray-700 pt-4">
//                 <div className="flex items-center gap-6">
//                   <button
//                     onClick={() => toggleLike(image.id)}
//                     className={`flex items-center gap-2 ${likedImages.has(image.id) ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
//                   >
//                     <Heart className={`w-5 h-5 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
//                     <span>{image.likes + (likedImages.has(image.id) ? 1 : 0)}</span>
//                   </button>
//                   <button className="flex items-center gap-2 text-gray-300 hover:text-white">
//                     <Share2 className="w-5 h-5" />
//                     <span>Share</span>
//                   </button>
//                   <button className="flex items-center gap-2 text-gray-300 hover:text-white">
//                     <Download className="w-5 h-5" />
//                     <span>Download</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
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
//             <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
//               Visual Journey
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               School <span className="text-secondary">Gallery</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Explore moments of learning, achievement, and celebration at Florescent Public School
//             </p>
//             <div className="w-24 h-1 bg-secondary mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search & Filter Section */}
//       <section className="py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             {/* Search Bar */}
//             {/* <div className="mb-8">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search photos by title, description, or tags..."
//                   className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
//                 />
//                 <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               </div>
//             </div> */}

//             {/* Category Filters */}
//             <div className="mb-8">
//               <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveCategory(category.id)}
//                     className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
//                       activeCategory === category.id
//                         ? 'bg-secondary text-secondary-foreground shadow'
//                         : 'bg-card text-foreground border border-border hover:bg-muted'
//                     }`}
//                   >
//                     {category.label}
//                     <span className={`text-xs px-2 py-1 rounded-full ${
//                       activeCategory === category.id
//                         ? 'bg-secondary-foreground/20'
//                         : 'bg-muted'
//                     }`}>
//                       {category.count}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Results Count */}
//             <div className="mb-8">
//               <p className="text-muted-foreground">
//                 Showing <span className="font-bold text-foreground">{filteredImages.length}</span> of {galleryImages.length} photos
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Photo Gallery Grid */}
//       <section className="py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           {filteredImages.length === 0 ? (
//             <div className="text-center py-16">
//               <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
//               <h3 className="text-xl font-bold text-foreground mb-2">No photos found</h3>
//               <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredImages.map((image, index) => (
//                 <motion.div
//                   key={image.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${
//                     image.featured ? 'sm:col-span-2 lg:col-span-2' : ''
//                   }`}
//                 >
//                   {/* Image Container */}
//                   <div className="relative aspect-[4/3] overflow-hidden">
//                     {image.imageUrl ? (
//                       <Image
//                         src={image.imageUrl}
//                         alt={image.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20" />
//                     )}
                    
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Quick Actions */}
//                     <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button
//                         onClick={() => toggleLike(image.id)}
//                         className={`p-2 rounded-full backdrop-blur-sm ${
//                           likedImages.has(image.id) 
//                             ? 'bg-red-500/20 text-red-500' 
//                             : 'bg-black/50 text-white hover:bg-black/70'
//                         }`}
//                       >
//                         <Heart className={`w-5 h-5 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
//                       </button>
//                       <button
//                         onClick={() => setSelectedImage(image.id)}
//                         className="p-2 rounded-full backdrop-blur-sm bg-black/50 text-white hover:bg-black/70"
//                       >
//                         <ZoomIn className="w-5 h-5" />
//                       </button>
//                     </div>

//                     {/* Featured Badge */}
//                     {image.featured && (
//                       <div className="absolute top-4 left-4">
//                         <span className="px-3 py-1 bg-accent text-chart-1-foreground text-xs font-bold rounded-full">
//                           Featured
//                         </span>
//                       </div>
//                     )}

//                     {/* Category Badge */}
//                     <div className="absolute bottom-4 left-4">
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         image.category === 'sports' ? 'bg-blue-500/20 text-blue-400' :
//                         image.category === 'cultural' ? 'bg-purple-500/20 text-purple-400' :
//                         image.category === 'academics' ? 'bg-green-500/20 text-green-400' :
//                         'bg-orange-500/20 text-orange-400'
//                       }`}>
//                         {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <h3 className="font-bold text-foreground mb-2 line-clamp-1">{image.title}</h3>
//                     <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{image.description}</p>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{image.date}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Heart className="w-4 h-4" />
//                           <span>{image.likes + (likedImages.has(image.id) ? 1 : 0)}</span>
//                         </div>
//                       </div>
//                       {/* <button
//                         onClick={() => setSelectedImage(image.id)}
//                         className="text-sm font-medium text-chart-1 hover:text-chart-1/80 transition-colors"
//                       >
//                         View Details →
//                       </button> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Video Gallery Section */}
      

//       {/* Gallery Stats */}
//       {/* <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
//                 Gallery <span className="text-chart-1">Statistics</span>
//               </h3>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {[
//                   { label: "Total Photos", value: "1,200+", color: "text-blue-500" },
//                   { label: "Events Covered", value: "85+", color: "text-purple-500" },
//                   { label: "Video Hours", value: "120+", color: "text-green-500" },
//                   { label: "Monthly Uploads", value: "50+", color: "text-orange-500" },
//                 ].map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="text-center"
//                   >
//                     <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* Upload/Contribute Section */}
//       {/* <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <div className="bg-background rounded-2xl p-8 md:p-12 border">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
//                 Share Your Moments
//               </h2>
//               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//                 Parents and students can contribute photos from school events and activities
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="px-8 py-3 bg-secondary text-chart-1-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300">
//                   Upload Photos
//                 </button>
//                 <button className="px-8 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
//                   View Submission Guidelines
//                 </button>
//               </div>
              
//               <div className="mt-8 text-sm text-muted-foreground">
//                 <p>All submissions are reviewed before publishing</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* Lightbox */}
//       <Lightbox />
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Search, Filter, X, ZoomIn, Calendar, Users, MapPin, Heart, Share2, Download, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { payload } from "@/app/(frontend)/lib/payload-client"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())
  const [loading, setLoading] = useState(true)
  
  // Dynamic data states
  const [categories, setCategories] = useState<Array<{
    id: string;
    label: string;
    count: number;
  }>>([])
  
  const [galleryImages, setGalleryImages] = useState<Array<{
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    likes: number;
    comments: number;
    imageUrl: string;
    featured: boolean;
    tags: string[];
  }>>([])
  
  const [videos, setVideos] = useState<Array<{
    id: string;
    title: string;
    duration: string;
    views: string;
    thumbnail: string;
    featured: boolean;
  }>>([])
  
  const [galleryStats, setGalleryStats] = useState({
    totalPhotos: 0,
    eventsCovered: 0,
    videoHours: '0',
    monthlyUploads: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catData, imagesData, videosData, statsData] = await Promise.all([
          payload.getGalleryCategories(),
          payload.getGalleryImages(),
          payload.getGalleryVideos(),
          payload.getGalleryStats()
        ])

        setCategories(catData)
        
        // Transform images data
        const transformedImages = imagesData.map((img: any) => ({
          id: img.id,
          title: img.title,
          category: img.category,
          date: new Date(img.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          description: img.description,
          likes: img.likes || 0,
          comments: img.comments || 0,
          imageUrl: img.externalUrl || (img.url || ''),
          featured: img.featured || false,
          tags: img.tags?.map((t: any) => t.tag) || []
        }))
        setGalleryImages(transformedImages)
        
        // Transform videos data
        const transformedVideos = videosData.map((video: any) => ({
          id: video.id,
          title: video.title,
          duration: video.duration || '0:00',
          views: `${Math.round((video.views || 0) / 100) / 10}K`,
          thumbnail: video.externalUrl || (video.url || ''),
          featured: video.featured || false
        }))
        setVideos(transformedVideos)
        
        setGalleryStats(statsData)
      } catch (error) {
        console.error("Error fetching gallery data:", error)
        
        // Fallback to default data
        setCategories([
          { id: "all", label: "All Photos", count: 48 },
          { id: "events", label: "School Events", count: 18 },
          { id: "sports", label: "Sports Day", count: 12 },
          { id: "cultural", label: "Cultural Fest", count: 10 },
          { id: "academics", label: "Academic", count: 8 },
        ])
        
        setGalleryImages([
          {
            id: "1",
            title: "Annual Sports Day 2024",
            category: "sports",
            date: "Feb 15, 2024",
            description: "Students showcasing their athletic talents during the annual sports day",
            likes: 124,
            comments: 23,
            imageUrl: "data:image/jpeg;base64,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",
      featured: true,
      tags: ["Sports", "Achievement", "Team Spirit"]
    },
    // ... more default images if needed
    ])
        
        setVideos([
          {
            id: "1",
            title: "Annual Day Highlights 2024",
            duration: "4:32",
            views: "1.2K",
            thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=225&fit=crop",
            featured: true
          },
          {
            id: "2",
            title: "Sports Day Montage",
            duration: "3:45",
            views: "856",
            thumbnail: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?w=400&h=225&fit=crop",
            featured: true
          },
          {
            id: "3",
            title: "School Tour Virtual",
            duration: "6:18",
            views: "2.1K",
            thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=225&fit=crop",
            featured: false
          },
        ])
        
        setGalleryStats({
          totalPhotos: transformedImages.length,
          eventsCovered: 85,
          videoHours: '120',
          monthlyUploads: 50
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === "all" || image.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleLike = async (imageId: string) => {
    const newLiked = new Set(likedImages)
    const isLiked = newLiked.has(Number(imageId))
    
    if (isLiked) {
      newLiked.delete(Number(imageId))
    } else {
      newLiked.add(Number(imageId))
    }
    setLikedImages(newLiked)
    
    // Update likes in backend
    await payload.updateLikes(imageId, !isLiked)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => Number(img.id) === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(Number(galleryImages[nextIndex].id))
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => Number(img.id) === selectedImage)
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
      setSelectedImage(Number(galleryImages[prevIndex].id))
    }
  }

  const Lightbox = () => {
    if (selectedImage === null) return null

    const image = galleryImages.find(img => Number(img.id) === selectedImage)
    if (!image) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col lg:flex-row h-full gap-6">
            {/* Image */}
            <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-900">
              <div className="relative w-full h-[60vh]">
                {image?.imageUrl ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 animate-pulse flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-lg">Image: {image.title}</p>
                      <p className="text-sm text-gray-300 mt-2">No image available</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={prevImage}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-96 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">{image.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-gray-300">{image.date}</span>
                </div>
                <p className="text-gray-300">{image.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-chart-1/20 text-chart-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => toggleLike(image.id)}
                    className={`flex items-center gap-2 ${likedImages.has(Number(image.id)) ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Heart className={`w-5 h-5 ${likedImages.has(Number(image.id)) ? 'fill-current' : ''}`} />
                    <span>{image.likes + (likedImages.has(Number(image.id)) ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading gallery...</p>
        </div>
      </div>
    )
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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              School <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore moments of learning, achievement, and celebration at Florescent Public School
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search photos by title, description, or tags..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-secondary text-secondary-foreground shadow'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {category.label}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-secondary-foreground/20'
                        : 'bg-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredImages.length}</span> of {galleryImages.length} photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">No photos found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${
                    image.featured ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {image.imageUrl ? (
                      <Image
                        src={image.imageUrl}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20" />
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => toggleLike(image.id)}
                        className={`p-2 rounded-full backdrop-blur-sm ${
                          likedImages.has(Number(image.id)) 
                            ? 'bg-red-500/20 text-red-500' 
                            : 'bg-black/50 text-white hover:bg-black/70'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedImages.has(Number(image.id)) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => setSelectedImage(Number(image.id))}
                        className="p-2 rounded-full backdrop-blur-sm bg-black/50 text-white hover:bg-black/70"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Featured Badge */}
                    {image.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-chart-1-foreground text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        image.category === 'sports' ? 'bg-blue-500/20 text-blue-400' :
                        image.category === 'cultural' ? 'bg-purple-500/20 text-purple-400' :
                        image.category === 'academics' ? 'bg-green-500/20 text-green-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-1">{image.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{image.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{image.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{image.likes + (likedImages.has(Number(image.id)) ? 1 : 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Play className="w-8 h-8 text-chart-1" />
                Video <span className="text-chart-1">Gallery</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch highlights from school events, performances, and special moments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-current" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    
                    {/* Featured Badge */}
                    {video.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-chart-1-foreground text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.views} views</span>
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        Watch Now
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Gallery <span className="text-chart-1">Statistics</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Photos", value: `${galleryStats.totalPhotos}+`, color: "text-blue-500" },
                  { label: "Events Covered", value: `${galleryStats.eventsCovered}+`, color: "text-purple-500" },
                  { label: "Video Hours", value: `${galleryStats.videoHours}+`, color: "text-green-500" },
                  { label: "Monthly Uploads", value: `${galleryStats.monthlyUploads}+`, color: "text-orange-500" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload/Contribute Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 md:p-12 border">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Share Your Moments
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Parents and students can contribute photos from school events and activities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-secondary text-chart-1-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300">
                  Upload Photos
                </button>
                <button className="px-8 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                  View Submission Guidelines
                </button>
              </div>
              
              <div className="mt-8 text-sm text-muted-foreground">
                <p>All submissions are reviewed before publishing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox />
    </div>
  )
}
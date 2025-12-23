// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { 
//   BarChart3, TrendingUp, TrendingDown, Target,
//   Filter, Search, Download, Printer,
//   Calendar, Users, Award, Star,
//   ChevronDown, ChevronUp, BookOpen,
//   GraduationCap, CheckCircle, Eye,
//   Share2, FilterX, BarChart
// } from "lucide-react"

// export default function ResultsPage() {
//   const [activeYear, setActiveYear] = useState("2024")
//   const [activeClass, setActiveClass] = useState("all")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [expandedSection, setExpandedSection] = useState<string | null>("summary")
//   const [selectedStream, setSelectedStream] = useState("all")

//   const years = ["2024", "2023", "2022", "2021", "2020"]
  
//   const classes = [
//     { id: "all", label: "All Classes", count: 12 },
//     { id: "10", label: "Grade 10", count: 156 },
//     { id: "12", label: "Grade 12", count: 142 },
//     { id: "9", label: "Grade 9", count: 160 },
//     { id: "11", label: "Grade 11", count: 148 },
//     { id: "primary", label: "Primary (1-5)", count: 320 },
//   ]

//   const streams = [
//     { id: "all", label: "All Streams", count: 456 },
//     { id: "science", label: "Science", count: 158 },
//     { id: "commerce", label: "Commerce", count: 142 },
//     { id: "arts", label: "Arts", count: 156 },
//   ]

//   // Year-wise performance summary
//   const yearPerformance = [
//     {
//       year: "2024",
//       overallPass: "100%",
//       distinction: "78%",
//       average: "92.4%",
//       toppers: "24",
//       trend: "up"
//     },
//     {
//       year: "2023",
//       overallPass: "99.8%",
//       distinction: "75%",
//       average: "91.8%",
//       toppers: "22",
//       trend: "up"
//     },
//     {
//       year: "2022",
//       overallPass: "99.5%",
//       distinction: "72%",
//       average: "90.5%",
//       toppers: "20",
//       trend: "up"
//     },
//     {
//       year: "2021",
//       overallPass: "99.2%",
//       distinction: "70%",
//       average: "89.8%",
//       toppers: "18",
//       trend: "up"
//     },
//     {
//       year: "2020",
//       overallPass: "98.8%",
//       distinction: "68%",
//       average: "88.6%",
//       toppers: "16",
//       trend: "up"
//     },
//   ]

//   // Board Exam Results
//   const boardResults = [
//     {
//       year: "2024",
//       class: "10",
//       totalStudents: 156,
//       passed: 156,
//       passPercentage: "100%",
//       distinction: "78%",
//       topper: "Priya Sharma - 99.8%",
//       avgPercentage: "92.4%"
//     },
//     {
//       year: "2024",
//       class: "12",
//       totalStudents: 142,
//       passed: 142,
//       passPercentage: "100%",
//       distinction: "82%",
//       topper: "Rahul Verma - 98.6%",
//       avgPercentage: "91.8%"
//     },
//     {
//       year: "2023",
//       class: "10",
//       totalStudents: 152,
//       passed: 152,
//       passPercentage: "100%",
//       distinction: "75%",
//       topper: "Amit Kumar - 99.2%",
//       avgPercentage: "91.2%"
//     },
//     {
//       year: "2023",
//       class: "12",
//       totalStudents: 138,
//       passed: 137,
//       passPercentage: "99.3%",
//       distinction: "78%",
//       topper: "Neha Gupta - 97.8%",
//       avgPercentage: "90.5%"
//     },
//     {
//       year: "2022",
//       class: "10",
//       totalStudents: 148,
//       passed: 148,
//       passPercentage: "100%",
//       distinction: "72%",
//       topper: "Vikram Singh - 98.5%",
//       avgPercentage: "90.1%"
//     },
//     {
//       year: "2022",
//       class: "12",
//       totalStudents: 135,
//       passed: 134,
//       passPercentage: "99.3%",
//       distinction: "74%",
//       topper: "Ananya Reddy - 97.2%",
//       avgPercentage: "89.8%"
//     },
//   ]

//   // Subject-wise Performance
//   const subjectPerformance = [
//     {
//       subject: "Mathematics",
//       avgScore: "94.2%",
//       distinction: "85%",
//       topScore: "100%",
//       improvement: "+2.4%"
//     },
//     {
//       subject: "Science",
//       avgScore: "92.8%",
//       distinction: "82%",
//       topScore: "100%",
//       improvement: "+1.8%"
//     },
//     {
//       subject: "English",
//       avgScore: "91.5%",
//       distinction: "78%",
//       topScore: "99%",
//       improvement: "+1.2%"
//     },
//     {
//       subject: "Social Science",
//       avgScore: "90.2%",
//       distinction: "75%",
//       topScore: "98%",
//       improvement: "+0.8%"
//     },
//     {
//       subject: "Computer Science",
//       avgScore: "95.1%",
//       distinction: "88%",
//       topScore: "100%",
//       improvement: "+3.2%"
//     },
//   ]

//   // Top Performers
//   const topPerformers = [
//     {
//       rank: 1,
//       name: "Priya Sharma",
//       class: "10",
//       percentage: "99.8%",
//       stream: "All Subjects",
//       achievement: "School Topper",
//       marks: "499/500"
//     },
//     {
//       rank: 2,
//       name: "Rahul Verma",
//       class: "12",
//       percentage: "98.6%",
//       stream: "Science (PCM)",
//       achievement: "Science Topper",
//       marks: "493/500"
//     },
//     {
//       rank: 3,
//       name: "Amit Kumar",
//       class: "12",
//       percentage: "98.2%",
//       stream: "Commerce",
//       achievement: "Commerce Topper",
//       marks: "491/500"
//     },
//     {
//       rank: 4,
//       name: "Neha Gupta",
//       class: "12",
//       percentage: "97.8%",
//       stream: "Arts",
//       achievement: "Arts Topper",
//       marks: "489/500"
//     },
//     {
//       rank: 5,
//       name: "Vikram Singh",
//       class: "10",
//       percentage: "97.5%",
//       stream: "All Subjects",
//       achievement: "Perfect Math Score",
//       marks: "488/500"
//     },
//   ]

//   // Stream-wise Analysis
//   const streamAnalysis = [
//     {
//       stream: "Science",
//       totalStudents: 158,
//       avgPercentage: "91.8%",
//       distinction: "82%",
//       topScore: "98.6%",
//       collegeAdmissions: "95%"
//     },
//     {
//       stream: "Commerce",
//       totalStudents: 142,
//       avgPercentage: "90.2%",
//       distinction: "78%",
//       topScore: "98.2%",
//       collegeAdmissions: "92%"
//     },
//     {
//       stream: "Arts",
//       totalStudents: 156,
//       avgPercentage: "89.5%",
//       distinction: "75%",
//       topScore: "97.8%",
//       collegeAdmissions: "88%"
//     },
//   ]

//   // Comparative Analysis
//   const comparativeAnalysis = [
//     { year: "2020", schoolAvg: "88.6%", nationalAvg: "85.2%" },
//     { year: "2021", schoolAvg: "89.8%", nationalAvg: "86.1%" },
//     { year: "2022", schoolAvg: "90.5%", nationalAvg: "86.8%" },
//     { year: "2023", schoolAvg: "91.8%", nationalAvg: "87.5%" },
//     { year: "2024", schoolAvg: "92.4%", nationalAvg: "88.2%" },
//   ]

//   // Result Trends
//   const resultTrends = [
//     { parameter: "Overall Pass Percentage", trend: "Consistent 100%" },
//     { parameter: "Distinction Rate", trend: "Steady increase from 68% to 78%" },
//     { parameter: "Average Percentage", trend: "Growth from 88.6% to 92.4%" },
//     { parameter: "100% Scorers", trend: "Increased from 8 to 24 students" },
//     { parameter: "College Admissions", trend: "95% admission rate in top colleges" },
//   ]

//   const toggleSection = (section: string) => {
//     setExpandedSection(expandedSection === section ? null : section)
//   }

//   const handleDownloadResult = (year: string, className: string) => {
//     alert(`Downloading results for ${year} - Class ${className}`)
//   }

//   const handleViewDetails = (studentName: string) => {
//     alert(`Viewing detailed result for ${studentName}`)
//   }

//   const filteredBoardResults = boardResults.filter(result => {
//     const matchesYear = activeYear === "all" || result.year === activeYear
//     const matchesClass = activeClass === "all" || result.class === activeClass
//     return matchesYear && matchesClass
//   })

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
//               Academic Performance
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Previous Year <span className="text-chart-1">Results</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Comprehensive analysis of academic performance, trends, and achievements
//             </p>
//             <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filters Section */}
//       <section className="py-8 border-b border-border">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//               <div className="flex-1">
//                 <div className="relative">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search results by year, class, or student..."
//                     className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
//                   <Printer className="w-4 h-4" />
//                   Print
//                 </button>
//                 <button className="px-4 py-2 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors flex items-center gap-2">
//                   <Download className="w-4 h-4" />
//                   Export Data
//                 </button>
//               </div>
//             </div>

//             {/* Year Filter */}
//             <div className="mb-4">
//               <h3 className="text-sm font-medium text-foreground mb-2">Select Year</h3>
//               <div className="flex flex-wrap gap-2">
//                 {years.map((year) => (
//                   <button
//                     key={year}
//                     onClick={() => setActiveYear(year)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                       activeYear === year
//                         ? 'bg-chart-1 text-chart-1-foreground'
//                         : 'bg-card text-foreground border border-border hover:bg-muted'
//                     }`}
//                   >
//                     {year}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Class & Stream Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-sm font-medium text-foreground mb-2">Select Class</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {classes.map((cls) => (
//                     <button
//                       key={cls.id}
//                       onClick={() => setActiveClass(cls.id)}
//                       className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
//                         activeClass === cls.id
//                           ? 'bg-chart-1 text-chart-1-foreground'
//                           : 'bg-card text-foreground border border-border hover:bg-muted'
//                       }`}
//                     >
//                       {cls.label}
//                       <span className="text-xs px-1.5 py-0.5 rounded bg-chart-1-foreground/20">
//                         {cls.count}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-sm font-medium text-foreground mb-2">Select Stream</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {streams.map((stream) => (
//                     <button
//                       key={stream.id}
//                       onClick={() => setSelectedStream(stream.id)}
//                       className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
//                         selectedStream === stream.id
//                           ? 'bg-chart-1 text-chart-1-foreground'
//                           : 'bg-card text-foreground border border-border hover:bg-muted'
//                       }`}
//                     >
//                       {stream.label}
//                       <span className="text-xs px-1.5 py-0.5 rounded bg-chart-1-foreground/20">
//                         {stream.count}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
            
//             {/* Performance Summary */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("summary")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <BarChart3 className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Performance Summary - {activeYear}
//                         </h2>
//                         <p className="text-muted-foreground">Year-wise performance overview</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "summary" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "summary" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//                         {yearPerformance
//                           .filter(item => item.year === activeYear)
//                           .map((item, index) => (
//                             <div key={index} className="space-y-4">
//                               {[
//                                 { label: "Overall Pass", value: item.overallPass, icon: CheckCircle },
//                                 { label: "Distinction", value: item.distinction, icon: Star },
//                                 { label: "Average", value: item.average, icon: Target },
//                                 { label: "Toppers", value: item.toppers, icon: Award },
//                                 { label: "Trend", value: item.trend === "up" ? "↗ Improving" : "↘ Declining", icon: item.trend === "up" ? TrendingUp : TrendingDown },
//                               ].map((stat, idx) => (
//                                 <div key={idx} className="bg-background rounded-xl p-4 text-center">
//                                   <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
//                                     <stat.icon className="w-4 h-4 text-chart-1" />
//                                   </div>
//                                   <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
//                                   <div className="text-xs text-muted-foreground">{stat.label}</div>
//                                 </div>
//                               ))}
//                             </div>
//                           ))}
//                       </div>

//                       <div className="bg-muted rounded-xl p-4">
//                         <h3 className="font-bold text-foreground mb-3">Key Highlights</h3>
//                         <ul className="space-y-2">
//                           <li className="flex items-start gap-2">
//                             <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-muted-foreground">100% pass rate maintained for 5 consecutive years</span>
//                           </li>
//                           <li className="flex items-start gap-2">
//                             <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-muted-foreground">24 students achieved school topper status</span>
//                           </li>
//                           <li className="flex items-start gap-2">
//                             <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-muted-foreground">Average percentage improved by 3.8% over 5 years</span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Board Exam Results */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("board")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <BookOpen className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Board Exam Results
//                         </h2>
//                         <p className="text-muted-foreground">Detailed class-wise performance</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "board" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "board" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="overflow-x-auto">
//                         <table className="w-full border-collapse">
//                           <thead>
//                             <tr className="border-b border-border">
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Year</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Class</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Students</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Pass %</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Distinction</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Average %</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Topper</th>
//                               <th className="text-left py-4 px-4 font-semibold text-foreground">Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {filteredBoardResults.map((result, index) => (
//                               <tr key={index} className="border-b border-border hover:bg-muted/50">
//                                 <td className="py-4 px-4">
//                                   <div className="flex items-center gap-2">
//                                     <Calendar className="w-4 h-4 text-muted-foreground" />
//                                     <span className="font-medium">{result.year}</span>
//                                   </div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="flex items-center gap-2">
//                                     <GraduationCap className="w-4 h-4 text-muted-foreground" />
//                                     <span>Grade {result.class}</span>
//                                   </div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="flex items-center gap-2">
//                                     <Users className="w-4 h-4 text-muted-foreground" />
//                                     <span>{result.totalStudents}</span>
//                                   </div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="font-bold text-green-500">{result.passPercentage}</div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="font-medium text-foreground">{result.distinction}</div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="font-bold text-chart-1">{result.avgPercentage}</div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="text-sm text-muted-foreground">{result.topper}</div>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                   <div className="flex gap-2">
//                                     <button
//                                       onClick={() => handleDownloadResult(result.year, result.class)}
//                                       className="px-3 py-1.5 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors flex items-center gap-1"
//                                     >
//                                       <Download className="w-3 h-3" />
//                                       PDF
//                                     </button>
//                                     <button className="p-1.5 border border-border rounded-lg hover:bg-muted">
//                                       <Eye className="w-4 h-4" />
//                                     </button>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Top Performers */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("toppers")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <Award className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Top Performers - {activeYear}
//                         </h2>
//                         <p className="text-muted-foreground">Students with outstanding achievements</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "toppers" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "toppers" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="space-y-4">
//                         {topPerformers.map((student, index) => (
//                           <div
//                             key={index}
//                             className="bg-background rounded-xl p-4 border border-border hover:shadow transition-all duration-300"
//                           >
//                             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                               <div className="flex items-center gap-4">
//                                 <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                                   <div className="text-xl font-bold text-chart-1">{student.rank}</div>
//                                 </div>
//                                 <div>
//                                   <h3 className="font-bold text-foreground">{student.name}</h3>
//                                   <div className="flex flex-wrap gap-2 mt-1">
//                                     <span className="text-sm text-muted-foreground">Grade {student.class}</span>
//                                     <span className="text-sm text-muted-foreground">•</span>
//                                     <span className="text-sm text-muted-foreground">{student.stream}</span>
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="text-right">
//                                 <div className="text-2xl font-bold text-chart-1 mb-1">{student.percentage}</div>
//                                 <div className="text-sm text-muted-foreground">{student.marks}</div>
//                               </div>
//                             </div>

//                             <div className="mt-4 pt-4 border-t border-border">
//                               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                                 <div className="flex items-center gap-2">
//                                   <Star className="w-4 h-4 text-yellow-500" />
//                                   <span className="text-sm font-medium text-foreground">{student.achievement}</span>
//                                 </div>
//                                 <div className="flex gap-2">
//                                   <button
//                                     onClick={() => handleViewDetails(student.name)}
//                                     className="px-3 py-1.5 border border-border text-foreground text-sm rounded-lg hover:bg-muted transition-colors"
//                                   >
//                                     View Result
//                                   </button>
//                                   <button className="p-1.5 border border-border rounded-lg hover:bg-muted">
//                                     <Share2 className="w-4 h-4" />
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Subject-wise Analysis */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("subjects")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <Target className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Subject-wise Performance
//                         </h2>
//                         <p className="text-muted-foreground">Detailed analysis by subject</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "subjects" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "subjects" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {subjectPerformance.map((subject, index) => (
//                           <div
//                             key={index}
//                             className="bg-background rounded-xl p-4 border border-border"
//                           >
//                             <h3 className="font-bold text-foreground mb-4">{subject.subject}</h3>
                            
//                             <div className="space-y-3">
//                               <div className="flex justify-between items-center">
//                                 <span className="text-sm text-muted-foreground">Average Score</span>
//                                 <span className="font-bold text-foreground">{subject.avgScore}</span>
//                               </div>
                              
//                               <div className="flex justify-between items-center">
//                                 <span className="text-sm text-muted-foreground">Distinction %</span>
//                                 <span className="font-medium text-green-500">{subject.distinction}</span>
//                               </div>
                              
//                               <div className="flex justify-between items-center">
//                                 <span className="text-sm text-muted-foreground">Top Score</span>
//                                 <span className="font-medium text-chart-1">{subject.topScore}</span>
//                               </div>
                              
//                               <div className="flex justify-between items-center">
//                                 <span className="text-sm text-muted-foreground">Improvement</span>
//                                 <span className="font-medium text-green-500">{subject.improvement}</span>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Stream Analysis */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("streams")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <BarChart className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Stream-wise Analysis
//                         </h2>
//                         <p className="text-muted-foreground">Performance comparison across streams</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "streams" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "streams" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {streamAnalysis.map((stream, index) => (
//                           <div
//                             key={index}
//                             className="bg-background rounded-xl p-4 border border-border hover:shadow transition-all duration-300"
//                           >
//                             <div className="flex items-center gap-3 mb-4">
//                               <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
//                                 stream.stream === "Science" ? "bg-blue-500/10" :
//                                 stream.stream === "Commerce" ? "bg-green-500/10" :
//                                 "bg-purple-500/10"
//                               }`}>
//                                 <GraduationCap className={`w-5 h-5 ${
//                                   stream.stream === "Science" ? "text-blue-500" :
//                                   stream.stream === "Commerce" ? "text-green-500" :
//                                   "text-purple-500"
//                                 }`} />
//                               </div>
//                               <div>
//                                 <h3 className="font-bold text-foreground">{stream.stream}</h3>
//                                 <div className="text-sm text-muted-foreground">{stream.totalStudents} Students</div>
//                               </div>
//                             </div>

//                             <div className="space-y-3">
//                               <div className="flex justify-between">
//                                 <span className="text-sm text-muted-foreground">Avg Percentage</span>
//                                 <span className="font-bold text-foreground">{stream.avgPercentage}</span>
//                               </div>
                              
//                               <div className="flex justify-between">
//                                 <span className="text-sm text-muted-foreground">Distinction</span>
//                                 <span className="font-medium text-green-500">{stream.distinction}</span>
//                               </div>
                              
//                               <div className="flex justify-between">
//                                 <span className="text-sm text-muted-foreground">Top Score</span>
//                                 <span className="font-medium text-chart-1">{stream.topScore}</span>
//                               </div>
                              
//                               <div className="flex justify-between">
//                                 <span className="text-sm text-muted-foreground">College Admissions</span>
//                                 <span className="font-medium text-green-500">{stream.collegeAdmissions}</span>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Comparative Analysis */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="mb-8"
//             >
//               <div 
//                 className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => toggleSection("comparative")}
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
//                         <TrendingUp className="w-5 h-5 text-chart-1" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-bold text-foreground">
//                           Comparative Analysis
//                         </h2>
//                         <p className="text-muted-foreground">School vs National averages</p>
//                       </div>
//                     </div>
//                     <button className="text-muted-foreground hover:text-foreground">
//                       {expandedSection === "comparative" ? (
//                         <ChevronUp className="w-5 h-5" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {expandedSection === "comparative" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 pt-0"
//                   >
//                     <div className="pt-6 border-t border-border">
//                       <div className="bg-background rounded-xl p-6">
//                         <div className="overflow-x-auto">
//                           <table className="w-full">
//                             <thead>
//                               <tr className="border-b border-border">
//                                 <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-foreground">School Average</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-foreground">National Average</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-foreground">Difference</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-foreground">Performance</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {comparativeAnalysis.map((data, index) => {
//                                 const schoolAvg = parseFloat(data.schoolAvg)
//                                 const nationalAvg = parseFloat(data.nationalAvg)
//                                 const difference = schoolAvg - nationalAvg
//                                 const isPositive = difference >= 0
                                
//                                 return (
//                                   <tr key={index} className="border-b border-border hover:bg-muted/50">
//                                     <td className="py-3 px-4 font-medium">{data.year}</td>
//                                     <td className="py-3 px-4 font-bold text-chart-1">{data.schoolAvg}</td>
//                                     <td className="py-3 px-4 text-muted-foreground">{data.nationalAvg}</td>
//                                     <td className="py-3 px-4">
//                                       <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//                                         {isPositive ? '+' : ''}{difference.toFixed(1)}%
//                                       </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                       <div className="flex items-center gap-2">
//                                         {isPositive ? (
//                                           <TrendingUp className="w-4 h-4 text-green-500" />
//                                         ) : (
//                                           <TrendingDown className="w-4 h-4 text-red-500" />
//                                         )}
//                                         <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
//                                           {isPositive ? 'Above' : 'Below'} National Average
//                                         </span>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 )
//                               })}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Result Trends */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//             >
//               <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-8 border border-border">
//                 <h2 className="text-2xl font-bold text-foreground mb-6">Key Result Trends</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {resultTrends.map((trend, index) => (
//                     <div
//                       key={index}
//                       className="bg-background rounded-xl p-4 border border-border"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                           <TrendingUp className="w-4 h-4 text-chart-1" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-foreground mb-1">{trend.parameter}</h3>
//                           <p className="text-sm text-muted-foreground">{trend.trend}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Download Section */}
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Search, Filter, ChevronLeft, ChevronRight,
  Maximize2, Download, Share2, Calendar,
  Award, Users, Star, Target
} from "lucide-react"
import Image from "next/image"

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedClass, setSelectedClass] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 9

  // Available years
  const years = ["2024", "2023", "2022", "2021", "2020"]

  // Available classes
  const classes = [
    { id: "all", label: "All Classes", count: 45 },
    { id: "10", label: "Grade 10", count: 9 },
    { id: "12", label: "Grade 12", count: 9 },
    { id: "9", label: "Grade 9", count: 9 },
    { id: "11", label: "Grade 11", count: 9 },
    { id: "primary", label: "Primary", count: 9 },
  ]

  // Sample result images data
  const resultImages = [
    { id: 1, year: "2024", class: "10", title: "Class 10 Toppers", date: "May 15, 2024", likes: 124, type: "toppers" },
    { id: 2, year: "2024", class: "12", title: "Science Stream Results", date: "May 18, 2024", likes: 98, type: "stream" },
    { id: 3, year: "2024", class: "9", title: "Annual Exam Results", date: "Mar 20, 2024", likes: 156, type: "annual" },
    { id: 4, year: "2024", class: "11", title: "Commerce Toppers", date: "May 16, 2024", likes: 87, type: "toppers" },
    { id: 5, year: "2023", class: "10", title: "2023 Board Results", date: "May 25, 2023", likes: 203, type: "board" },
    { id: 6, year: "2023", class: "12", title: "Science Achievers", date: "May 22, 2023", likes: 165, type: "achievers" },
    { id: 7, year: "2023", class: "12", title: "Arts Stream Results", date: "May 28, 2023", likes: 92, type: "stream" },
    { id: 8, year: "2023", class: "11", title: "Pre-Board Results", date: "Jan 15, 2023", likes: 134, type: "preboard" },
    { id: 9, year: "2022", class: "10", title: "2022 Toppers", date: "May 30, 2022", likes: 187, type: "toppers" },
    { id: 10, year: "2022", class: "12", title: "Science Results", date: "May 27, 2022", likes: 145, type: "stream" },
    { id: 11, year: "2022", class: "12", title: "Commerce Results", date: "May 29, 2022", likes: 121, type: "stream" },
    { id: 12, year: "2022", class: "9", title: "Annual Results", date: "Mar 25, 2022", likes: 113, type: "annual" },
    { id: 13, year: "2021", class: "10", title: "2021 Achievers", date: "May 20, 2021", likes: 178, type: "achievers" },
    { id: 14, year: "2021", class: "12", title: "Science Toppers", date: "May 24, 2021", likes: 156, type: "toppers" },
    { id: 15, year: "2021", class: "11", title: "Unit Test Results", date: "Sep 10, 2021", likes: 89, type: "test" },
    { id: 16, year: "2020", class: "10", title: "2020 Results", date: "May 18, 2020", likes: 165, type: "board" },
    { id: 17, year: "2020", class: "12", title: "Science Stream", date: "May 22, 2020", likes: 134, type: "stream" },
    { id: 18, year: "2020", class: "12", title: "Commerce Stream", date: "May 25, 2020", likes: 118, type: "stream" },
  ]

  // Filter images based on selected year and class
  const filteredImages = resultImages.filter(image => {
    const matchesYear = selectedYear === "all" || image.year === selectedYear
    const matchesClass = selectedClass === "all" || image.class === selectedClass
    const matchesSearch = searchQuery === "" || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.type.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesYear && matchesClass && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredImages.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentImages = filteredImages.slice(startIndex, endIndex)

  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    setCurrentPage(1)
  }

  const handleClassChange = (classId: string) => {
    setSelectedClass(classId)
    setCurrentPage(1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleDownload = (imageId: number) => {
    alert(`Downloading image ${imageId}`)
  }

  const handleShare = (imageId: number) => {
    alert(`Sharing image ${imageId}`)
  }

  const openLightbox = (imageId: number) => {
    setSelectedImage(`/results/${imageId}.jpg`)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
              Results Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Academic <span className="text-chart-1">Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Browse through our collection of academic results and achievements
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder="Search results by title, year, or type..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                />
              </div>
            </div>

            {/* Year Filter */}
            {/* <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Select Year
              </h3>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedYear === year
                        ? 'bg-chart-1 text-chart-1-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Class Filter */}
            <div>
              {/* <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Select Class
              </h3>
              <div className="flex flex-wrap gap-2">
                {classes.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => handleClassChange(cls.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedClass === cls.id
                        ? 'bg-chart-1 text-chart-1-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {cls.label}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-chart-1-foreground/20">
                      {cls.count}
                    </span>
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Stats */}
          <div className="max-w-6xl mx-auto mb-8">
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{filteredImages.length}</div>
                    <div className="text-sm text-muted-foreground">Result Sheets</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{selectedYear === "all" ? "5" : "1"}</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {selectedClass === "all" ? "6" : "1"}
                    </div>
                    <div className="text-sm text-muted-foreground">Classes</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">18</div>
                    <div className="text-sm text-muted-foreground">Topper Lists</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length === 0 ? (
            <div className="max-w-6xl mx-auto text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">No Results Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedYear("all")
                  setSelectedClass("all")
                  setSearchQuery("")
                }}
                className="px-6 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentImages.map((image) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="group"
                    >
                      <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Image Container */}
                        <div 
                          className="relative aspect-[4/3] bg-gradient-to-br from-muted to-card cursor-pointer overflow-hidden"
                          onClick={() => openLightbox(image.id)}
                        >
                          {/* Placeholder Image - In real implementation, replace with actual image */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="text-5xl mb-4 opacity-50">📊</div>
                              <div className="space-y-2">
                                <div className="text-2xl font-bold text-foreground">Result Sheet</div>
                                <div className="text-sm text-muted-foreground">Grade {image.class} - {image.year}</div>
                                <div className="text-xs text-muted-foreground">Click to view full size</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Year Badge */}
                          <div className="absolute top-4 left-4 bg-chart-1 text-chart-1-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {image.year}
                          </div>
                          
                          {/* Type Badge */}
                          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground border border-border">
                            {image.type.toUpperCase()}
                          </div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <Maximize2 className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Image Info */}
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-foreground text-lg line-clamp-1">
                              {image.title}
                            </h3>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium">{image.likes}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{image.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded">
                              <span className="text-xs font-medium">Grade {image.class}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          {/* <div className="flex gap-2">
                            <button
                              onClick={() => handleDownload(image.id)}
                              className="flex-1 px-4 py-2 bg-chart-1 text-chart-1-foreground rounded-lg font-medium hover:bg-chart-1/90 transition-colors flex items-center justify-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                            <button
                              onClick={() => handleShare(image.id)}
                              className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="max-w-6xl mx-auto mt-12">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg border border-border ${
                        currentPage === 1
                          ? 'text-muted-foreground cursor-not-allowed'
                          : 'text-foreground hover:bg-muted hover:border-chart-1'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum
                        if (totalPages <= 5) {
                          pageNum = i + 1
                        } else if (currentPage <= 3) {
                          pageNum = i + 1
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i
                        } else {
                          pageNum = currentPage - 2 + i
                        }

                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-medium transition-all ${
                              currentPage === pageNum
                                ? 'bg-chart-1 text-chart-1-foreground'
                                : 'border border-border text-foreground hover:bg-muted'
                            }`}
                          >
                            {pageNum}
                          </button>
                        )
                      })}
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg border border-border ${
                        currentPage === totalPages
                          ? 'text-muted-foreground cursor-not-allowed'
                          : 'text-foreground hover:bg-muted hover:border-chart-1'
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-center mt-4 text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredImages.length)} of {filteredImages.length} results
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              Close
            </button>
            
            {/* Image Container */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                {/* In real implementation, replace with actual Image component */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
                  <div className="text-center p-8">
                    <div className="text-7xl mb-6">📊</div>
                    <div className="text-2xl font-bold text-foreground mb-2">Full Size Result Sheet</div>
                    <div className="text-muted-foreground">This would display the actual result image</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button in Lightbox */}
            {/* <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
              <button
                onClick={() => handleDownload(1)}
                className="px-6 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download High Quality Image
              </button>
            </div> */}
          </div>
        </div>
      )}

      {/* Call to Action */}
      {/* <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-chart-1/10 to-chart-2/10 rounded-2xl p-8 md:p-12 border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Official Result Certificates?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact the school administration for official transcripts and certificates
              </p>
              <button className="px-8 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors">
                Contact School Office
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
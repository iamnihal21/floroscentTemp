// // import { getPayload } from 'payload'
// // import config from '@/payload.config'

// // let cached = (global as any).payload

// // if (!cached) {
// //   cached = (global as any).payload = { client: null, promise: null }
// // }

// // export async function getPayloadClient() {
// //   if (cached.client) {
// //     return cached.client
// //   }

// //   if (!cached.promise) {
// //     cached.promise = getPayload({
// //       config,
// //     })
// //   }

// //   try {
// //     cached.client = await cached.promise
// //   } catch (e) {
// //     cached.promise = null
// //     throw e
// //   }

// //   return cached.client
// // }

// // // Type-safe helper functions
// // export const payload = {
// //   // Get a page by slug
// //   async getPage(slug: string) {
// //     const client = await getPayloadClient()
// //     const result = await client.find({
// //       collection: 'pages',
// //       where: { slug: { equals: slug } },
// //       limit: 1,
// //     })
// //     return result.docs[0] || null
// //   },

// //   // Get all pages with filters
// //   async getPages(query: any = {}) {
// //     const client = await getPayloadClient()
// //     return client.find({ collection: 'pages', ...query })
// //   },

// //   // Get global data
// //   async getGlobal(slug: 'about' | 'contact') {
// //     const client = await getPayloadClient()
// //     return client.findGlobal({ slug })
// //   },

// //   // Get media
// //   async getMedia(query: any = {}) {
// //     const client = await getPayloadClient()
// //     return client.find({ collection: 'media', ...query })
// //   },

// //   // Create submission (for contact forms, etc.)
// //   async createSubmission(collection: string, data: any) {
// //     const client = await getPayloadClient()
// //     return client.create({ collection, data })
// //   },
// // }

// import { getPayload } from 'payload'
// import config from '../../payload/payload.config'

// let cached = (global as any).payload

// if (!cached) {
//   cached = (global as any).payload = { client: null, promise: null }
// }

// export async function getPayloadClient() {
//   if (cached.client) {
//     return cached.client
//   }

//   if (!cached.promise) {
//     cached.promise = getPayload({
//       config,
//     })
//   }

//   try {
//     cached.client = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.client
// }

// // Type-safe helper functions
// export const payload = {
//   // Get about page by slug
//   async getAboutPage(slug: string) {
//     const client = await getPayloadClient()
//     const result = await client.find({
//       collection: 'about-pages',
//       where: { pageSlug: { equals: slug } },
//       limit: 1,
//     })
//     return result.docs[0] || null
//   },
//   async getAdmissionProcess() {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/admission-process?limit=1`,
//       )
//       const data = await response.json()
//       return data.docs?.[0] || null
//     } catch (error) {
//       console.error('Error fetching admission process:', error)
//       return null
//     }
//   },

//   // Get leadership by role
//   async getLeadership(role: 'director' | 'principal') {
//     const client = await getPayloadClient()
//     const result = await client.find({
//       collection: 'leadership',
//       where: {
//         role: { equals: role },
//         'metadata.isActive': { equals: true },
//       },
//       limit: 1,
//     })
//     return result.docs[0] || null
//   },

//   // Get school philosophy
//   async getSchoolPhilosophy() {
//     const client = await getPayloadClient()
//     const result = await client.find({
//       collection: 'school-philosophy',
//       limit: 1,
//     })
//     return result.docs[0] || null
//   },

//   // Get contact info
//   async getContactInfo() {
//     const client = await getPayloadClient()
//     return client.findGlobal({ slug: 'contact' })
//   },

//   // Get media
//   async getMedia(query: any = {}) {
//     const client = await getPayloadClient()
//     return client.find({ collection: 'media', ...query })
//   },

//   async getCareerOpenings(category?: string, limit?: number) {
//     try {
//       let url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/career?where[isActive][equals]=true&sort=-metadata.createdAt`

//       if (category && category !== 'all') {
//         url += `&where[category][equals]=${category}`
//       }

//       if (limit) {
//         url += `&limit=${limit}`
//       }

//       const response = await fetch(url)
//       const data = await response.json()
//       return data.docs || []
//     } catch (error) {
//       console.error('Error fetching career openings:', error)
//       return []
//     }
//   },

//   async getCareerOpening(idOrSlug: string) {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/career?where[or][0][slug][equals]=${idOrSlug}&where[or][1][id][equals]=${idOrSlug}`,
//       )
//       const data = await response.json()
//       return data.docs?.[0] || null
//     } catch (error) {
//       console.error('Error fetching career opening:', error)
//       return null
//     }
//   },

//   async getCareerCategories() {
//     try {
//       const jobs = await this.getCareerOpenings()

//       const categories = [
//         { id: 'all', label: 'All Openings', icon: 'Briefcase', count: jobs.length },
//         { id: 'teaching', label: 'Teaching', icon: 'BookOpen', count: 0 },
//         { id: 'administrative', label: 'Administrative', icon: 'Users', count: 0 },
//         { id: 'support', label: 'Support Staff', icon: 'GraduationCap', count: 0 },
//       ]

//       // Count jobs per category
//       jobs.forEach((job: any) => {
//         const category = categories.find((c) => c.id === job.category)
//         if (category) {
//           category.count += 1
//         }
//       })

//       return categories
//     } catch (error) {
//       console.error('Error fetching career categories:', error)
//       return []
//     }
//   },

//   async getHiringProcess() {
//     try {
//       // Get first job to extract hiring process
//       const jobs = await this.getCareerOpenings('all', 1)
//       if (jobs.length > 0 && jobs[0].applicationProcess?.hiringSteps) {
//         return jobs[0].applicationProcess.hiringSteps
//       }

//       // Fallback to default hiring process
//       return [
//         {
//           step: 1,
//           title: 'Application',
//           description: 'Submit online application with resume',
//           icon: '📝',
//         },
//         { step: 2, title: 'Screening', description: 'Resume review by HR team', icon: '👁️' },
//         { step: 3, title: 'Interview', description: 'Technical & HR interviews', icon: '💬' },
//         { step: 4, title: 'Demo', description: 'Teaching demonstration', icon: '🎯' },
//         { step: 5, title: 'Offer', description: 'Job offer & onboarding', icon: '🎉' },
//       ]
//     } catch (error) {
//       console.error('Error fetching hiring process:', error)
//       return []
//     }
//   },
//   async getHRContactInfo() {
//     try {
//       // Get first job to extract contact info
//       const jobs = await this.getCareerOpenings('all', 1)
//       if (jobs.length > 0 && jobs[0].applicationProcess) {
//         return {
//           email: jobs[0].applicationProcess.contactEmail || 'hr@florescent.edu.in',
//           officeHours: jobs[0].applicationProcess.officeHours || 'Mon-Fri, 9:00 AM - 5:00 PM',
//           responseTime: jobs[0].applicationProcess.responseTime || '3-5 business days',
//         }
//       }

//       // Fallback to default contact info
//       return {
//         email: 'hr@florescent.edu.in',
//         officeHours: 'Mon-Fri, 9:00 AM - 5:00 PM',
//         responseTime: '3-5 business days',
//       }
//     } catch (error) {
//       console.error('Error fetching HR contact info:', error)
//       return {
//         email: 'hr@florescent.edu.in',
//         officeHours: 'Mon-Fri, 9:00 AM - 5:00 PM',
//         responseTime: '3-5 business days',
//       }
//     }
//   },

//   async getApplicationTips() {
//     try {
//       // Get first job to extract tips
//       const jobs = await this.getCareerOpenings('all', 1)
//       if (jobs.length > 0 && jobs[0].applicationTips) {
//         return jobs[0].applicationTips
//       }

//       // Fallback to default tips
//       return {
//         dos: [
//           { tip: 'Tailor your resume to the position' },
//           { tip: 'Highlight relevant teaching experience' },
//           { tip: 'Include certifications and training' },
//           { tip: 'Write a personalized cover letter' },
//           { tip: 'Proofread all documents' },
//           { tip: 'Prepare for teaching demonstration' },
//         ],
//         donts: [
//           { tip: 'Submit generic applications' },
//           { tip: 'Forget to attach documents' },
//           { tip: 'Ignore application deadlines' },
//           { tip: 'Use unprofessional email' },
//           { tip: 'Underestimate preparation' },
//           { tip: 'Neglect follow-up communication' },
//         ],
//       }
//     } catch (error) {
//       console.error('Error fetching application tips:', error)
//       return { dos: [], donts: [] }
//     }
//   },

//   async getContactPage() {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/contact-us?limit=1`)
//       const data = await response.json()
//       return data.docs?.[0] || null
//     } catch (error) {
//       console.error('Error fetching contact page data:', error)
//       return null
//     }
//   },

//   // Submit contact form (you'll need to create an endpoint for this)
//   async submitContactForm(formData: {
//     name: string
//     email: string
//     phone: string
//     studentGrade: string
//     subject: string
//     message: string
//     contactMethod: string
//   }) {
//     // try {
//     //   // In a real implementation, this would send to your backend
//     //   // For now, we'll simulate a successful submission
//     //   console.log('Form submitted:', formData);
//     //   // You can integrate with a service like SendGrid, EmailJS, or your own API
//     //   // Example with fetch:
//     //   // const response = await fetch('/api/contact-submission', {
//     //   //   method: 'POST',
//     //   //   headers: { 'Content-Type': 'application/json' },
//     //   //   body: JSON.stringify(formData),
//     //   // });
//     //   // return await response.json();
//     //   return { success: true, message: 'Form submitted successfully' };
//     // } catch (error) {
//     //   console.error('Error submitting contact form:', error);
//     //   return { success: false, message: 'Failed to submit form' };
//     // }
//   },
//   async getGalleryImages(category?: string, limit?: number, featured?: boolean) {
//     try {
//       let url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media?where[type][equals]=image&where[published][equals]=true&sort=-date,-order`

//       if (category && category !== 'all') {
//         url += `&where[category][equals]=${category}`
//       }

//       if (featured !== undefined) {
//         url += `&where[featured][equals]=${featured}`
//       }

//       if (limit) {
//         url += `&limit=${limit}`
//       }

//       const response = await fetch(url)
//       const data = await response.json()
//       return data.docs || []
//     } catch (error) {
//       console.error('Error fetching gallery images:', error)
//       return []
//     }
//   },

//   // Get gallery videos
//   async getGalleryVideos(limit?: number, featured?: boolean) {
//     try {
//       let url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media?where[type][equals]=video&where[published][equals]=true&sort=-date,-order`

//       if (featured !== undefined) {
//         url += `&where[featured][equals]=${featured}`
//       }

//       if (limit) {
//         url += `&limit=${limit}`
//       }

//       const response = await fetch(url)
//       const data = await response.json()
//       return data.docs || []
//     } catch (error) {
//       console.error('Error fetching gallery videos:', error)
//       return []
//     }
//   },

//   // Get gallery categories with counts
//   async getGalleryCategories() {
//     try {
//       const images = await this.getGalleryImages()

//       const categories = [
//         { id: 'all', label: 'All Photos', count: images.length },
//         { id: 'events', label: 'School Events', count: 0 },
//         { id: 'sports', label: 'Sports Day', count: 0 },
//         { id: 'cultural', label: 'Cultural Fest', count: 0 },
//         { id: 'academics', label: 'Academic', count: 0 },
//       ]

//       // Count images per category
//       images.forEach((image: any) => {
//         const category = categories.find((c) => c.id === image.category)
//         if (category) {
//           category.count += 1
//         }
//       })

//       return categories
//     } catch (error) {
//       console.error('Error fetching gallery categories:', error)
//       return []
//     }
//   },

//   // Update likes (you'd need a proper API endpoint for this)
//   async updateLikes(itemId: string, increment: boolean = true) {
//     try {
//       // In a real implementation, this would call your backend API
//       // For now, we'll just log it
//       console.log(`Updating likes for item ${itemId}, increment: ${increment}`)
//       return { success: true }
//     } catch (error) {
//       console.error('Error updating likes:', error)
//       return { success: false }
//     }
//   },

//   // Get gallery stats
//   async getGalleryStats() {
//     try {
//       const [images, videos] = await Promise.all([this.getGalleryImages(), this.getGalleryVideos()])

//       return {
//         totalPhotos: images.length,
//         eventsCovered: new Set(images.map((img: any) => img.category)).size,
//         videoHours: videos
//           .reduce((acc: number, video: any) => {
//             // Parse duration like "4:32" to minutes
//             const [mins, secs] = video.duration?.split(':').map(Number) || [0, 0]
//             return acc + mins + secs / 60
//           }, 0)
//           .toFixed(1),
//         monthlyUploads: images.filter((img: any) => {
//           const imgDate = new Date(img.date)
//           const now = new Date()
//           const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1))
//           return imgDate > oneMonthAgo
//         }).length,
//       }
//     } catch (error) {
//       console.error('Error fetching gallery stats:', error)
//       return {
//         totalPhotos: 0,
//         eventsCovered: 0,
//         videoHours: '0',
//         monthlyUploads: 0,
//       }
//     }
//   },
//   async getPage(slug: string) {
//     const client = await getPayloadClient()
//     const result = await client.find({
//       collection: 'pages',
//       where: { slug: { equals: slug } },
//       limit: 1,
//     })
//     return result.docs[0] || null
//   },

//   // Get all pages with filters
//   async getPages(query: any = {}) {
//     const client = await getPayloadClient()
//     return client.find({ collection: 'pages', ...query })
//   },

//   // Get global data
//   async getGlobal(slug: 'about' | 'contact') {
//     const client = await getPayloadClient()
//     return client.findGlobal({ slug })
//   },

//   // Get media

//   // Create submission (for contact forms, etc.)
//   async createSubmission(collection: string, data: any) {
//     const client = await getPayloadClient()
//     return client.create({ collection, data })
//   },

//   async getDocument(collection: string, slug: string) {
//     const client = await getPayloadClient()
//     const result = await client.find({
//       collection,
//       where: { slug: { equals: slug } },
//       limit: 1,
//     })
//     return result.docs[0] || null
//   },

//   // Fetch all documents with filters
//   async getDocuments(collection: string, query: any = {}) {
//     const client = await getPayloadClient()
//     return client.find({ collection, ...query })
//   },

//   // Fetch global

//   // Create document
//   async createDocument(collection: string, data: any) {
//     const client = await getPayloadClient()
//     return client.create({ collection, data })
//   },

//   // Update document
//   async updateDocument(collection: string, id: string, data: any) {
//     const client = await getPayloadClient()
//     return client.update({ collection, id, data })
//   },

//   async getCoCurricularActivities(featured = false) {
//     const client = await getPayloadClient()
//     const query: any = {
//       collection: 'co-curricular',
//       where: { 'metadata.published': { equals: true } },
//       sort: 'metadata.order',
//     }

//     if (featured) {
//       query.where.featured = { equals: true }
//       query.limit = 3
//     }

//     return client.find(query)
//   },

//   // Get Clubs
//   async getClubs() {
//     const client = await getPayloadClient()
//     return client.find({
//       collection: 'clubs',
//       where: { 'metadata.active': { equals: true } },
//       sort: 'metadata.order',
//     })
//   },

//   // Get Weekly Schedule
//   async getActivitySchedule() {
//     const client = await getPayloadClient()
//     return client.find({
//       collection: 'activity-schedule',
//       sort: 'metadata.order',
//     })
//   },

//   // Academic Results
//   async getAcademicResults(filters: any = {}) {
//     const client = await getPayloadClient()
//     const query: any = {
//       collection: 'academic-results',
//       where: { 'metadata.published': { equals: true } },
//       sort: '-date',
//     }

//     if (filters.year) {
//       query.where.year = { equals: filters.year }
//     }

//     if (filters.grade) {
//       query.where.grade = { equals: filters.grade }
//     }

//     if (filters.type) {
//       query.where.type = { equals: filters.type }
//     }

//     if (filters.limit) {
//       query.limit = filters.limit
//     }

//     return client.find(query)
//   },

//   // School Achievements
//   async getSchoolAchievements(featured = false) {
//     const client = await getPayloadClient()
//     const query: any = {
//       collection: 'school-achievements',
//       where: { 'metadata.published': { equals: true } },
//       sort: '-year',
//     }

//     if (featured) {
//       query.where.featured = { equals: true }
//       query.limit = 3
//     }

//     return client.find(query)
//   },

//   // Student Achievements
//   async getStudentAchievements(filters: any = {}) {
//     const client = await getPayloadClient()
//     const query: any = {
//       collection: 'student-achievements',
//       where: { 'metadata.published': { equals: true } },
//       sort: '-year',
//     }

//     if (filters.featured) {
//       query.where.featured = { equals: true }
//       query.limit = 3
//     }

//     if (filters.category) {
//       query.where.category = { equals: filters.category }
//     }

//     return client.find(query)
//   },

//   // Achievement Statistics
//   async getAchievementStats() {
//     const client = await getPayloadClient()
//     return client.find({
//       collection: 'achievement-stats',
//       sort: 'metadata.order',
//     })
//   },
//   async getSchedules(type?: string, status?: string, limit?: number) {
//     try {
//       let url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/activity-schedule?where[published][equals]=true&sort=date,-metadata.order`

//       if (type) {
//         url += `&where[type][equals]=${type}`
//       }

//       if (status) {
//         url += `&where[status][equals]=${status}`
//       }

//       if (limit) {
//         url += `&limit=${limit}`
//       }

//       const response = await fetch(url)
//       const data = await response.json()
//       return data.docs || []
//     } catch (error) {
//       console.error('Error fetching schedules:', error)
//       return []
//     }
//   },

//   // Get upcoming events (excluding exams and PTMs)
//   async getUpcomingEvents(limit?: number) {
//     try {
//       const url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/activity-schedule?where[published][equals]=true&where[type][not_equals]=exam&where[type][not_equals]=ptm&where[status][equals]=upcoming&sort=date&limit=${limit || 10}`
//       const response = await fetch(url)
//       const data = await response.json()
//       return data.docs || []
//     } catch (error) {
//       console.error('Error fetching upcoming events:', error)
//       return []
//     }
//   },

//   // Get exams schedule
//   async getExamsSchedule() {
//     try {
//       const exams = await this.getSchedules('exam', 'upcoming', 10)
//       return exams.map((exam: any) => ({
//         term: exam.title,
//         date: exam.endDate
//           ? `${new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${new Date(exam.endDate).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}`
//           : new Date(exam.date).toLocaleDateString('en-US', {
//               month: 'short',
//               day: 'numeric',
//               year: 'numeric',
//             }),
//         classes: exam.classes,
//         status: exam.status,
//         color:
//           exam.status === 'upcoming'
//             ? 'bg-red-500/10 text-red-500'
//             : exam.status === 'ongoing'
//               ? 'bg-yellow-500/10 text-yellow-500'
//               : 'bg-green-500/10 text-green-500',
//       }))
//     } catch (error) {
//       console.error('Error fetching exams schedule:', error)
//       return []
//     }
//   },

//   // Get PTM schedule
//   async getPTMSchedule() {
//     try {
//       const ptms = await this.getSchedules('ptm', 'upcoming', 10)
//       return ptms.map((ptm: any) => ({
//         date: new Date(ptm.date).toLocaleDateString('en-US', {
//           month: 'short',
//           day: 'numeric',
//           year: 'numeric',
//         }),
//         time: ptm.time,
//         classes: ptm.classes,
//         venue: ptm.venue,
//         type: ptm.category || 'Regular PTM',
//       }))
//     } catch (error) {
//       console.error('Error fetching PTM schedule:', error)
//       return []
//     }
//   },

//   // Get PTM guidelines
//   async getPTMGuidelines() {
//     try {
//       // Get first PTM to extract guidelines
//       const ptms = await this.getSchedules('ptm', undefined, 1)
//       if (ptms.length > 0 && ptms[0].guidelines) {
//         return ptms[0].guidelines.map((g: any) => g.guideline)
//       }

//       // Fallback to default guidelines
//       return [
//         'Please arrive 10 minutes before your scheduled time',
//         "Bring your child's latest report card",
//         'Prepare questions in advance',
//         'Keep discussions focused on academic progress',
//       ]
//     } catch (error) {
//       console.error('Error fetching PTM guidelines:', error)
//       return []
//     }
//   },

//   // Get meeting duration guidelines
//   async getMeetingDurationInfo() {
//     try {
//       const ptms = await this.getSchedules('ptm', undefined, 1)
//       if (ptms.length > 0 && ptms[0].importantNotes) {
//         return ptms[0].importantNotes
//       }

//       // Fallback to default info
//       return `• Regular PTM: 10-15 minutes per parent
// • Special Meetings: 20-30 minutes as needed
// • Follow-up meetings can be scheduled if required`
//     } catch (error) {
//       console.error('Error fetching meeting duration info:', error)
//       return ''
//     }
//   },
// }


'use client'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api/payload'

interface FindOptions {
  depth?: number
  page?: number
  limit?: number
  where?: any
  sort?: string
  locale?: string
}

interface GlobalOptions {
  depth?: number
  locale?: string
}

export class PayloadClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_BASE
  }

  // ==================== CORE METHODS ====================
  
  async find<T = any>(collection: string, options: FindOptions = {}) {
    const response = await fetch(`${this.baseUrl}/${collection}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch ${collection}`)
    }

    return response.json() as Promise<{
      docs: T[]
      totalDocs: number
      limit: number
      totalPages: number
      page: number
      pagingCounter: number
      hasPrevPage: boolean
      hasNextPage: boolean
      prevPage: number | null
      nextPage: number | null
    }>
  }

  async findGlobal<T = any>(slug: string, options: GlobalOptions = {}) {
    const response = await fetch(`${this.baseUrl}/globals/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch global ${slug}`)
    }

    return response.json() as Promise<T>
  }

  // ==================== SPECIFIC COLLECTION METHODS ====================

  // About Page (Global)
  async getAboutPage() {
    return this.findGlobal('about')
  }

  // Contact Us (Global)
  async getContactInfo() {
    return this.findGlobal('contact-us')
  }

  // Site Settings (Global)
  async getSiteSettings() {
    return this.findGlobal('site-settings')
  }

  // Academic Results
  async getAcademicResults(options?: FindOptions) {
    return this.find('academic-results', options)
  }

  // Activity Schedule
  async getActivitySchedule(options?: FindOptions) {
    return this.find('activity-schedule', options)
  }

  // Admission Process
  async getAdmissionProcess(options?: FindOptions) {
    return this.find('academic-and-admission', options)
  }

  // Career Opportunities
  async getCareerOpportunities(options?: FindOptions) {
    return this.find('career', options)
  }

  // Clubs
  async getClubs(options?: FindOptions) {
    return this.find('clubs', options)
  }

  // Co-Curricular Activities
  async getCoCurricularActivities(options?: FindOptions) {
    return this.find('co-curricular', options)
  }

  // Gallery (Media)
  async getGalleryItems(options?: FindOptions) {
    return this.find('media', options)
  }

  // Important Dates
  async getImportantDates(options?: FindOptions) {
    return this.find('important-dates', options)
  }

  // Leadership
  async getLeadership(options?: FindOptions) {
    return this.find('leadership', options)
  }

  // Overall Highlights
  async getOverallHighlights(options?: FindOptions) {
    return this.find('overall-highlights', options)
  }

  // Schedule
  async getSchedules(options?: FindOptions) {
    return this.find('schedule', options)
  }

  // School Achievements
  async getSchoolAchievements(options?: FindOptions) {
    return this.find('school-achievements', options)
  }

  // School Philosophy
  async getSchoolPhilosophy(options?: FindOptions) {
    return this.find('school-philosophy', options)
  }

  // Student Achievements
  async getStudentAchievements(options?: FindOptions) {
    return this.find('student-achievements', options)
  }

  // Testimonials
  async getTestimonials(options?: FindOptions) {
    return this.find('testimonials', options)
  }

  // Why Choose Us
  async getWhyChooseUs(options?: FindOptions) {
    return this.find('why-choose-us', options)
  }

  // ==================== MEDIA METHODS ====================
  
  async getMediaById(id: string) {
    const response = await fetch(`${this.baseUrl}/media`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        where: {
          id: {
            equals: id,
          },
        },
      }),
    })
    return response.json()
  }

  async getMediaByType(type: 'image' | 'video', options?: FindOptions) {
    return this.find('media', {
      ...options,
      where: {
        ...options?.where,
        type: {
          equals: type,
        },
      },
    })
  }

  // ==================== FILTERED METHODS ====================

  async getUpcomingEvents() {
    const today = new Date().toISOString()
    return this.find('activity-schedule', {
      where: {
        date: {
          greater_than_equal: today,
        },
      },
      sort: 'date',
      limit: 5,
    })
  }

  async getFeaturedAchievements() {
    return this.find('school-achievements', {
      where: {
        featured: {
          equals: true,
        },
      },
      limit: 6,
    })
  }

  async getLatestTestimonials(limit = 3) {
    return this.find('testimonials', {
      sort: '-createdAt',
      limit,
    })
  }

  async getActiveClubs() {
    return this.find('clubs', {
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'name',
    })
  }

  async getHighlightedStudents() {
    return this.find('student-achievements', {
      where: {
        isHighlighted: {
          equals: true,
        },
      },
      limit: 4,
      sort: '-achievementDate',
    })
  }

  // ==================== PAGINATION HELPERS ====================

  async paginate<T = any>(collection: string, page = 1, limit = 10, where?: any) {
    return this.find<T>(collection, {
      page,
      limit,
      where,
    })
  }

  // ==================== SEARCH METHODS ====================

  async searchInCollection(collection: string, query: string, fields: string[]) {
    const whereClause = {
      or: fields.map((field) => ({
        [field]: {
          contains: query,
        },
      })),
    }

    return this.find(collection, {
      where: whereClause,
    })
  }

  // ==================== STATIC ASSETS HELPERS ====================

  getMediaUrl(media: any) {
    if (!media?.url) return ''
    return media.url.startsWith('http') ? media.url : `${process.env.NEXT_PUBLIC_SERVER_URL || ''}${media.url}`
  }

  // ==================== QUICK ACCESS METHODS ====================

  async getHomepageData() {
    const [highlights, achievements, testimonials] = await Promise.all([
      this.getOverallHighlights({ limit: 3 }),
      this.getFeaturedAchievements(),
      this.getLatestTestimonials(3),
    ])

    return {
      highlights: highlights.docs,
      achievements: achievements.docs,
      testimonials: testimonials.docs,
    }
  }

  async getAdmissionsData() {
    const [process, dates] = await Promise.all([
      this.getAdmissionProcess(),
      this.getImportantDates(),
    ])

    return {
      process: process.docs,
      dates: dates.docs,
    }
  }

  async getStudentLifeData() {
    const [clubs, activities, schedule] = await Promise.all([
      this.getClubs(),
      this.getCoCurricularActivities(),
      this.getUpcomingEvents(),
    ])

    return {
      clubs: clubs.docs,
      activities: activities.docs,
      upcomingEvents: schedule.docs,
    }
  }
}

// Create a singleton instance
const payloadClient = new PayloadClient()

export { payloadClient }

// ==================== HOOKS ====================

export function usePayload() {
  return payloadClient
}

// Quick export of commonly used methods
export const {
  getAboutPage,
  getContactInfo,
  getSiteSettings,
  getAcademicResults,
  getActivitySchedule,
  getAdmissionProcess,
  getCareerOpportunities,
  getClubs,
  getCoCurricularActivities,
  getGalleryItems,
  getImportantDates,
  getLeadership,
  getOverallHighlights,
  getSchedules,
  getSchoolAchievements,
  getSchoolPhilosophy,
  getStudentAchievements,
  getTestimonials,
  getWhyChooseUs,
  getUpcomingEvents,
  getFeaturedAchievements,
  getLatestTestimonials,
  getActiveClubs,
  getHighlightedStudents,
  getHomepageData,
  getAdmissionsData,
  getStudentLifeData,
} = payloadClient
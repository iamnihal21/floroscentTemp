// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './app/collections/Users'
// import { Media } from './app/collections/Media'
// import { About } from './app/globals/About'
// import { Contact } from './app/globals/Contacts'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,

//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//     components: {
//       graphics: {
//         Logo: '/app/(frontend)/Logo/Logo', // Path to your Logo component
//         // You can also add an Icon for the collapsed sidebar
//         Icon: '/app/(frontend)/Logo/Logo',
//       },
//     },
//   },
//   // This was the missing bracket in your code!
//   collections: [Users, Media],
//   globals: [About, Contact],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || '',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: postgresAdapter({
//     pool: {
//       connectionString: process.env.DATABASE_URL || '',
//     },
//   }),
//   sharp,
// })

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Import all collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { AcademicResults } from './collections/AcademicResults'
import { ActivitySchedule } from './collections/ActivitySchedule'
import { AcademicAndAdmission as AdmissionProcess } from './collections/AdmissionProcess'
import { Career as CareerCollection } from './collections/CarrerCollection'
import { Clubs } from './collections/Clubs'
import { CoCurricular } from './collections/CoCurricular'
import { GalleryCollection } from './collections/GalleryCollection'
import { ImportantDates } from './collections/ImportantDates'
import { Leadership } from './collections/Leadership'
import { OverallHighlights } from './collections/OverallHighlights'
import { ActivitySchedule as Schedule } from './collections/Schedule'
import { SchoolAchievements } from './collections/SchoolAchievements'
import { SchoolPhilosophy } from './collections/SchoolPhilosophy'
import { StudentAchievements } from './collections/StudentAchivements'
import { Testimonials } from './collections/Testinomials'
import { WhyChooseUs } from './collections/WhyChooseUs'

// Import all globals - MAKE SURE THESE ARE GLOBAL CONFIGS, NOT COLLECTIONS
import { About } from './globals/About'
import { ContactUs } from './globals/Contacts'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '@/payload/admin/Logo',
        Icon: '@/payload/admin/Logo',
      },
    },
  },
  collections: [
    // Core collections
    Users,
    Media,

    // Academic collections
    AcademicResults,
    AdmissionProcess,
    SchoolAchievements,
    StudentAchievements,
    ImportantDates,

    // Student life collections
    Clubs,
    CoCurricular,
    ActivitySchedule,
    GalleryCollection,
    Leadership,
    Testimonials,

    // School info collections
    SchoolPhilosophy,
    WhyChooseUs,
    OverallHighlights,
    CareerCollection,
    Schedule,
  ],
  globals: [About, ContactUs, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  cors: ['http://localhost:3000', process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: ['http://localhost:3000', process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
})

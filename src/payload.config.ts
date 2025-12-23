// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './app/collections/Users'
// import { Media } from './app/collections/Media'
// import { About } from './app/globals/About'
// import { Schedules } from './app/collections/Schedule'
// import { Achievements } from './app/collections/Achivements'
// import { Pages } from './app/collections/Pages'
// import { Resources } from './app/collections/Resources'
// import { Contact } from './app/globals/Contacts'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//     custom: {
//       css: path.resolve(dirname, './app/globals.css'),
//     }

//   },
//   collections: [Users, Media, Schedules, Achievements, Pages, Resources],
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
//   plugins: [],
// })

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './app/collections/Users'
import { Media } from './app/collections/Media'
import { About } from './app/globals/About'
import { Schedules } from './app/collections/Schedule'
import { Achievements } from './app/collections/Achivements'
import { Pages } from './app/collections/Pages'
import { Resources } from './app/collections/Resources'
import { Contact } from './app/globals/Contacts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,

    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/app/(frontend)/Logo/Logo', // Path to your Logo component
        // You can also add an Icon for the collapsed sidebar
        Icon: '/app/(frontend)/Logo/Logo',
      },
    },
  },
  // This was the missing bracket in your code!
  collections: [Users, Media, Schedules, Achievements, Pages, Resources],
  globals: [About, Contact],
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
})

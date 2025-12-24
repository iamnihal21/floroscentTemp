import { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  slug: 'about-pages',
  label: 'About Page',
   admin: {
    group: 'Site Content',
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'About Us',
    },
    {
      name: 'pageSlug',
      type: 'text',
      required: true,
      unique: true,
      defaultValue: 'welcome',
      admin: {
        description: 'Unique identifier for this page (e.g., "welcome", "leadership")',
      },
    },
    {
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          name: 'badgeText',
          type: 'text',
          defaultValue: 'About Our Institution',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Welcome to Florescent',
        },
        {
          name: 'highlightedWord',
          type: 'text',
          defaultValue: 'Florescent',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Where excellence meets innovation in education. A legacy of nurturing future leaders since our inception.',
        },
      ],
    },
    {
      name: 'introduction',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Shaping Future Leaders Since',
        },
        {
          name: 'foundingYear',
          type: 'number',
          defaultValue: 1995,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Florescent Public School stands as a beacon of academic excellence and holistic development in our community. For over two decades, we have been committed to providing an educational experience that transcends conventional learning.',
        },
        {
          name: 'philosophy',
          type: 'textarea',
          defaultValue: 'Our philosophy centers on creating a nurturing environment where every student discovers their potential, cultivates curiosity, and develops essential skills to thrive in an evolving world.',
        },
      ],
    },
    {
      name: 'visionMission',
      type: 'group',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          defaultValue: 'Our Guiding Principles',
        },
        {
          name: 'sectionSubtitle',
          type: 'text',
          defaultValue: 'The foundation upon which we build excellence in education',
        },
        {
          name: 'vision',
          type: 'textarea',
          defaultValue: 'To be a premier educational institution that transforms young minds into visionary leaders, innovative thinkers, and compassionate global citizens.',
        },
        {
          name: 'mission',
          type: 'textarea',
          defaultValue: 'To provide a dynamic learning environment that nurtures intellectual curiosity, fosters creativity, and instills strong ethical values.',
        },
        {
          name: 'coreValues',
          type: 'array',
          fields: [
            {
              name: 'value',
              type: 'text',
            },
          ],
          defaultValue: [
            { value: 'Innovative Teaching Methodologies' },
            { value: 'Holistic Student Development' },
            { value: 'Community Engagement and Service' },
            { value: 'Excellence in Education' },
            { value: 'Character Building' },
          ],
        },
      ],
    },
    {
      name: 'coreValuesSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Our Core Values',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'The fundamental principles that guide every aspect of our educational philosophy',
        },
        {
          name: 'values',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'icon',
              type: 'text',
              defaultValue: '⭐',
            },
            {
              name: 'color',
              type: 'text',
              defaultValue: 'from-amber-500 to-yellow-500',
            },
          ],
          defaultValue: [
            {
              title: 'Excellence',
              description: 'Striving for the highest standards in academics, character, and overall development through continuous improvement and dedication.',
              icon: '⭐',
              color: 'from-amber-500 to-yellow-500',
            },
            {
              title: 'Integrity',
              description: 'Upholding honesty, ethics, and moral principles in all our actions and decisions, building trust within our community.',
              icon: '⚖️',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Innovation',
              description: 'Embracing creativity and cutting-edge approaches to education that prepare students for the challenges of tomorrow.',
              icon: '💡',
              color: 'from-purple-500 to-pink-500',
            },
            {
              title: 'Community',
              description: 'Fostering collaboration, respect, and a sense of belonging among students, staff, parents, and the wider community.',
              icon: '🤝',
              color: 'from-green-500 to-emerald-500',
            },
          ],
        },
      ],
    },
    {
      name: 'educationalPhilosophy',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Shared Educational Philosophy',
        },
        {
          name: 'coreBeliefs',
          type: 'array',
          fields: [
            {
              name: 'belief',
              type: 'text',
            },
          ],
          defaultValue: [
            { belief: 'Innovative Teaching Methodologies' },
            { belief: 'Holistic Student Development' },
            { belief: 'Community Engagement and Service' },
            { belief: 'Excellence in Education' },
            { belief: 'Character Building' },
          ],
        },
        {
          name: 'commitments',
          type: 'array',
          fields: [
            {
              name: 'commitment',
              type: 'text',
            },
          ],
          defaultValue: [
            { commitment: 'Safe and inclusive learning environment' },
            { commitment: 'Innovative teaching methodologies' },
            { commitment: 'Holistic student development' },
            { commitment: 'Continuous teacher training' },
            { commitment: 'Community engagement and service' },
          ],
        },
      ],
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'published',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 1,
        },
      ],
    },
  ],
};
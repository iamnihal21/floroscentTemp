// collections/Career.ts
import { CollectionConfig } from 'payload';

export const Career: CollectionConfig = {
  slug: 'career',
  labels: {
    singular: 'Career Opening',
    plural: 'Career Openings',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'type', 'isActive'],
  },
  fields: [
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active Opening',
      defaultValue: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Job',
      defaultValue: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "senior-mathematics-teacher")',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Teaching', value: 'teaching' },
        { label: 'Administrative', value: 'administrative' },
        { label: 'Support Staff', value: 'support' },
        { label: 'Management', value: 'management' },
      ],
      defaultValue: 'teaching',
    },
    {
      name: 'department',
      type: 'text',
      required: true,
      defaultValue: 'Secondary School',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
      defaultValue: 'full-time',
    },
    {
      name: 'experience',
      type: 'text',
      required: true,
      defaultValue: '5+ years',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      defaultValue: 'Main Campus',
    },
    {
      name: 'deadline',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'salary',
      type: 'text',
      required: true,
      defaultValue: '₹45,000 - ₹60,000/month',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Job Requirements',
      minRows: 1,
      fields: [
        {
          name: 'requirement',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { requirement: 'M.Sc. in Mathematics or related field' },
        { requirement: 'B.Ed. degree mandatory' },
        { requirement: 'Experience with CBSE curriculum' },
        { requirement: 'Strong analytical and problem-solving skills' },
        { requirement: 'Excellent communication abilities' }
      ],
    },
    {
      name: 'responsibilities',
      type: 'array',
      label: 'Key Responsibilities',
      minRows: 1,
      fields: [
        {
          name: 'responsibility',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { responsibility: 'Teach Mathematics to Grades 9-12' },
        { responsibility: 'Develop lesson plans and teaching materials' },
        { responsibility: 'Conduct assessments and provide feedback' },
        { responsibility: 'Guide students for competitive exams' },
        { responsibility: 'Participate in curriculum development' }
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits & Perks',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { benefit: 'Performance-based bonuses' },
        { benefit: 'Professional development opportunities' },
        { benefit: 'Health insurance coverage' },
        { benefit: 'On-campus housing option' }
      ],
    },
    {
      name: 'applicationProcess',
      type: 'group',
      label: 'Application Process Details',
      fields: [
        {
          name: 'responseTime',
          type: 'text',
          defaultValue: '3-5 business days',
        },
        {
          name: 'contactEmail',
          type: 'email',
          defaultValue: 'hr@florescent.edu.in',
        },
        {
          name: 'officeHours',
          type: 'text',
          defaultValue: 'Mon-Fri, 9:00 AM - 5:00 PM',
        },
        {
          name: 'hiringSteps',
          type: 'array',
          label: 'Hiring Process Steps',
          fields: [
            {
              name: 'step',
              type: 'number',
              required: true,
              min: 1,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
            },
            {
              name: 'icon',
              type: 'text',
              defaultValue: '📝',
            },
          ],
          defaultValue: [
            { step: 1, title: 'Application', description: 'Submit online application with resume', icon: '📝' },
            { step: 2, title: 'Screening', description: 'Resume review by HR team', icon: '👁️' },
            { step: 3, title: 'Interview', description: 'Technical & HR interviews', icon: '💬' },
            { step: 4, title: 'Demo', description: 'Teaching demonstration', icon: '🎯' },
            { step: 5, title: 'Offer', description: 'Job offer & onboarding', icon: '🎉' },
          ],
        },
      ],
    },
    {
      name: 'applicationTips',
      type: 'group',
      label: 'Application Tips',
      fields: [
        {
          name: 'dos',
          type: 'array',
          label: "Do's",
          fields: [
            {
              name: 'tip',
              type: 'text',
            },
          ],
          defaultValue: [
            { tip: 'Tailor your resume to the position' },
            { tip: 'Highlight relevant teaching experience' },
            { tip: 'Include certifications and training' },
            { tip: 'Write a personalized cover letter' },
            { tip: 'Proofread all documents' },
            { tip: 'Prepare for teaching demonstration' }
          ],
        },
        {
          name: 'donts',
          type: 'array',
          label: "Don'ts",
          fields: [
            {
              name: 'tip',
              type: 'text',
            },
          ],
          defaultValue: [
            { tip: 'Submit generic applications' },
            { tip: 'Forget to attach documents' },
            { tip: 'Ignore application deadlines' },
            { tip: 'Use unprofessional email' },
            { tip: 'Underestimate preparation' },
            { tip: 'Neglect follow-up communication' }
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
        {
          name: 'createdAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'updatedAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Set timestamps
        const now = new Date();
        if (!data.metadata?.createdAt) {
          if (!data.metadata) data.metadata = {};
          data.metadata.createdAt = now;
        }
        data.metadata.updatedAt = now;
        
        // Generate slug from title if not provided
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }
        return data;
      }
    ],
  },
};
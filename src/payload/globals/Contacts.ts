// collections/ContactUs.ts
import { GlobalConfig } from 'payload';

export const ContactUs: GlobalConfig = {
  slug: 'contact-us',
  label: 'Contact Page',
  admin: {
    group: 'pageTitle',
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'Contact Us',
    },
    {
      name: 'pageSlug',
      type: 'text',
      required: true,
      unique: true,
      defaultValue: 'contact',
    },
    
    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          name: 'badgeText',
          type: 'text',
          defaultValue: 'Get in Touch',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Contact Us',
        },
        {
          name: 'highlightedWord',
          type: 'text',
          defaultValue: 'Us',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: "We're here to help! Reach out to us for any queries, concerns, or support you may need.",
        },
      ],
    },
    
    // Contact Information Card
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'primaryEmail',
          type: 'email',
          required: true,
          defaultValue: 'info@florescent.edu.in',
        },
        {
          name: 'secondaryEmail',
          type: 'email',
          defaultValue: 'admissions@florescent.edu.in',
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
          defaultValue: 'Florescent Public School\nSector 15, Vasant Kunj\nNew Delhi - 110070\nIndia',
        },
      ],
    },
    
    // Support Hours
    {
      name: 'supportHours',
      type: 'array',
      label: 'Support Hours',
      fields: [
        {
          name: 'day',
          type: 'text',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { day: 'Weekdays', hours: '8:00 AM - 5:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
        { day: 'Sunday', hours: 'Emergency Only' },
        { day: 'Holidays', hours: 'Closed' },
      ],
    },
    
    // Department Telephone Numbers
    {
      name: 'departmentContacts',
      type: 'array',
      label: 'Department Contacts',
      fields: [
        {
          name: 'department',
          type: 'text',
          required: true,
        },
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'extension',
          type: 'text',
        },
      ],
      defaultValue: [
        { department: 'Main Office', number: '+91 11 2653 6789', extension: '100' },
        { department: 'Admissions', number: '+91 11 2653 6790', extension: '101' },
        { department: 'Principal\'s Office', number: '+91 11 2653 6791', extension: '102' },
        { department: 'Accounts Department', number: '+91 11 2653 6792', extension: '103' },
        { department: 'Transport Office', number: '+91 11 2653 6793', extension: '104' },
        { department: 'IT Support', number: '+91 11 2653 6794', extension: '105' },
      ],
    },
    
    // Emergency Contacts
    {
      name: 'emergencyContacts',
      type: 'array',
      label: 'Emergency Contacts',
      fields: [
        {
          name: 'type',
          type: 'text',
          required: true,
        },
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'person',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { type: 'Medical Emergency', number: '+91 98765 43210', person: 'Dr. Sharma' },
        { type: 'Security', number: '+91 98765 43211', person: 'Mr. Singh' },
        { type: 'Fire Emergency', number: '101', person: 'Fire Station' },
        { type: 'Police', number: '100', person: 'Local Police' },
        { type: 'Ambulance', number: '102', person: 'Emergency Ambulance' },
        { type: 'Child Helpline', number: '1098', person: 'Child Helpline' },
      ],
    },
    
    // Response Time Information
    {
      name: 'responseTime',
      type: 'group',
      fields: [
        {
          name: 'emailResponse',
          type: 'text',
          defaultValue: 'Within 24 hours',
        },
        {
          name: 'phoneResponse',
          type: 'text',
          defaultValue: 'Immediate',
        },
        {
          name: 'admissionResponse',
          type: 'text',
          defaultValue: '48 hours',
        },
      ],
    },
    
    // Location & Directions
    {
      name: 'locationInfo',
      type: 'group',
      fields: [
        {
          name: 'mapEmbedUrl',
          type: 'text',
          defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0244310670387!2d72.5199150753149!3d23.059565879147904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835519d27f37%3A0xa903dd3f424f9a0f!2sFlorescent%20school!5e0!3m2!1sen!2sin!4v1763745880149!5m2!1sen!2sin',
        },
        {
          name: 'metroInfo',
          type: 'textarea',
          defaultValue: 'Nearest station: Vasant Kunj Metro Station (5 minutes walk)',
        },
        {
          name: 'busInfo',
          type: 'textarea',
          defaultValue: 'Bus routes: 543, 621, 715 (Stop: Florescent Public School)',
        },
        {
          name: 'carInfo',
          type: 'textarea',
          defaultValue: 'Ample parking available in the school premises',
        },
      ],
    },
    
    // Visiting Hours
    {
      name: 'visitingHours',
      type: 'array',
      label: 'Visiting Hours',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { category: 'For Parents', hours: '2:00 PM - 4:00 PM' },
        { category: 'For Admissions', hours: '10:00 AM - 1:00 PM' },
        { category: 'Campus Tours', hours: 'By Appointment' },
      ],
    },
    
    // Additional Contact Information
    {
      name: 'additionalContacts',
      type: 'group',
      fields: [
        {
          name: 'hrEmail',
          type: 'email',
          defaultValue: 'hr@florescent.edu.in',
        },
        {
          name: 'hrOfficeHours',
          type: 'text',
          defaultValue: 'Mon-Fri, 9:00 AM - 5:00 PM',
        },
        {
          name: 'hrResponseTime',
          type: 'text',
          defaultValue: '3-5 business days',
        },
      ],
    },
    
    // Form Subjects (for dropdown)
    {
      name: 'formSubjects',
      type: 'array',
      label: 'Form Inquiry Subjects',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: 'admission', label: 'Admission Inquiry' },
        { value: 'academic', label: 'Academic Matters' },
        { value: 'transport', label: 'Transport Services' },
        { value: 'fees', label: 'Fee Structure' },
        { value: 'events', label: 'School Events' },
        { value: 'feedback', label: 'Feedback/Suggestions' },
        { value: 'other', label: 'Other' },
      ],
    },
    
    // Student Grade Options
    {
      name: 'studentGrades',
      type: 'array',
      label: 'Student Grade Options',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: '', label: 'Select Grade' },
        { value: 'nursery', label: 'Nursery' },
        { value: 'kg', label: 'Kindergarten' },
        { value: '1-5', label: 'Grades 1-5' },
        { value: '6-8', label: 'Grades 6-8' },
        { value: '9-10', label: 'Grades 9-10' },
        { value: '11-12', label: 'Grades 11-12' },
        { value: 'alumni', label: 'Alumni' },
        { value: 'parent', label: 'Parent/Guardian' },
      ],
    },
    
    // Metadata
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
        const now = new Date();
        if (!data.metadata?.createdAt) {
          if (!data.metadata) data.metadata = {};
          data.metadata.createdAt = now;
        }
        data.metadata.updatedAt = now;
        return data;
      }
    ],
  },
};
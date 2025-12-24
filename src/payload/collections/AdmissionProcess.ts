import { CollectionConfig } from 'payload';

export const AcademicAndAdmission: CollectionConfig = {
  slug: 'academic-admission',
  labels: {
    singular: 'Academic & Admission',
    plural: 'Academic & Admissions',
  },
  admin: {
    useAsTitle: 'academicYear',
  },
  fields: [
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      defaultValue: '2024-25',
      label: 'Academic Year',
    },
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'Academic & Admissions 2024-25',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active Content',
      defaultValue: true,
    },
    
    // ========== ADMISSION SECTION ==========
    {
      type: 'collapsible',
      label: 'Admission Process',
      fields: [
        // Hero Section
        {
          name: 'heroSection',
          type: 'group',
          fields: [
            {
              name: 'badgeText',
              type: 'text',
              defaultValue: 'Admissions 2025-26',
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'Begin Your Journey',
            },
            {
              name: 'highlightedWord',
              type: 'text',
              defaultValue: 'Journey',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'Join Florescent Public School - Where excellence meets opportunity. Start your application process for the upcoming academic year.',
            },
            {
              name: 'brochureUrl',
              type: 'text',
              defaultValue: '/brochure.pdf',
            },
          ],
        },
        
        // Admission Process Steps
        {
          name: 'processSteps',
          type: 'array',
          label: 'Admission Process Steps',
          minRows: 1,
          maxRows: 10,
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
              type: 'textarea',
              required: true,
            },
            {
              name: 'duration',
              type: 'text',
              defaultValue: '1-2 Days',
            },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'File Text', value: 'FileText' },
                { label: 'User Check', value: 'UserCheck' },
                { label: 'Check Circle', value: 'CheckCircle' },
                { label: 'Calendar', value: 'Calendar' },
                { label: 'Credit Card', value: 'CreditCard' },
              ],
              defaultValue: 'FileText',
            },
            {
              name: 'details',
              type: 'array',
              label: 'Key Activities',
              fields: [
                {
                  name: 'activity',
                  type: 'text',
                },
              ],
            },
          ],
          defaultValue: [
            {
              step: 1,
              title: "Inquiry & Information",
              description: "Submit online inquiry or visit campus for information session",
              duration: "1-2 Days",
              icon: "FileText",
              details: [
                { activity: "Fill online inquiry form" },
                { activity: "Schedule campus tour" },
                { activity: "Attend information session" },
                { activity: "Receive prospectus" }
              ]
            },
            {
              step: 2,
              title: "Application Submission",
              description: "Complete and submit application with required documents",
              duration: "3-5 Days",
              icon: "UserCheck",
              details: [
                { activity: "Download application form" },
                { activity: "Attach required documents" },
                { activity: "Pay application fee" },
                { activity: "Submit before deadline" }
              ]
            },
            {
              step: 3,
              title: "Assessment & Interview",
              description: "Student assessment and parent interaction session",
              duration: "1 Week",
              icon: "CheckCircle",
              details: [
                { activity: "Student aptitude assessment" },
                { activity: "Parent interview" },
                { activity: "Review of academic records" },
                { activity: "Extracurricular evaluation" }
              ]
            },
            {
              step: 4,
              title: "Admission Decision",
              description: "Review and communication of admission decision",
              duration: "2-3 Days",
              icon: "Calendar",
              details: [
                { activity: "Committee review" },
                { activity: "Merit-based selection" },
                { activity: "Seat allotment" },
                { activity: "Offer letter dispatch" }
              ]
            },
            {
              step: 5,
              title: "Enrollment & Fee Payment",
              description: "Complete admission formalities and fee payment",
              duration: "3-5 Days",
              icon: "CreditCard",
              details: [
                { activity: "Submit admission acceptance" },
                { activity: "Complete fee payment" },
                { activity: "Submit remaining documents" },
                { activity: "Receive student ID" }
              ]
            }
          ],
        },
        
        // Required Documents
        {
          name: 'requiredDocuments',
          type: 'array',
          label: 'Required Documents Categories',
          fields: [
            {
              name: 'category',
              type: 'text',
              required: true,
            },
            {
              name: 'items',
              type: 'array',
              label: 'Document Items',
              fields: [
                {
                  name: 'item',
                  type: 'text',
                },
              ],
            },
          ],
          defaultValue: [
            {
              category: "Student Documents",
              items: [
                { item: "Birth Certificate (Original + Copy)" },
                { item: "Previous School Report Card" },
                { item: "Transfer Certificate (If applicable)" },
                { item: "Aadhar Card Copy" },
                { item: "Passport Size Photos (4 copies)" }
              ]
            },
            {
              category: "Parent/Guardian Documents",
              items: [
                { item: "Parent Aadhar Cards (Copy)" },
                { item: "Parent PAN Card (Copy)" },
                { item: "Address Proof (Copy)" },
                { item: "Income Certificate (If applicable)" },
                { item: "Caste Certificate (If applicable)" }
              ]
            },
            {
              category: "Additional Documents",
              items: [
                { item: "Medical Certificate" },
                { item: "Disability Certificate (If applicable)" },
                { item: "Sports/Cultural Achievement Certificates" },
                { item: "Sibling Proof (If applicable)" },
                { item: "Passport & Visa (For NRI/Foreign Nationals)" }
              ]
            }
          ],
        },
        
        // Important Dates
        {
          name: 'importantDates',
          type: 'array',
          label: 'Important Dates Timeline',
          fields: [
            {
              name: 'date',
              type: 'text',
              required: true,
            },
            {
              name: 'event',
              type: 'text',
              required: true,
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Current', value: 'current' },
                { label: 'Completed', value: 'completed' },
              ],
              defaultValue: 'upcoming',
            },
          ],
          defaultValue: [
            { date: "January 15, 2025", event: "Admissions Open", status: "upcoming" },
            { date: "March 31, 2025", event: "Last Date for Applications", status: "upcoming" },
            { date: "April 15-30, 2025", event: "Assessments & Interviews", status: "upcoming" },
            { date: "May 15, 2025", event: "First Offer Letters", status: "upcoming" },
            { date: "June 10, 2025", event: "Admission Confirmation Deadline", status: "upcoming" }
          ],
        },
        
        // Additional Information
        {
          name: 'additionalInfo',
          type: 'group',
          fields: [
            {
              name: 'guidelinesTitle',
              type: 'text',
              defaultValue: 'Document Submission Guidelines',
            },
            {
              name: 'guidelinesText',
              type: 'textarea',
              defaultValue: 'All documents must be self-attested. Keep original documents for verification during admission.',
            },
            {
              name: 'checklistUrl',
              type: 'text',
              defaultValue: '/checklist.pdf',
            },
            {
              name: 'contactEmail',
              type: 'email',
              defaultValue: 'admissions@florescent.edu.in',
            },
            {
              name: 'contactPhone',
              type: 'text',
              defaultValue: '+91-9876543210',
            },
            {
              name: 'ctaTitle',
              type: 'text',
              defaultValue: 'Ready to Begin Your Florescent Journey?',
            },
            {
              name: 'ctaDescription',
              type: 'textarea',
              defaultValue: 'Download our comprehensive admission brochure for detailed information about our curriculum, facilities, fee structure, and admission guidelines.',
            },
          ],
        },
      ],
    },
    
    // ========== ACADEMIC SECTION ==========
    {
      type: 'collapsible',
      label: 'Academic Content',
      fields: [
        // Notices
        {
          name: 'notices',
          type: 'array',
          label: 'School Notices',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'date',
              type: 'text',
              required: true,
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Event', value: 'Event' },
                { label: 'Holiday', value: 'Holiday' },
                { label: 'Academic', value: 'Academic' },
                { label: 'Sports', value: 'Sports' },
                { label: 'Meeting', value: 'Meeting' },
                { label: 'Finance', value: 'Finance' },
              ],
              required: true,
            },
            {
              name: 'priority',
              type: 'select',
              options: [
                { label: 'Urgent', value: 'Urgent' },
                { label: 'Important', value: 'Important' },
                { label: 'General', value: 'General' },
              ],
              required: true,
            },
            {
              name: 'content',
              type: 'textarea',
              required: true,
            },
            {
              name: 'attachments',
              type: 'array',
              fields: [
                {
                  name: 'file',
                  type: 'text',
                },
              ],
            },
          ],
          defaultValue: [
            {
              title: "Annual Day Celebrations",
              date: "March 25, 2024",
              category: "Event",
              priority: "Important",
              content: "The school will be celebrating Annual Day on March 25, 2024. All students must report by 3:00 PM in their respective classrooms. Parents are cordially invited to attend the function starting at 4:00 PM in the school auditorium.",
              attachments: ["Invitation.pdf", "Program Schedule.docx"]
            },
            {
              title: "Summer Vacation Schedule",
              date: "May 1, 2024",
              category: "Holiday",
              priority: "General",
              content: "Summer vacation will begin from May 15, 2024. School will reopen on July 1, 2024. All homework assignments will be uploaded on the parent portal.",
              attachments: ["Vacation Homework.pdf"]
            }
          ],
        },
        
        // School Policies
        {
          name: 'schoolPolicies',
          type: 'array',
          label: 'School Policies',
          fields: [
            {
              name: 'category',
              type: 'text',
              required: true,
            },
            {
              name: 'lastUpdated',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'fileSize',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            {
              category: "Attendance Policy",
              lastUpdated: "Jan 2024",
              description: "Rules regarding student attendance, leaves, and punctuality",
              fileSize: "245 KB"
            },
            {
              category: "Examination Rules",
              lastUpdated: "Feb 2024",
              description: "Guidelines for examinations, grading system, and evaluation",
              fileSize: "312 KB"
            }
          ],
        },
        
        // Downloadable Forms
        {
          name: 'downloadableForms',
          type: 'array',
          label: 'Downloadable Forms',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Admission', value: 'Admission' },
                { label: 'Leave', value: 'Leave' },
                { label: 'Finance', value: 'Finance' },
                { label: 'Transport', value: 'Transport' },
                { label: 'Library', value: 'Library' },
                { label: 'Medical', value: 'Medical' },
                { label: 'Scholarship', value: 'Scholarship' },
                { label: 'General', value: 'General' },
              ],
              required: true,
            },
            {
              name: 'size',
              type: 'text',
              required: true,
            },
            {
              name: 'downloads',
              type: 'number',
              required: true,
            },
          ],
          defaultValue: [
            {
              name: "Admission Form",
              type: "Admission",
              size: "145 KB",
              downloads: 245
            },
            {
              name: "Leave Application",
              type: "Leave",
              size: "98 KB",
              downloads: 512
            }
          ],
        },
        
        // Exam Schedules
        {
          name: 'examSchedules',
          type: 'array',
          label: 'Examination Schedules',
          fields: [
            {
              name: 'term',
              type: 'text',
              required: true,
            },
            {
              name: 'date',
              type: 'text',
              required: true,
            },
            {
              name: 'classes',
              type: 'text',
              required: true,
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Upcoming', value: 'Upcoming' },
                { label: 'Completed', value: 'Completed' },
                { label: 'Ongoing', value: 'Ongoing' },
              ],
              required: true,
            },
            {
              name: 'color',
              type: 'text',
            },
          ],
          defaultValue: [
            {
              term: "Term I - Annual Examination",
              date: "March 15-30, 2024",
              classes: "Nursery - Grade 12",
              status: "Upcoming",
              color: "bg-red-500/10 text-red-500"
            },
            {
              term: "Term II - Half Yearly",
              date: "October 10-25, 2024",
              classes: "Grade 1-12",
              status: "Upcoming",
              color: "bg-blue-500/10 text-blue-500"
            }
          ],
        },
        
        // PTM Schedules
        {
          name: 'ptmSchedules',
          type: 'array',
          label: 'PTM Schedules',
          fields: [
            {
              name: 'date',
              type: 'text',
              required: true,
            },
            {
              name: 'time',
              type: 'text',
              required: true,
            },
            {
              name: 'classes',
              type: 'text',
              required: true,
            },
            {
              name: 'venue',
              type: 'text',
              required: true,
            },
            {
              name: 'type',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            {
              date: "March 20, 2024",
              time: "9:00 AM - 1:00 PM",
              classes: "Nursery - Grade 5",
              venue: "School Auditorium",
              type: "Regular PTM"
            },
            {
              date: "March 21, 2024",
              time: "9:00 AM - 1:00 PM",
              classes: "Grade 6-8",
              venue: "School Auditorium",
              type: "Regular PTM"
            }
          ],
        },
        
        // Upcoming Events
        {
          name: 'upcomingEvents',
          type: 'array',
          label: 'Upcoming Events',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'date',
              type: 'text',
              required: true,
            },
            {
              name: 'time',
              type: 'text',
              required: true,
            },
            {
              name: 'venue',
              type: 'text',
              required: true,
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Sports', value: 'sports' },
                { label: 'Arts', value: 'arts' },
                { label: 'Music', value: 'music' },
                { label: 'Drama', value: 'drama' },
              ],
            },
            {
              name: 'participants',
              type: 'text',
            },
          ],
          defaultValue: [
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
            }
          ],
        },
        
        // Fee Payments
        {
          name: 'feePayments',
          type: 'array',
          label: 'Fee Payment Information',
          fields: [
            {
              name: 'installment',
              type: 'text',
              required: true,
            },
            {
              name: 'dueDate',
              type: 'text',
              required: true,
            },
            {
              name: 'amount',
              type: 'text',
              required: true,
            },
            {
              name: 'status',
              type: 'select',
              options: [
                { label: 'Due', value: 'Due' },
                { label: 'Upcoming', value: 'Upcoming' },
                { label: 'Monthly', value: 'Monthly' },
                { label: 'Paid', value: 'Paid' },
              ],
            },
            {
              name: 'lateFee',
              type: 'text',
            },
          ],
          defaultValue: [
            {
              installment: "Quarter 1",
              dueDate: "April 10, 2024",
              amount: "₹25,000",
              status: "Due",
              lateFee: "₹500 after April 15"
            },
            {
              installment: "Quarter 2",
              dueDate: "July 10, 2024",
              amount: "₹25,000",
              status: "Upcoming",
              lateFee: "₹500 after July 15"
            }
          ],
        },
      ],
    },
    
    // ========== METADATA ==========
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
        return data;
      }
    ],
  },
  access: {
    read: () => true,
  },
};
// "use client";

// import React, { useState } from "react";

// interface PortalsMenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function AdmissionInquiry({ isOpen, onClose }: PortalsMenuProps) {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     parentName: "",
//     email: "",
//     phone: "",
//     classFor: "",
//     message: "",
//   });

//   if (!isOpen) return null;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Inquiry submitted successfully!");
//     onClose();
//   };

//   return (
//     <div 
//       role="dialog" 
//       aria-label="Admission Inquiry Form"
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-100"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-xl p-8 w-[95%] max-w-lg shadow-xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//           Admission Inquiry Form
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {/* Student Name */}
//           <div>
//             <label className="text-sm font-medium">Student Name</label>
//             <input
//               type="text"
//               name="studentName"
//               value={formData.studentName}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             />
//           </div>

//           {/* Parent Name */}
//           <div>
//             <label className="text-sm font-medium">Parent Name</label>
//             <input
//               type="text"
//               name="parentName"
//               value={formData.parentName}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="text-sm font-medium">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             />
//           </div>

//           {/* Class Applying For */}
//           <div>
//             <label className="text-sm font-medium">Class Applying For</label>
//             <input
//               type="text"
//               name="classFor"
//               value={formData.classFor}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-sm font-medium">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
//             ></textarea>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-between items-center pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900"
//             >
//               Submit Inquiry
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { X } from "lucide-react"; // Optional: for a close icon

interface PortalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionInquiry({ isOpen, onClose }: PortalsMenuProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classFor: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inquiry submitted successfully!");
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          classFor: "",
          message: "",
        });
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Failed to submit: ${errorData.errors?.[0]?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      role="dialog" 
      aria-modal="true"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Admission Inquiry
            </h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Parent Name</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 ..."
                  className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Class Applying For</label>
              <input
                type="text"
                name="classFor"
                value={formData.classFor}
                onChange={handleChange}
                required
                placeholder="e.g. Grade 5"
                className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific questions?"
                className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-[2] px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition-all disabled:bg-zinc-400 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
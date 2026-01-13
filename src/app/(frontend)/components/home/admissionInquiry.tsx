"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionInquiry({ isOpen, onClose }: PortalsMenuProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New Success State
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true); // Trigger Success UI
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          classFor: "",
          message: "",
        });
        
        // Automatically close after 3 seconds
        setTimeout(() => {
          onClose();
          // Reset success state after modal closes so it's fresh for next time
          setTimeout(() => setIsSuccess(false), 300);
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.errors?.[0]?.message || "Submission failed"}`);
      }
    } catch (error) {
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              /* --- FORM STATE --- */
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Admission Inquiry</h2>
                  <p className="text-gray-500 text-sm mt-1">Fill out the form below and we&apos;ll get back to you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Full Name" required />
                    <InputField label="Parent Name" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Guardian Name" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@address.com" required />
                    <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 ..." required />
                  </div>

                  <InputField label="Class Applying For" name="classFor" value={formData.classFor} onChange={handleChange} placeholder="e.g. Grade 5" required />

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full mt-1 px-4 py-3 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-4 focus:ring-black/5 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:bg-zinc-800 transition-all disabled:bg-zinc-300 flex items-center justify-center gap-3 mt-4"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* --- SUCCESS STATE --- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-500 max-w-[250px]">
                  Your inquiry has been received. Our admissions team will contact you shortly.
                </p>

                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 3 }}
                   className="h-1 bg-green-500 absolute bottom-0 left-0"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Reusable Helper Component for cleaner code
function InputField({ label, ...props }: any) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{label}</label>
      <input
        {...props}
        className="w-full mt-1 px-4 py-3 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-4 focus:ring-black/5 focus:bg-white transition-all"
      />
    </div>
  );
}
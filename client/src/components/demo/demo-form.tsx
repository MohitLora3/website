
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const demoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  size: z.string().min(1, "Please select a company size"),
  phone: z.string().optional(),
  message: z.string().optional(),
  solution: z.string().optional()
});

type DemoFormData = z.infer<typeof demoSchema>;

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      solution: "AI Call Agent"
    }
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch('/api/demo/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to submit demo request");
      }
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting demo request:", error);
      setSubmitError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-slate-100">
      <h3 className="text-xl font-semibold mb-6 text-slate-800">Request a Demo</h3>
      
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center"
        >
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="text-lg font-medium mb-2">Thank You!</h4>
          <p>Your demo request has been submitted successfully. We'll get back to you within 24 hours.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="mt-4 text-blue-600 underline hover:text-blue-800"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name*</label>
              <input 
                type="text" 
                {...register("name")}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`} 
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address*</label>
              <input 
                type="email" 
                {...register("email")}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`} 
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company*</label>
            <input 
              type="text" 
              {...register("company")}
              className={`w-full px-4 py-2 border ${errors.company ? 'border-red-300 bg-red-50' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`} 
            />
            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Industry*</label>
              <select 
                {...register("industry")}
                className={`w-full px-4 py-2 border ${errors.industry ? 'border-red-300 bg-red-50' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
              >
                <option value="">Select an industry</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Retail">Retail</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>
              {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Size*</label>
              <select 
                {...register("size")}
                className={`w-full px-4 py-2 border ${errors.size ? 'border-red-300 bg-red-50' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
              {errors.size && <p className="mt-1 text-sm text-red-600">{errors.size.message}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number (optional)</label>
            <input 
              type="tel" 
              {...register("phone")}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">What are you interested in?</label>
            <textarea 
              {...register("message")}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-24"
            ></textarea>
          </div>
          
          {submitError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-200">
              {submitError}
            </div>
          )}
          
          <motion.button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : "Submit Request"}
          </motion.button>
        </form>
      )}
      
      <div className="mt-6 text-center text-sm text-slate-500">
        We'll get back to you within 24 hours to schedule your demo.
      </div>
    </div>
  );
}

'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  'https://cxodpqmnohsastybtukb.supabase.co',
  'sb_publishable_uyDGL1PsPmroEWzn_IdWKw_JY4KeT-b'!
)

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  submit?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const { error } = await supabase
        .from('contactus')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          }
        ])

      if (error) {
        throw error
      }

      // Success - reset form and show success message
      setFormData({ name: '', email: '', message: '' })
      setIsSuccess(true)
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({
        submit: 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 lg:p-12 w-full lg:w-[600px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-black font-inter text-3xl lg:text-4xl font-normal mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600 font-inter text-base mb-8">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-3 rounded-full bg-[#16467B] text-white font-inter font-medium hover:bg-[#0f3559] transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 w-full lg:w-[600px]">
      <h3 className="text-black font-inter text-3xl lg:text-4xl font-normal mb-4">
        Get in Touch
      </h3>
      <p className="text-gray-600 font-inter text-base mb-8">
        We're here to assist you with your inquiries.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-black font-inter text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-200 ${
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#16467B]'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-black font-inter text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-200 ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#16467B]'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-black font-inter text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Type your message..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-200 resize-none ${
              errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#16467B]'
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-full bg-[#16467B] text-white font-inter font-medium hover:bg-[#0f3559] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  )
}
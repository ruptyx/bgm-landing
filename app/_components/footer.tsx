import Image from 'next/image'
import Link from 'next/link'

export default function WhyFooterCombined() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      text: "In-depth knowledge of the regional healthcare market."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: "Reliable compliance and logistics systems for seamless operations."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a3 3 0 00-3-3m0 0a3 3 0 00-3 3m3-3v12" />
        </svg>
      ),
      text: "Extensive network of partners across the GCC healthcare sector."
    }
  ]

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' }
  ]

  const socialLinks = [
    { icon: 'facebook', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'linkedin', href: '#' },
    { icon: 'youtube', href: '#' }
  ]

  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ]

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        <div className="flex flex-col gap-8">
          {/* Why Choose Us Blue Container */}
          <div className="w-full lg:w-[1392px] lg:h-[664px] mx-auto flex flex-col items-center justify-center p-12 lg:px-[213px] lg:py-[145px] gap-2 rounded-[32px] bg-[#16467B]">
            {/* Why Choose Us Label */}
            <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-white font-inter text-lg italic">
                Why Choose Us
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-white text-3xl md:text-5xl lg:text-[64px] font-inter font-normal leading-[110%] tracking-tighter lg:tracking-[-3.84px] text-center max-w-5xl mb-8">
              Why Choose Boushahri Group Medical as Your Partner?
            </h2>

            {/* Description */}
            <p className="text-white/80 font-inter text-base lg:text-lg leading-relaxed text-center max-w-3xl mb-16">
              Partnering with us means leveraging deep market insights and proven logistics expertise. We are committed to helping you navigate the GCC healthcare landscape effectively.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full max-w-5xl">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <p className="text-white font-inter text-sm lg:text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Black Container */}
          <div className="w-full lg:w-[1392px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 lg:pl-10 lg:pr-8 lg:py-8 rounded-[32px] bg-black">
            {/* Left Side - Logo and Navigation */}
            <div className="flex flex-col gap-8 mb-8 lg:mb-0">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/grp.svg"
                  alt="Boushahri Group Medical"
                  width={150}
                  height={50}
                  className="brightness-0 invert"
                />
              </Link>
       {/* Navigation Links */}
              <nav className="flex flex-wrap gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.icon}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="sr-only">{social.icon}</span>
                    {/* Social Icons */}
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </Link>
                ))}
              </div>

              {/* Copyright and Footer Links */}
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  © 2024 Boushahri Group. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-6">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 w-full lg:w-[600px]">
              <h3 className="text-black font-inter text-3xl lg:text-4xl font-normal mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 font-inter text-base mb-8">
                We're here to assist you with your inquiries.
              </p>

              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-black font-inter text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#16467B] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-black font-inter text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#16467B] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-black font-inter text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#16467B] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#16467B] text-white font-inter font-medium hover:bg-[#0f3559] transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full px-4 md:px-6 lg:px-8 py-4 lg:py-6">
      <div className="max-w-[1312px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/bgm.png"
            alt="BGM Logo"
            width={120}
            height={40}
            className="w-24 md:w-28 lg:w-32 h-auto"
            priority
          />
        </Link>

        {/* Buttons Container */}
        <div className="flex gap-3 md:gap-4">
          {/* Contact Button */}
          <button
            className="
              px-4 py-3 md:px-6 md:py-4
              text-sm md:text-base
              font-medium
              text-[#16467B]
              border border-[#16467B]
              rounded-full
              hover:bg-[#16467B] hover:text-white
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#16467B] focus:ring-offset-2
            "
            aria-label="Contact us"
          >
            Contact
          </button>

          {/* Submit Button */}
          <button
            className="
              px-4 py-3 md:px-6 md:py-4
              text-sm md:text-base
              font-medium
              text-white
              bg-[#16467B]
              rounded-full
              hover:bg-[#0f3559]
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#16467B] focus:ring-offset-2
            "
            aria-label="Submit"
          >
            Submit
          </button>
        </div>
      </div>
    </nav>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<nav className="bg-[tomato] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center space-x-3">
            <img
              src="/food.png"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
            <span className="text-2xl font-bold">Recipe Finder</span>
          </div>

          <div className="space-x-6 text-lg font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
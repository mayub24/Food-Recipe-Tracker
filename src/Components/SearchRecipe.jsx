import React from 'react'
import { useState, useEffect } from 'react'
import Loader from './Loader'

const SearchRecipe = ({searchTerm, setSearchTerm, setCategory, setArea}) => {

    const handleChange = (e) => {
      setCategory('');
      setArea('');
      setSearchTerm(e.target.value);
    }

  return (
      <div className="flex justify-center items-center py-6 mt-7">
      <div className="relative w-full max-w-3xl">
        <input
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search recipes..."
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-[tomato]"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </div>
      </div>
    </div>
  )
}

export default SearchRecipe
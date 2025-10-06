import React, { useState } from 'react'

const AreaDropdown = ({setArea, area, setSearchTerm, setCategory}) => {

  const handleAreaChange = (e) => {
      const value = e.target.value;
      setSearchTerm('');
      setCategory('');
      setArea(value);
  }

  return (
      <div className="flex flex-col items-center py-4">
  <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
    Select by Area
  </label>

  <select
    name="category"
    id="category"
    value={area}
    onChange={handleAreaChange}
    className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[tomato] focus:border-[tomato] text-gray-700 bg-white"
  >
    <option value="">Select an Area</option>
    <option value="Japanese">Japanese</option>
    <option value="Chinese">Chinese</option>
    <option value="Indian">Indian</option>
    <option value="Vietnamese">Vietnamese</option>
    <option value="Thai">Thai</option>
    <option value="Malaysian">Malaysian</option>
  </select>
</div>
  )
}

export default AreaDropdown
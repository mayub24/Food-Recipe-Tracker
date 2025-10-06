import React, { useEffect, useState } from 'react'

const CategoryDropdown = ({ setCategory, category, setArea, setSearchTerm}) => {

  const [categoryData, setCategoryData] = useState(null);

    const handleChange = (e) => {
      e.preventDefault();
      setArea('');
      setSearchTerm('');

      const value = e.target.value;

      setCategory(value);
    }

    useEffect(() => {
      
      const fetchCategories = async () => {

        try {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
         if(!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setCategoryData(data.categories);

        } catch (error) {
            console.log(`Error: ${error}`);   
        }
      }

      fetchCategories();

    }, [])


  return (

<div className="flex flex-col items-center py-4">
  <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
    Select by Category
  </label>

  <select
    name="category"
    id="category"
    value={category}
    onChange={handleChange}
    className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[tomato] focus:border-[tomato] text-gray-700 bg-white"
  >
    <option value="">Select a category</option>
    {categoryData == null ? <option value="">No options available</option> : categoryData.map((each) => (
        <option key={each.strCategory} value={each.strCategory}>{each.strCategory}</option>
    ))}
  </select>
</div>

  )
}

export default CategoryDropdown
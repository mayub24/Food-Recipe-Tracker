import React from 'react'

const EachRecipeCard = ({singleRecipe}) => {

    const {idMeal, strMeal, strMealThumb} = singleRecipe;
    
    

  return (
 <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto">
     <div className="h-58 w-90 overflow-hidden rounded-t-xl">
  <img
    src={strMealThumb}
    alt={strMeal}
    className="w-full h-full object-cover"
  />
</div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{strMeal}</h3>
        <button
          className="bg-[tomato] text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors duration-200"
          onClick={() => window.open(`https://www.themealdb.com/meal/${idMeal}`, '_blank')}
        >
          Checkout Recipe
        </button>
      </div>
    </div>
  )
}

export default EachRecipeCard
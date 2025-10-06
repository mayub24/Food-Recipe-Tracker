import React from 'react'

const NoRecipeAvailable = ({recipeName}) => {
  return (
<h1 className="text-center text-gray-500 text-2xl font-semibold mt-10">
  No recipes found with the name {recipeName}.
</h1>
  )
}

export default NoRecipeAvailable
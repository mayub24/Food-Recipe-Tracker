import React from 'react'
import { useState, useEffect } from 'react'
import EachRecipeCard from './EachRecipeCard';
import Loader from './Loader';
import NoRecipeAvailable from './NoRecipeAvailable';

const Cards = ({searchTerm, letter, category, area}) => {

  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    
    const fetchRecipes = async () => {
      try {
        let res;
          if (searchTerm) {
        res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      } else if (category) {
        res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      } else if (area) {
        res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      } else if (letter) {
        res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      } else {
        res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
      }
        if(!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
      
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
          setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [searchTerm, letter, category, area])

  if (loading) return <Loader />
  if (error) return <p className="text-red-500 text-center mt-4">Error: {error}</p>

  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {recipes.meals == null ? <NoRecipeAvailable recipeName={searchTerm} /> : recipes.meals.map((recipe) => (
          <EachRecipeCard key={recipe.idMeal} singleRecipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Cards
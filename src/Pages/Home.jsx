import React from 'react'
import SearchRecipe from '../Components/SearchRecipe'
import Cards from '../Components/Cards'
import Hero from '../Components/Hero'
import { useState } from 'react'
import FirstLetterDropdown from '../Components/FirstLetterDropdown'
import CategoryDropdown from '../Components/CategoryDropdown'
import AreaDropdown from '../Components/AreaDropdown'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [letter, setLetter] = useState('');
    const [category, setCategory] = useState('');
    const [area, setArea] = useState(null);
    

  return (
    <>
        <Hero />
        <SearchRecipe setSearchTerm={setSearchTerm} searchTerm={searchTerm} setCategory={setCategory} setArea={setArea} />
        <div className="flex flex-wrap justify-center gap-6 py-4">
            <CategoryDropdown setCategory={setCategory} category={category} setSearchTerm={setSearchTerm} setArea={setArea} />
            <AreaDropdown setArea={setArea} area={area} setSearchTerm={setSearchTerm} setCategory={setCategory} />
        </div>
        <Cards searchTerm={searchTerm} letter={letter} category={category} area={area} />
        <FirstLetterDropdown setLetter={setLetter} setSearchTerm={setSearchTerm} setCategory={setCategory} setArea={setArea} />
    </>
  )
}

export default Home
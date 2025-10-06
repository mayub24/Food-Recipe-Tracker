import React from 'react'
import { useEffect, useState } from 'react'

const FirstLetterDropdown = ({setLetter, setSearchTerm, setCategory, setArea}) => {

    const items = [
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
  { label: 'D' },
  { label: 'E' },
  { label: 'F' },
  { label: 'G' },
  { label: 'H' },
  { label: 'I' },
  { label: 'J' },
  { label: 'K' },
  { label: 'L' },
  { label: 'M' },
  { label: 'N' },
  { label: 'O' },
  { label: 'P' },
  { label: 'Q' },
  { label: 'R' },
  { label: 'S' },
  { label: 'T' },
  { label: 'U' },
  { label: 'V' },
  { label: 'W' },
  { label: 'X' },
  { label: 'Y' },
  { label: 'Z' }
]

     const handleLetterClick = (letter) => {
        setSearchTerm('');
        setCategory('');
        setArea('');
        setLetter(letter);
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log(letter);      
    }

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-8">
        <h1 className="text-xl font-extrabold text-gray-700 sm:text-2xl mx-auto">
            Browse Meals by Starting Letter
        </h1>
    </div>

    <div className="flex flex-wrap justify-center gap-4 text-xl font-medium text-gray-700 py-5">
    {items.map((item) => (
        <div>
            <button
                key={item.label}
                onClick={() => handleLetterClick(item.label)}
                className="cursor-pointer hover:text-[tomato] transition-colors duration-200"
            >
                {item.label}
            </button>   
        <span className='ml-5'> {'|'} </span>
        </div>
        ))}
        </div>
  </>
  )
}

export default FirstLetterDropdown
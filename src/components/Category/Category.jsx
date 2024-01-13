import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mt-14 sx:grid-cols-1 sx:gap-6 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-6">
      {data.map((meal) => (
        <Link to={`/meals/${meal.idMeal}`} className='flex flex-col justify-between h-full' key={meal.idMeal}>
          <div className="flex flex-col justify-between text-lg text-primaryColor border border-[#dcca878f]">
            <div className="">
              <img src={meal.strMealThumb} alt="" />
            </div>
            <div className="flex flex-col justify-end bg-primaryColor h-full">
              <p className="flex text-black  text-xl font-Cormorant font-bold py-2 px-2 capitalize">{meal.strMeal}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Category

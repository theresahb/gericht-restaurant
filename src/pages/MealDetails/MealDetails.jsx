import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const MealDetails = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { idMeal } = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error(`This is an HTTP Error: The status is ${response.status}`);
            }
            return response.json();
        })
        .then((actualData) => {
            const meals = actualData.meals;
            setData(meals);
            console.log(meals);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
            setData(null);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [idMeal]);

    // Extract ingredients from the item object
    const extractIngredients = (item) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
            const ingredient = item[ingredientKey];
            const measure = item[measureKey];
        
            if (ingredient && ingredient.trim() !== '') {
                // If both ingredient and measure exist, add them to the ingredients array
                const ingredientString = measure ? `${ingredient} - ${measure}` : ingredient;
                ingredients.push(ingredientString);
            }
        }
        return ingredients;
    };

    return (
        <section className='flex justify-center items-center my-0 mx-auto py-20 sx:max-w-[100%] lg:max-w-[70%]'>
            <div className="">
                {loading && <Loader />}

                {error && <div className='text-white font-medium font-Open'>{`There is a problem fetching your data - ${error.message}`}</div>}

                <div className="px-4 md:px-8 lg:px-0">
                    {data && 
                        data.map((item) => (
                            <div className="flex flex-col gap-48">
                                <div className="flex justify-center gap-8 flex-col md:flex-row md:justify-start">
                                    <div className="md:w-2/5">
                                        <img src={item.strMealThumb} alt="" className="" loading='lazy' />
                                    </div>
                                    <div className="flex flex-row justify-between md:flex-col">
                                        <div className="flex flex-col gap-4 md:gap-6">  
                                            <h1 className='text-2xl sm:text-4xl font-Cormorant text-primaryColor font-semibold'>{item.strMeal}</h1>
                                            <p className='text-sm sm:text-base font-medium font-Open text-secondaryColor'>Category: {item.strCategory}</p>
                                            {item.strTags &&
                                                <div className="flex flex-wrap gap-4">
                                                    { item.strTags.split(',').map((tag, index) => (
                                                        <button key={index}
                                                        type="button"
                                                        className='text-sm sm:text-base px-6 py-1 font-Cormorant font-bold rounded-full border border-primaryColor bg-primaryColor text-bgColor w-fit'
                                                        >{tag}</button>
                                                    ))}
                                                </div>
                                            }
                                            {item.strYoutube &&
                                                <p className='font-medium font-Open text-primaryColor transition ease-linear duration-200 delay-100 hover:opacity-80'>
                                                    <a href={item.strYoutube}>Watch Tutorial</a>
                                                </p>
                                            }
                                        </div>
                                        <button 
                                            type="submit" 
                                            className='px-4 py-2 font-Cormorant font-bold border border-primaryColor bg-primaryColor text-bgColor w-fit md:w-full h-fit hover:border hover:border-primaryColor hover:bg-transparent hover:text-primaryColor transition ease-linear duration-200 delay-100'
                                        >
                                            Save Meal
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 font-Open">
                                    <h1 className="text-2xl sm:text-4xl font-semibold text-white ">INGREDIENTS</h1>
                                    <ul className="flex flex-col gap-2 text-base sm:text-lg font-medium text-secondaryColor">
                                        {extractIngredients(item).map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-6 font-Open">
                                    <h1 className="text-2xl sm:text-4xl font-semibold text-white ">INSTRUCTIONS</h1>
                                    <ul className="flex flex-col gap-2 text-base sm:text-lg font-medium text-secondaryColor">
                                        {item.strInstructions.split('.').map((ins, index) => {
                                            if(item !== "") return <li key={index} className="">{`${ins}`}.</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )) 
                    }
                </div>
            </div>
            
        </section>
    )
}

export default MealDetails

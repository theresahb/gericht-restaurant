import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Category from '../Category/Category';

const Meals = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mealNotFound, setMealNotFound] = useState(false);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP Error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        const categoryData = actualData.categories;
        setCategories(categoryData);
        console.log(categoryData);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setCategories([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query when a category is selected
  };

  useEffect(() => {
    let apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

    // Append search parameter if a search query exists
    if (searchQuery) {
      apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    }

    setLoading(true);
    setMealNotFound(false);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP Error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        const meals = actualData.meals;
        if (!meals) {
          setMealNotFound(true);
        } else {
          setData(meals);
          console.log(meals);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory, searchQuery]);

  return (
    <section className='flex flex-col justify-center items-center gap-14 px-4 sm:px-8 py-24'>
      <div className="flex flex-col justify-center items-center">
        {loading && <Loader />}

        {error && <div className='error'>{`There is a problem fetching your data - ${error.message}`}</div>}

        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
          {categories.map((cat) => (
            <div key={cat.idCategory} className="text-lg text-primaryColor ">
              <button
                type="submit"
                className={`btn ${cat.strCategory === selectedCategory ? 'border border-primaryColor bg-transparent text-primaryColor' : ''}`}
                onClick={() => handleCategoryClick(cat.strCategory)}
              >
                {cat.strCategory}
              </button>
            </div>
          ))}
        </div>

        {mealNotFound && 
          <div className='text-white font-medium font-Open mt-8'>
            Meal doesn't exist. Search for a different meal
          </div>
        }
      </div>

      {data && <Category data={data} />}
    </section>
  );
};

export default Meals;

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './detailScreen.css'

const DetailScreen = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then(res => {
        setRecipe(res.data)
      })
  }, [id])

  return (
    <section>
      <div style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: '500px',
      }}>
        <div className='ad-container'>
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>
      <div className='recipe-details'>
        <div className='recipe-info-and-ingredients'>
          <h2>Recipe</h2>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients?.map((el) => {
              return <p key={el.ingredient_id}>{el.ingredient + ' (' + el.quantity + ') '}</p>
            })}
          </ul>
        </div>
        <article>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </article>
      </div>
    </section>
  );
};

export default DetailScreen;

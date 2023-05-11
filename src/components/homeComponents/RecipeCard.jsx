import React from "react";
import './RecipeCard.css'
import { Link } from 'react-router-dom'

const RecipeCard = props => {
    const { recipe } = props

    return (
        <div className="recipe-card">
            <img src={recipe.image_url} style={{
                height: '350px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} alt={recipe.recipe_name} />
            <h3>{recipe.recipe_name}</h3>
            <Link to={`/recipe/${recipe.recipe_id}`}>
                <button className="blue-btn">See More</button>
            </Link>
        </div>
    )
}

export default RecipeCard
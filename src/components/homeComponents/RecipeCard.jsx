import React from "react";
import './RecipeCard.css'
import { useNavigate } from "react-router-dom";

const RecipeCard = props => {
    const { recipe } = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card">
            <img src={recipe.image_url} style={{
                height: '350px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} alt={recipe.recipe_name} />
            <h3>{recipe.recipe_name}</h3>
            <button className="blue-btn" onClick={() => { handleClick() }}>See More</button>
        </div>
    )
}

export default RecipeCard
import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import { ImSearch } from 'react-icons/im'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then(res => {
      setRecipes(res.data)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const recipeDisplay = recipes.filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
  }).map((recipe, index) => {
    return <RecipeCard recipe={recipe} key={recipe.recipe_id} />
  })

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <div className='recipe-main'>
        <span>
          <ImSearch color='#d3804a' size="2em" />
          <input placeholder='Search for a recipe' onChange={e => setSearch(e.target.value)}></input>
        </span>
        {recipeDisplay}
      </div>
    </div>
  )
}

export default HomeScreen
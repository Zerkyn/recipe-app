import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik'
import './NewRecipe.css'
import axios from 'axios'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const navigate = useNavigate()

  let initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    axios.post(`https://recipes.devmountain.com/recipes`, values)
      .then(res => {
        console.log(res.data)
      })
    navigate('/')
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName('')
    setQuantity('')
  }

  const showIngredients = ingredients.map(el => {
    return <li className="ingredient">{el.name} {el.quantity}</li>
  })

  return (
    <section className="add-recipe">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="name-image-inputs">
                <input
                  className="add-recipe-input"
                  placeholder="Name"
                  value={values.recipeName}
                  onChange={handleChange}
                  name='recipeName' />
                <input
                  className="add-recipe-input"
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name='imageURL' />
              </div>
              <div>
                <input
                  className="radios"
                  type="radio"
                  value='Cook'
                  onChange={handleChange}
                  name='type' />
                <span>Cook</span>
                <input
                  className="radios"
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name='type' />
                <span>Bake</span>
                <input
                  className="radios"
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name='type' />
                <span>Drink</span>
              </div>
              <div className="prep-cook-serves-inputs">
                <input
                  className="add-recipe-input"
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name='prepTime' />
                <input
                  className="add-recipe-input"
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name='cookTime' />
                <input
                  className="add-recipe-input"
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name='serves' />
              </div>
              <div className="add-ingredients">
                <div className="ingredient-inputs">
                  <input
                    className="add-recipe-input"
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                  <input
                    className="add-recipe-input"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}></input>
                </div>
                <ul>{showIngredients}</ul>
              </div>
              <button type='button' onClick={addIngredient} className="orange-btn">Add Another</button>
              <textarea
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
                name='instructions'></textarea>
              <button className="blue-btn">Save</button>
            </form>
          )
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

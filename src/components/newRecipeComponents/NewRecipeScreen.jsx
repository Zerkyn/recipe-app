import React, { useState } from "react";
import { Formik } from 'formik'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

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
    console.log(values)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName('')
    setQuantity('')
  }

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Name"
                  value={values.recipeName}
                  onChange={handleChange}
                  name='recipeName' />
                <input
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name='imageURL' />
              </div>
              <div>
                <input
                  type="radio"
                  placeholder="cook"
                  value={values.type}
                  onChange={handleChange}
                  name='cook' />
                <span>Cook</span>
                <input
                  type="radio"
                  value={values.type}
                  onChange={handleChange}
                  name='bake' />
                <span>Bake</span>
                <input
                  type="radio"
                  value={values.type}
                  onChange={handleChange}
                  name='drink' />
                <span>Drink</span>
              </div>
              <div>
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name='prepTime' />
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name='cookTime' />
                <input
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name='serves' />
              </div>
              <div>
                <div>
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}></input>
                </div>
                <ul></ul>
              </div>
              <button type='button' onClick={addIngredient} className="orange-btn">Add Another</button>
              <textarea></textarea>
              <button className="blue-btn">Save</button>
            </form>
          )
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRecipe } from '../services/RecipesAPI'
import '../App.css'

const emptyFoodItem = { foodName: '', foodQuantity: '' }

const CreateRecipe = () => {
    const navigate = useNavigate()
    const [mealName, setMealName] = useState('')
    const [foodsList, setFoodsList] = useState([{ ...emptyFoodItem }])
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [servings, setServings] = useState('')
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    const handleFoodChange = (index, field, value) => {
        setFoodsList((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        )
    }

    const addFoodRow = () => {
        setFoodsList((prev) => [...prev, { ...emptyFoodItem }])
    }

    const removeFoodRow = (index) => {
        setFoodsList((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (!mealName.trim()) {
            setError('Meal name is required.')
            return
        }

        const cleanedFoodsList = foodsList
            .filter((item) => item.foodName.trim() !== '')
            .map((item) => ({
                foodName: item.foodName.trim(),
                foodQuantity: Number(item.foodQuantity) || 0
            }))

        const recipeData = {
            mealName: mealName.trim(),
            foodsList: cleanedFoodsList,
            prepTime: Number(prepTime) || 0,
            cookTime: Number(cookTime) || 0,
            servings: Number(servings) || 0,
            DateAdded: new Date().toISOString(),
            DateUpdated: new Date().toISOString()
        }

        try {
            setSubmitting(true)
            const created = await createRecipe(recipeData)
            navigate(created?.id ? `/recipes/${created.id}` : '/')
        } catch (err) {
            setError('Failed to create recipe.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="app">
            <h1>Create a New Recipe</h1>
            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Meal Name
                    <input
                        type="text"
                        value={mealName}
                        onChange={(e) => setMealName(e.target.value)}
                    />
                </label>

                <h3>Ingredients</h3>
                {foodsList.map((item, index) => (
                    <div key={index} className="food-row">
                        <input
                            type="text"
                            placeholder="Food name"
                            value={item.foodName}
                            onChange={(e) => handleFoodChange(index, 'foodName', e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Quantity (g)"
                            value={item.foodQuantity}
                            onChange={(e) => handleFoodChange(index, 'foodQuantity', e.target.value)}
                        />
                        <button type="button" onClick={() => removeFoodRow(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addFoodRow}>+ Add Ingredient</button>

                <label>
                    Prep Time (min)
                    <input
                        type="number"
                        value={prepTime}
                        onChange={(e) => setPrepTime(e.target.value)}
                    />
                </label>

                <label>
                    Cook Time (min)
                    <input
                        type="number"
                        value={cookTime}
                        onChange={(e) => setCookTime(e.target.value)}
                    />
                </label>

                <label>
                    Servings
                    <input
                        type="number"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                    />
                </label>

                <button type="submit" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Create Recipe'}
                </button>
            </form>
        </div>
    )
}

export default CreateRecipe
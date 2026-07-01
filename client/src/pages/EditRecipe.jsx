import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getRecipe, updateRecipe } from '../services/RecipesAPI'
import '../App.css'
import parseFoodsList from '../utils/parseFood'


const EditRecipe = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [mealName, setMealName] = useState('')
    const [foodsList, setFoodsList] = useState([])
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [servings, setServings] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        fetchRecipe()
    }, [id])

    const fetchRecipe = async () => {
        try {
            setLoading(true)
            const data = await getRecipe(id)
            setMealName(data.mealname || '')
            setFoodsList(parseFoodsList(data.foodslist))
            setPrepTime(data.preptime ?? '')
            setCookTime(data.cooktime ?? '')
            setServings(data.servings ?? '')
        } catch (err) {
            setError('Failed to load recipe.')
        } finally {
            setLoading(false)
        }
    }

    const handleFoodChange = (index, field, value) => {
        setFoodsList((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        )
    }

    const addFoodRow = () => {
        setFoodsList((prev) => [...prev, { foodName: '', foodQuantity: '' }])
    }

    const removeFoodRow = (index) => {
        setFoodsList((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

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
            DateUpdated: new Date().toISOString()
        }

        try {
            setSubmitting(true)
            await updateRecipe(id, recipeData)
            navigate(`/recipes/${id}`)
        } catch (err) {
            setError('Failed to update recipe.')
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) return <div className="app"><p>Loading...</p></div>

    return (
        <div className="app">
            <Link to={`/recipes/${id}`}>&larr; Back to recipe</Link>
            <h1>Edit Recipe</h1>
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
                    {submitting ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    )
}

export default EditRecipe
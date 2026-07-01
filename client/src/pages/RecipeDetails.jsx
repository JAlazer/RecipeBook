import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getRecipe, deleteRecipe } from '../services/RecipesAPI'
import '../App.css'
import parseFoodsList from '../utils/parseFood'

const RecipeDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRecipe()
    }, [id])

    const fetchRecipe = async () => {
        try {
            setLoading(true)
            const data = await getRecipe(id)
            setRecipe(data)
        } catch (err) {
            setError('Failed to load recipe.')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        try {
            await deleteRecipe(id)
            navigate('/')
        } catch (err) {
            setError('Failed to delete recipe.')
        }
    }

    if (loading) return <div className="app"><p>Loading...</p></div>
    if (error) return <div className="app"><p>{error}</p></div>
    if (!recipe) return <div className="app"><p>Recipe not found.</p></div>

    const foodsList = parseFoodsList(recipe.foodslist)

    return (
        <div className="app">
            <Link to="/recipes">&larr; Back to all recipes</Link>
            <h1>{recipe.mealname}</h1>
            <p>Servings: {recipe.servings}</p>
            <p>Prep Time: {recipe.preptime} min</p>
            <p>Cook Time: {recipe.cooktime} min</p>

            <h3>Ingredients</h3>
            <ul>
                {foodsList.map((item, index) => (
                    <li key={index}>{item.foodName} &mdash; {item.foodQuantity}g</li>
                ))}
            </ul>

            <div className="recipe-detail-actions">
                <Link to={`/edit/${recipe.id}`}>Edit</Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default RecipeDetails
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllRecipes, deleteRecipe } from '../services/RecipesAPI'
import '../App.css'

const ViewRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRecipes()
    }, [])

    const fetchRecipes = async () => {
        try {
            setLoading(true)
            const data = await getAllRecipes()
            setRecipes(data)
        } catch (err) {
            setError('Failed to load recipes.')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteRecipe(id)
            setRecipes((prev) => prev.filter((recipe) => recipe.id !== id))
        } catch (err) {
            setError('Failed to delete recipe.')
        }
    }

    if (loading) return <div className="app"><p>Loading recipes...</p></div>
    if (error) return <div className="app"><p>{error}</p></div>

    return (
        <div className="app">
            <h1>All Recipes</h1>
            <Link to="/">+ Add Recipe</Link>

            <ul className="recipe-list">
                {recipes.map((recipe) => (
                    <li key={recipe.id} className="recipe-card">
                        <Link to={`/recipes/${recipe.id}`}>
                            <h2>{recipe.mealname}</h2>
                        </Link>
                        <p>Servings: {recipe.servings}</p>
                        <p>Prep: {recipe.preptime} min | Cook: {recipe.cooktime} min</p>
                        <div className="recipe-card-actions">
                            <Link to={`/edit/${recipe.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewRecipes
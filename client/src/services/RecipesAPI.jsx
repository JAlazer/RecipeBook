const URL = '/api';

export async function getAllRecipes() {
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('getAllRecipes error:', error)
        throw error
    }
}

export async function getRecipe(id) {
    try {
        const response = await fetch(`${URL}/${id}`)
        if (!response.ok) {
            throw new Error(`Failed to fetch recipe ${id}: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('getRecipe error:', error)
        throw error
    }
}

export async function createRecipe(recipeData) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipeData)
        })
        if (!response.ok) {
            throw new Error(`Failed to create recipe: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('createRecipe error:', error)
        throw error
    }
}

export async function updateRecipe(id, recipeData) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipeData)
        })
        if (!response.ok) {
            throw new Error(`Failed to update recipe ${id}: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('updateRecipe error:', error)
        throw error
    }
}

export async function deleteRecipe(id) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error(`Failed to delete recipe ${id}: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('deleteRecipe error:', error)
        throw error
    }
}
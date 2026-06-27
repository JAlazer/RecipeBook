import express from 'express'
import { createRecipe, deleteRecipe, getRecipeById, getRecipes, updateRecipe } from '../controllers/recipes'

const router = express.Router()

router.get('/', getRecipes);

router.get('/:id', getRecipeById);

router.post('/', createRecipe);

router.delete('/:id', deleteRecipe);

router.patch('/:id', updateRecipe);

export default router;
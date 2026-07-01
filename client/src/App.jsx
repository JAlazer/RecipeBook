import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'
import CreateRecipe from './pages/CreateRecipe'
import ViewRecipes from './pages/ViewRecipes'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './pages/EditRecipe'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateRecipe title='RECIPE BOOK' />
    },
    {
      path:'/recipes',
      element: <ViewRecipes title='RECIPE BOOK' />
    },
    {
      path: '/recipes/:id',
      element: <RecipeDetails title='RECIPE BOOK' />
    },
    {
      path: '/edit/:id',
      element: <EditRecipe title='RECIPE BOOK' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App
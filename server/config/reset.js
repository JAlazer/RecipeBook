import { recipes } from "../data/recipes";
import { pool } from "./database";

async function createRecipeTable() {
    const createRecipeQuery = `
        DROP TABLE IF EXISTS recipes

        CREATE TYPE fooditem AS (
            foodname TEXT NOT NULL
            foodquantity TEXT NOT NULL
        )

        CREATE TABLE IF NOT EXISTS recipes (
            id SERIAL PRIMARY KEY
            mealname TEXT NOT NULL
            foodsList fooditem[] NOT NULL
            preptime INTEGER NOT NULL
            cooktime INTEGER NOT NULL
            servings INTEGER NOT NULL
            dateadded DATE NOT NULL
            dateupdated DATE NOT NULL
        )
    `

    try {
        const result = await pool.query(createRecipeQuery);
        console.log('Recipe table successfully created!');
    } catch (err) {
        console.error('Something went wrong with creating the recipes table!', err);
    }
}

async function seedRecipeTable() {
    await createRecipeTable()

    recipes.forEach((recipe) => {
        const values = [
            recipe.id,
            recipe.mealName,
            recipe.foodsList,
            recipe.prepTime,
            recipe.cookTime,
            recipe.servings,
            recipe.DateAdded,
            recipe.DateUpdated
        ]
        
        const insertionQuery = {
            text: 'INSERT INTO recipes (id, mealname, foodslist, preptime, cooktime, servings, dateadded, dateupdated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }
        const result = await pool.query(insertionQuery, values, (error, result) => {
            if (error) {
                console.error(`Something went wrong with seeding ${recipe.mealName}!`, error)
                return ;
            }

            console.log(`${recipe.mealName} has been inserted!`)
        })
    })
}

seedRecipeTable()
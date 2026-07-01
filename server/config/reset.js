import { recipes } from "../data/recipes.js";
import { pool } from "./database.js";
import './dotenv.js';

async function createRecipeTable() {
    const createRecipeQuery = `
    DROP TABLE IF EXISTS recipes;

    DROP TYPE IF EXISTS fooditem;

    CREATE TYPE fooditem AS (
        foodname TEXT,
        foodquantity TEXT
    );

    CREATE TABLE IF NOT EXISTS recipes (
        id SERIAL PRIMARY KEY,
        mealname TEXT NOT NULL,
        foodsList fooditem[] NOT NULL,
        preptime INTEGER NOT NULL,
        cooktime INTEGER NOT NULL,
        servings INTEGER NOT NULL,
        dateadded DATE NOT NULL,
        dateupdated DATE NOT NULL
    );
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
        const foodsListLiteral = `{${recipe.foodsList
            .map((f) => `"(${f.foodName},${f.foodQuantity})"`)
            .join(',')}}`;

        const insertQuery = {
            text: `INSERT INTO recipes (id, mealname, foodslist, preptime, cooktime, servings, dateadded, dateupdated)
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
        }

        const values = [
            recipe.id,
            recipe.mealName,
            foodsListLiteral,
            recipe.prepTime,
            recipe.cookTime,
            recipe.servings,
            recipe.DateAdded,
            recipe.DateUpdated
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error(`Could not seed ${recipe.mealName}`, err)
                return
            }
            console.log(`${recipe.mealName} has been inserted!`)
        })
    })
}

seedRecipeTable()
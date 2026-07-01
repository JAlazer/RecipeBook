import { pool } from "../config/database.js";

export async function getRecipes(req, res) {
    try{
        const selectionQuery = `
            SELECT * FROM recipes ORDER BY mealname ASC;
        `

        const result = await pool.query(selectionQuery); 
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}

export async function getRecipeById(req, res) {
    try {
        const id = parseInt(req.params.id);

        const selectionById = `
            SELECT * FROM recipes WHERE id=${id} 
        `

        const result = await pool.query(selectionById)

        console.log(`Got recipe: ${result.rows[0].mealname}`)
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export async function createRecipe(req, res) {
    try {

        const data = req.body;

        const insertQuery = `
            INSERT INTO recipes (mealname, foodslist, preptime, cooktime, servings, dateadded, dateupdated) VALUES (
            ${data.mealName},
            ${data.foodsList},
            ${data.prepTime},
            ${data.cookTime},
            ${data.servings},
            ${data.DateAdded},
            ${data.DateUpdated}
            )
        `    

        const result = await pool.query(insertQuery, (error, result) => {
            if (error) {
                console.error(`Something went wrong with inserting ${data.mealName}!`, error)
                return ;
            }

            console.log(`${data.mealName} has been inserted!`)
        })
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}

export async function updateRecipe(req, res) {
    try {
        const data = req.body;
        const id = parseInt(req.params.id);

        const updateQuery = `
            UPDATE recipes
            SET mealname = ${data.mealName}, foodslist = ${data.foodsList}, preptime = ${data.prepTime}, cooktime = ${data.cookTime}, servings = ${data.servings}, dateadded = ${data.DateAdded}, dateupdate = ${data.DateUpdated} WHERE id = ${id}
        `;

        const result = await pool.query(updateQuery);

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}

export async function deleteRecipe(req, res) {
    try {
        const id = parseInt(req.params.id);
        const results = await pool.query(`DELETE FROM recipes WHERE id = ${id}`);

        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}
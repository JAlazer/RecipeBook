/**
 * A foodItem is an object that contains the name of the food and the quantity of food in grams
 */
class FoodItem {
    foodName;
    foodQuantity;

    constructor(foodName, foodQuantity) {
        this.foodName = foodName;
        this.foodQuantity = foodQuantity;
    }
}


/**
 * A recipe item contains the following:
 * - id -> number
 * - mealName -> string
 * - foodsList -> List of FoodItems
 * - prepTime (in minutes) -> number
 * - cookTime (in minutes) -> number
 * - servings -> number
 * - DateAdded -> Date
 * - DateUpdated -> Date
 */
export const recipes = [
    {
        id: 1,
        mealName: "Scrambled Eggs & Toast",
        foodsList: [
            new FoodItem("Eggs", 100),
            new FoodItem("Whole Wheat Bread", 70),
            new FoodItem("Butter", 10)
        ],
        prepTime: 5,
        cookTime: 8,
        servings: 2,
        DateAdded: new Date("2025-01-05"),
        DateUpdated: new Date("2025-02-14")
    },

    {
        id: 2,
        mealName: "Chicken Caesar Salad",
        foodsList: [
            new FoodItem("Chicken Breast", 200),
            new FoodItem("Romaine Lettuce", 150),
            new FoodItem("Parmesan Cheese", 25),
            new FoodItem("Croutons", 40),
            new FoodItem("Caesar Dressing", 35)
        ],
        prepTime: 15,
        cookTime: 12,
        servings: 2,
        DateAdded: new Date("2025-01-18"),
        DateUpdated: new Date("2025-03-01")
    },

    {
        id: 3,
        mealName: "Spaghetti Bolognese",
        foodsList: [
            new FoodItem("Spaghetti", 250),
            new FoodItem("Ground Beef", 300),
            new FoodItem("Tomato Sauce", 250),
            new FoodItem("Onion", 80),
            new FoodItem("Garlic", 10)
        ],
        prepTime: 20,
        cookTime: 35,
        servings: 4,
        DateAdded: new Date("2025-02-02"),
        DateUpdated: new Date("2025-02-15")
    },

    {
        id: 4,
        mealName: "Grilled Salmon with Rice",
        foodsList: [
            new FoodItem("Salmon Fillet", 300),
            new FoodItem("White Rice", 200),
            new FoodItem("Broccoli", 150),
            new FoodItem("Olive Oil", 15)
        ],
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        DateAdded: new Date("2025-02-20"),
        DateUpdated: new Date("2025-04-01")
    },

    {
        id: 5,
        mealName: "Vegetable Stir Fry",
        foodsList: [
            new FoodItem("Broccoli", 120),
            new FoodItem("Bell Pepper", 100),
            new FoodItem("Carrots", 80),
            new FoodItem("Soy Sauce", 20),
            new FoodItem("Rice", 180)
        ],
        prepTime: 15,
        cookTime: 12,
        servings: 3,
        DateAdded: new Date("2025-03-05"),
        DateUpdated: new Date("2025-03-12")
    },

    {
        id: 6,
        mealName: "Turkey Sandwich",
        foodsList: [
            new FoodItem("Whole Wheat Bread", 80),
            new FoodItem("Turkey", 120),
            new FoodItem("Lettuce", 20),
            new FoodItem("Tomato", 40),
            new FoodItem("Cheddar Cheese", 30)
        ],
        prepTime: 8,
        cookTime: 0,
        servings: 1,
        DateAdded: new Date("2025-03-14"),
        DateUpdated: new Date("2025-03-14")
    },

    {
        id: 7,
        mealName: "Beef Tacos",
        foodsList: [
            new FoodItem("Ground Beef", 250),
            new FoodItem("Taco Shells", 90),
            new FoodItem("Lettuce", 50),
            new FoodItem("Cheddar Cheese", 50),
            new FoodItem("Salsa", 40)
        ],
        prepTime: 15,
        cookTime: 15,
        servings: 3,
        DateAdded: new Date("2025-04-01"),
        DateUpdated: new Date("2025-04-02")
    },

    {
        id: 8,
        mealName: "Pancakes",
        foodsList: [
            new FoodItem("Flour", 200),
            new FoodItem("Milk", 250),
            new FoodItem("Egg", 50),
            new FoodItem("Maple Syrup", 40),
            new FoodItem("Butter", 15)
        ],
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        DateAdded: new Date("2025-04-10"),
        DateUpdated: new Date("2025-04-10")
    },

    {
        id: 9,
        mealName: "Greek Yogurt Parfait",
        foodsList: [
            new FoodItem("Greek Yogurt", 200),
            new FoodItem("Granola", 50),
            new FoodItem("Blueberries", 60),
            new FoodItem("Honey", 15)
        ],
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        DateAdded: new Date("2025-04-18"),
        DateUpdated: new Date("2025-04-18")
    },

    {
        id: 10,
        mealName: "Chicken Fried Rice",
        foodsList: [
            new FoodItem("Cooked Rice", 250),
            new FoodItem("Chicken Breast", 180),
            new FoodItem("Egg", 50),
            new FoodItem("Peas", 50),
            new FoodItem("Soy Sauce", 20)
        ],
        prepTime: 15,
        cookTime: 15,
        servings: 3,
        DateAdded: new Date("2025-05-01"),
        DateUpdated: new Date("2025-05-08")
    },

    {
        id: 11,
        mealName: "Chocolate Chip Cookies",
        foodsList: [
            new FoodItem("Flour", 250),
            new FoodItem("Butter", 150),
            new FoodItem("Sugar", 120),
            new FoodItem("Chocolate Chips", 180),
            new FoodItem("Egg", 50)
        ],
        prepTime: 20,
        cookTime: 12,
        servings: 18,
        DateAdded: new Date("2025-05-12"),
        DateUpdated: new Date("2025-05-12")
    },

    {
        id: 12,
        mealName: "Margherita Pizza",
        foodsList: [
            new FoodItem("Pizza Dough", 300),
            new FoodItem("Tomato Sauce", 120),
            new FoodItem("Mozzarella", 180),
            new FoodItem("Basil", 10),
            new FoodItem("Olive Oil", 10)
        ],
        prepTime: 25,
        cookTime: 18,
        servings: 4,
        DateAdded: new Date("2025-06-01"),
        DateUpdated: new Date("2025-06-03")
    },

    {
        id: 13,
        mealName: "Oatmeal with Banana",
        foodsList: [
            new FoodItem("Rolled Oats", 80),
            new FoodItem("Milk", 250),
            new FoodItem("Banana", 120),
            new FoodItem("Honey", 15)
        ],
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        DateAdded: new Date("2025-06-05"),
        DateUpdated: new Date("2025-06-05")
    },

    {
        id: 14,
        mealName: "Shrimp Pasta",
        foodsList: [
            new FoodItem("Pasta", 220),
            new FoodItem("Shrimp", 250),
            new FoodItem("Garlic", 15),
            new FoodItem("Butter", 20),
            new FoodItem("Parmesan Cheese", 40)
        ],
        prepTime: 15,
        cookTime: 20,
        servings: 3,
        DateAdded: new Date("2025-06-12"),
        DateUpdated: new Date("2025-06-13")
    },

    {
        id: 15,
        mealName: "Fruit Smoothie",
        foodsList: [
            new FoodItem("Banana", 120),
            new FoodItem("Strawberries", 100),
            new FoodItem("Greek Yogurt", 150),
            new FoodItem("Milk", 200)
        ],
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        DateAdded: new Date("2025-06-20"),
        DateUpdated: new Date("2025-06-20")
    }
];

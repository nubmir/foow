const { category } = require("../db");
const { findFood } = require("../models/foodModels");
const prisma = require("../db");

const foodSearch = async(req, res) => {
    try {
        const query = req.query.query || "";
        if (!query) {
            return res.status(400).json({ message: "query is empty" });
        }
        const food = await findFood(query);
        res.status(200).json({
            data: food.map((i) => {
                return {
                    id: i.id,
                    name: i.name,
                    image: i.image,
                    category: i.category.name,
                };
            }),
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getFoodById = async(req, res) => {
    const { id } = req.params; // Get food_id from request params

    try {
        const food = await prisma.food.findUnique({
            where: {
                id: parseInt(id), // Convert id to integer
            },
            include: {
                category: true,
                method: true,
                ingredients: true,
            },
        });

        if (food) {
            res.json(food); // Send food details as JSON response
        } else {
            res.status(404).json({ message: 'Data not found' });
        }
    } catch (error) {
        console.error('Error fetching food details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getRandomFoods = async(req, res) => {
    const { limit } = req.query;

    try {
        // If limit parameter is not provided or invalid, default to 5
        const limitValue = parseInt(limit, 10) || 5;

        // Execute raw SQL query to fetch random foods with specified limit
        const foods = await prisma.$queryRaw `SELECT * FROM foods ORDER BY RANDOM() LIMIT ${limitValue}`;

        res.json(foods);
    } catch (error) {
        console.error('Error fetching random foods:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { foodSearch, getFoodById, getRandomFoods };
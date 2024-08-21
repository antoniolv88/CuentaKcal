const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Obtener todos los alimentos
router.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar un nuevo alimento
router.post('/foods', async (req, res) => {
  const food = new Food({
    name: req.body.name,
    calories: req.body.calories,
    protein: req.body.protein,
    carbohydrates: req.body.carbohydrates,
    fats: req.body.fats
  });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

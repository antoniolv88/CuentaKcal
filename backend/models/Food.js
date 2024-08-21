const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, default: 0 },
  carbohydrates: { type: Number, default: 0 },
  fats: { type: Number, default: 0 }
});

module.exports = mongoose.model('Food', FoodSchema);

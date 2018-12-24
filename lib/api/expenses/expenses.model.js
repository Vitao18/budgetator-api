import { Schema, model } from 'mongoose';

const Expenses = new Schema({
  title: String,
  value: Number,
});

const descExpenses = model('Expenses', Expenses);

export default descExpenses;

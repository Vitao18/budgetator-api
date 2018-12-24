<<<<<<< HEAD
import { descExpenses } from "./expenses.model";
=======
import descExpenses from "./expenses.model";

export const getExpenses = async () => descExpenses.find({});
>>>>>>> ecfda91469edaa7c8b9f066bef210b5f7777eb60

export const getExpenses = async () => {
  const allExpenses = await descExpenses.find({});
  return res.status(200).json({ allExpenses });
};

export const insertExpenses = async () => {
  const { title, value } = req.body;
  const createdExpense = await descExpenses.create({
    title,
    value
  });
  return res.status(200).json({ createdExpense });
};

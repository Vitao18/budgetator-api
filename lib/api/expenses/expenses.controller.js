import { descExpenses } from "./expenses.model";

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

export const changeExpenses = async () => {
  const { title, value } = req.body;

  const modifiedExpense = await descExpenses.findByIdAndUpdate(
    id,
    { $set: { title, value } },
    { new: true }
  );
  return res.status(200).json({ modifiedExpense });
};

export const deleteExpenses = async () => {
  const { id } = req.body;

  const deletedExpense = await descExpenses.deleteOne(id);
  return res.status(200).json({ deletedExpense });
};

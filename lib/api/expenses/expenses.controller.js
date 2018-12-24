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

export const changingExpenses = async () => {
  const { title, value } = req.body;

  descExpenses.findByIdAndUpdate(
    id,
    { $set: { title, value } },
    { new: true },
    (err, modifiedExpense) => {
      if (err) return handleError(err);
      return res.status(200).json({ modifiedExpense });
    }
  );
};

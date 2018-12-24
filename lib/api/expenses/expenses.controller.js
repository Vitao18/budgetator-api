import descExpenses from './expenses.model';

export const getExpenses = async () => descExpenses.find({});

export const insertExpenses = async () =>
  descExpenses.create({
    title: '',
    value: '',
  });

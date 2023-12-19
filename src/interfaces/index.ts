interface IExpense {
  id: string;
  name?: string;
  cost?: number;
}

interface IAction {
  type: string;
  payload: IExpense;
}

interface IState {
  budget: number;
  expenses: IExpense[];
  dispatch?: (value: IAction) => void;
}

export type { IExpense, IAction, IState };

import { ReactNode, createContext, useReducer } from "react";
import { IAction, IState } from "../interfaces";

const AppReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const initialState: IState = {
  budget: 2000,
  expenses: [],
};

const AppContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

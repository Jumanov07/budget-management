import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { IExpense } from "../interfaces";

const ExpenseItem = ({ name, id, cost }: IExpense) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    if (dispatch) {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: { id },
      });
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="priceExpense">${cost}</span>

        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;

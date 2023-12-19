import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IExpense } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense: IExpense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    if (dispatch && name.trim().length && cost.trim().length) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    } else {
      alert("Сomplete all fields!");
    }

    setCost("");
    setName("");
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleCost = (e: ChangeEvent<HTMLInputElement>) =>
    setCost(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={handleName}
          />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            required
            className="form-control"
            id="cost"
            value={cost}
            onChange={handleCost}
          />
        </div>

        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;

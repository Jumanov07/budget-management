import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    if (name.trim().length && cost.trim().length) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
    setCost("");
    setName("");
  };
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            required="required"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary" onClick={onClick}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;

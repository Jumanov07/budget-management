import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((el) => {
    if (searchTerm.trim() === "") {
      return true;
    } else {
      return el.name?.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <>
      <input
        className="inputSearch"
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleSearchTerm}
      />

      <ul className="list-group">
        {filteredExpenses.map((item, i) => (
          <ExpenseItem key={i} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;

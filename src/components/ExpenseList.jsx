import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        className="InputSearch"
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {expenses
        .filter((el) => {
          if (searchTerm === "") {
            return el.name;
          } else if (el.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return el.name;
          }
        })
        .map((item, i) => (
          <ul className="list-group" key={i}>
            <ExpenseItem {...item} />
          </ul>
        ))}
    </>
  );
};

export default ExpenseList;

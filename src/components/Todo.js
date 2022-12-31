import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import TodoItems from "./Todoitems";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setloading] = useState(false);
  const [complete, setComplete] = useState(true);
  const [inComplete, setInComplete] = useState(true);

  async function fetchData() {
    setloading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/todos ");
    let res = await data.json();
    res = res.splice(0, 20);
    setTodo(res);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const compCheck = (type, e) => {
    if (type === "Complete") {
      setComplete(e.target.checked);
    } else if (type === "incomplete") {
      setInComplete(e.target.checked);
    }
  };

  useEffect(() => {
    if (complete && inComplete) {
      setFilterData(todo);
    }
    if (complete && !inComplete) {
      setFilterData(todo.filter((data) => data.completed));
    }
    if (inComplete && !complete) {
      setFilterData(todo.filter((data) => !data.completed));
    }
    if (!complete && !inComplete) {
      setFilterData([]);
    }
  }, [inComplete, complete, todo]);

  return (
    <>
      {loading && (
        <h1>
          <Loader />
        </h1>
      )}
      {!loading && (
        <>
          <TodoItems todo={filterData} loading={loading} />

          <div id="filter-holder">
            <label>Show Completed</label>
            <input
              id="completed-checkbox"
              type="checkbox"
              onChange={(e) => {
                compCheck("complete", e);
              }}
              checked={complete}
            />
            <br />

            <label>Show Incompleted</label>
            <input
              id="incompleted-checkbox"
              type="checkbox"
              onChange={(e) => {
                compCheck("incomplete", e);
              }}
              checked={inComplete}
            />
          </div>
        </>
      )}
    </>
  );
};

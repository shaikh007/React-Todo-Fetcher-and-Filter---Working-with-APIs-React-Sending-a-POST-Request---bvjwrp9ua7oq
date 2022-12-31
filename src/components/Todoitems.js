import React from "react";
export default function TodoItems(props) {
  const { todo } = props;
  return (
    <ol>
      {todo.map((data) => {
        return (
          <li key={data.id}>
            <div id={"todo-" + data.id} className="todo todo-text">
              <div className="todo-title">{data.title} </div>
              <div className="todo-status">
                {data.completed ? "complete" : "Incomplete"}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

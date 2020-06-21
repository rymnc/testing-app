import React, { useContext } from "react";
import { AppContext } from "../Context-Provider";

const ToDos = () => {
  const { data } = useContext(AppContext);
  console.log("todos", data);

  return (
    <div className="container justify-content-center text-center p-2 mt-2">
      <div className="card border-info">
        <h5 className="card-header">TO Do's</h5>
        {data &&
          data.map((el) => {
            return (
              <li
                className="entry-item mt-2 list-group-item list-group-item-action list-group-item-info"
                key={el.id}
              >
                {el.todo}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default ToDos;

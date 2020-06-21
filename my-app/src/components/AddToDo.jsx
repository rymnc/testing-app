import React, { useContext, useState } from "react";
import { AppContext } from "../Context-Provider";
import Axios from "axios";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handleUpdate } = useContext(AppContext);
  //   console.log(data)

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(`http://127.0.0.1:3000/add/${todo}`);
    handleUpdate();
    setTodo("");
  };

  return (
    <div className="container justify-content-center text-center p-2">
      <div className="card border-dark">
        <h5 className="card-header">Add ToDo</h5>
        <div className="card-body">
          <input
            type="text"
            name=""
            id=""
            placeholder="TO DO"
            className="form-control m-2"
            value={todo}
            onChange={handleChange}
          />
          <button className="btn btn-primary m-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;

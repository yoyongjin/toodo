import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../modules/todoSlice";

const InputForm = () => {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  const onInputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(todoInput);
    dispatch(todoActions.addTodo(todoInput));
    console.log(todoList);
    setTodoInput("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={onInputHandler}
        value={todoInput}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default InputForm;

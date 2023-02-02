import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../modules/todoSlice";

const ItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  background-color: #ccc;
  width: 215px;
`;

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const onDelTodoHandler = () => {
    console.log("asdf");
    dispatch(todoActions.delTodo(props.id));
  };
  return (
    <ItemContainer>
      <p>{props.whatTodo}</p>
      <button onClick={onDelTodoHandler}>X</button>
    </ItemContainer>
  );
};

export default TodoItem;

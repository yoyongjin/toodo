import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin-top: 5px;
`;

const TodoList = () => {
  return (
    <ListContainer>
      <TodoItem todo="todo1" />
      <TodoItem todo="todo2" />
    </ListContainer>
  );
};

export default TodoList;

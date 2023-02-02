import React from "react";
import { useSelector } from "react-redux";
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
  const todoList = useSelector((state) => state.todo);

  console.log(todoList);

  return (
    <ListContainer>
      {/* <TodoItem todo={todoList[0].whatTodo} />
      <TodoItem todo={todoList[1].whatTodo} /> */}
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            whatTodo={todo.whatTodo}
          />
        );
      })}
    </ListContainer>
  );
};

export default TodoList;

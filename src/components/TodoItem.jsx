import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  background-color: #ccc;
  width: 215px;
`;

const TodoItem = (props) => {
  return (
    <ItemContainer>
      <p>{props.todo}</p>
      <button>X</button>
    </ItemContainer>
  );
};

export default TodoItem;

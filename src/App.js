import styled from "styled-components";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const AppConatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  align-items: center;
`;

function App() {
  return (
    <AppConatiner>
      <InputForm />
      <TodoList />
    </AppConatiner>
  );
}

export default App;

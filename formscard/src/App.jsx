import "./App.css";
import styled from "styled-components";
import { FormCard } from "./components/FormCard";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    
    <AppContainer>
      <FormCard />
      <FormCard />
      <FormCard />
      <FormCard />
    </AppContainer>
    
    
  );
  
}

export default App;

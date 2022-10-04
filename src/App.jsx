import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import GlobalStyle from "./styles/reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

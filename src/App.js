import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route path='/' element={<HomePage path={pathname} />}></Route>
    </Routes>
  );
}

export default App;

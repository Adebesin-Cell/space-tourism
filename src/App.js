import { Routes, Route, useLocation } from "react-router-dom";
import CrewPage from "./pages/crew";
import DestinationPage from "./pages/destination";
import HomePage from "./pages/home";
import TechnologyPage from "./pages/technology";

function App() {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route path='/' element={<HomePage path={pathname} />}></Route>
      <Route
        path='/destination'
        element={<DestinationPage path={pathname} />}
      ></Route>
      <Route path='/crew' element={<CrewPage path={pathname} />}></Route>
      <Route
        path='/technology'
        element={<TechnologyPage path={pathname} />}
      ></Route>
    </Routes>
  );
}

export default App;

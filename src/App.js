import { useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CrewPage from "./pages/crew";
import DestinationPage from "./pages/destination";
import HomePage from "./pages/home";
import TechnologyPage from "./pages/technology";

function App() {
  const [data, setData] = useState({});

  const fetchData = useCallback(async function () {
    const response = await fetch("./data/data.json");

    const fetchedData = await response.json();

    console.log(fetchedData);

    setData(fetchedData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { pathname } = useLocation();

  return (
    <Routes>
      <Route path='/' element={<HomePage path={pathname} />}></Route>
      <Route
        path='/destination'
        element={<DestinationPage data={data.destinations} path={pathname} />}
      >
        <Route
          path='/destination/mars'
          element={
            <DestinationPage
              data={data.destinations}
              path={pathname}
            ></DestinationPage>
          }
        ></Route>
      </Route>
      <Route
        path='/crew'
        element={<CrewPage data={data.crew} path={pathname} />}
      ></Route>
      <Route
        path='/technology'
        element={<TechnologyPage data={data.technology} path={pathname} />}
      ></Route>
    </Routes>
  );
}

export default App;

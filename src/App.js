import { Route, Routes } from 'react-router-dom';
import NavBer from './component/NavBer';
import { publicRoute } from "./routes/PublicRoute"
function App() {
  return (
    <div>
      <NavBer>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={<Component />}
              ></Route>
            ))
          }
        </Routes>
      </NavBer>
    </div>
  );
}

export default App;

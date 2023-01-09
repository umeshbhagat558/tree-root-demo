import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import BasePage from "./basePage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Dashboard>
              <BasePage />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;

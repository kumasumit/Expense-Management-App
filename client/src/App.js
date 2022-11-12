import { Routes, Route } from "react-router-dom";
import ProtectedComponent from "./components/ProtectedComponent";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <HomePage />
            </ProtectedComponent>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

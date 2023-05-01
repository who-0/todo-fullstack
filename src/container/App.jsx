import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";
import Protected from "../routes/Protected.router";
import Profile from "../components/profile/Profile.component";
import Signup from "../components/signup/Signup.component";
import Home from "./Home.container";
import Login from "../components/login/Login.component";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected user={user}>
              <Home />
            </Protected>
          }
        />
        <Route
          path="profile"
          element={
            <Protected user={user}>
              <Profile />
            </Protected>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

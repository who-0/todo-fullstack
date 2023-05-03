import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";
import Context from "../Hooks/Context";
import Protected from "../routes/Protected.router";
import Profile from "../components/profile/Profile.component";
import Signup from "../components/signup/Signup.component";
import Home from "./Home.container";
import Login from "../components/login/Login.component";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("user", user);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        setLoading,
        loading,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;

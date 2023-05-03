import { useState } from "react";
import LoginImage from "./LoginImage.component";
import LoginInput from "./LoginInput.component";
import useLogin from "../../Hooks/useLogin";

const Login = ({ setUser }) => {
  const [login, setLogin] = useState({});
  const { loading, apiData } = useLogin(login);
  console.log("login", login);
  console.log("loading", loading);
  console.log(apiData);
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <LoginImage />
        <LoginInput setLogin={setLogin} />
      </div>
    </div>
  );
};

export default Login;

import LoginImage from "./LoginImage.component";
import LoginInput from "./LoginInput.component";
import "./Login.css";

const Login = () => {
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <LoginImage />
        <LoginInput />
      </div>
    </div>
  );
};

export default Login;

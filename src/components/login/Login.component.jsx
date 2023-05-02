import LoginImage from "./LoginImage.component";
import LoginInput from "./LoginInput.component";

const Login = ({ setUser }) => {
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <LoginImage />
        <LoginInput setUser={setUser} />
      </div>
    </div>
  );
};

export default Login;

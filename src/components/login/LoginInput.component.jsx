import Btn from "../Button.component";
import ErrorMsg from "../ErrorMessage.component";

const LoginInput = () => {
  return (
    <div className="col-12 col-lg col-md">
      <ErrorMsg />
      <form className="text-center my-4 px-lg-5 px-0">
        <div className="form-floating">
          <input
            type="email"
            name="email"
            id="floatingInput"
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Enter Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="pwd"
            id="floatingPassword"
            className="form-control my-3"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Enter Password</label>
        </div>
        <Btn />
      </form>
      <div className="text-muted text-center">You are not have account!</div>
    </div>
  );
};
export default LoginInput;

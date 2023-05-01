import Btn from "../Button.component";
import ErrorMsg from "../ErrorMessage.component";
import Suggestion from "../Suggestion.component";

const SignupInput = () => {
  return (
    <div className="col-12 col-lg col-md d-flex justify-content-center align-items-center flex-column">
      <ErrorMsg />
      <form className="text-center my-3 px-0 px-lg-5  w-100 ">
        <div className="form-floating">
          <input
            type="text"
            name="uname"
            id="floatingInput"
            className="form-control"
            placeholder="Username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            name="email"
            id="floatingInput"
            className="form-control my-1"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="pwd"
            id="floatingPassword"
            className="form-control mb-3"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <Btn name={"Signup"} />
      </form>
      <Suggestion
        link={"login"}
        sugmsg={"If You already have account. Please "}
      />
    </div>
  );
};

export default SignupInput;

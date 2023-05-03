import { useState } from "react";

import Btn from "../Button.component";
import ErrorMsg from "../ErrorMessage.component";
import Suggestion from "../Suggestion.component";

const LoginInput = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const newLogin = { email, password };
    // console.log(newLogin);
    setLogin(newLogin);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="col-12 col-lg col-md d-flex justify-content-center align-items-center flex-column">
      <ErrorMsg />
      <form
        className="text-center my-4 px-lg-5 px-0 w-100"
        onSubmit={loginHandler}
      >
        <div className="form-floating">
          <input
            type="email"
            name="email"
            id="floatingInput"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />
          <label htmlFor="floatingPassword">Enter Password</label>
        </div>
        <Btn name={"Login"} />
      </form>
      <Suggestion
        link={"signup"}
        sugmsg={"If you don't have account! Please "}
      />
    </div>
  );
};
export default LoginInput;

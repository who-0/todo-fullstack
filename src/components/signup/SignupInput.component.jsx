const SignupInput = () => {
  return (
    <div className="col-12 col-lg col-md">
      <div className="message text-center">error</div>
      <form className="text-center my-3 px-0 px-lg-5  ">
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
        <button type="submit" className="btn btn-success w-50 fs-4 l">
          Signup
        </button>
      </form>
      <div className="text-muted text-center">You are not have account!</div>
    </div>
  );
};

export default SignupInput;

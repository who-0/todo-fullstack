import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";

// import Home from "./Home.container";
// import Login from "../components/login/Login.component";

function App() {
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg col-md ">
          <div className="text-center">
            <img
              src="/img/login.svg"
              alt="login"
              className="img-fluid"
              width={600}
            />
          </div>
        </div>
        <div className="col-12 col-lg col-md">
          <div className="message text-center">error</div>
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
            <button type="submit" className="btn btn-success w-50 fs-4 l">
              Login
            </button>
          </form>
          <div className="text-muted text-center">
            You are not have account!
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

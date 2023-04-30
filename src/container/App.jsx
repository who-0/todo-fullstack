import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";

// import Home from "./Home.container";
// import Login from "../components/login/Login.component";

function App() {
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col">
          <div className="text-center">
            <img
              src="/img/login.svg"
              alt="login"
              className="img-fluid"
              width={600}
            />
          </div>
        </div>
        <div className="col">
          <div className="message text-center">error</div>
          <form className="d-flex justify-content-center align-items-center flex-column my-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter Password"
              className="my-3"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;

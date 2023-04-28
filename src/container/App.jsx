// import Todo from "../components/Todo/Todo";

import "./App.css";
function App() {
  return (
    <div className="container bg-primary vh-100 py-3 shadow-lg ">
      <nav className="navbar navbar-expand navbar-light bg-light rounded">
        <div className="container-fluid">
          <a href="/#" className="navbar-brand">
            TODO
          </a>
          <ul className="navbar-nav mb-lg-0 d-sm-flex">
            <li className="nav-item mt-lg-0 m-2">
              <input
                type="text"
                className="nav-link text-center text-lg-start"
                value={"Today"}
              />
            </li>
            <li className="nav-item  ms-2 mt-lg-0  mt-2">
              <a href="/#" className="nav-link p-0">
                <img
                  src="/img/user.png"
                  alt="user"
                  className="img-fluid"
                  width={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row justify-content-center mt-5 h-75 mx-sm-2 m-0">
        <div className="col-lg-4 col-md-8 col-sm  bg-light text-start rounded-3 ">
          <div className="lists_container_cs h-75 bg-primary w-100 my-4 rounded-2">
            <ul>
              <li className="list_cs bg-white ">hello world </li>
              <li className="list_cs bg-white ">hello DaDDy </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

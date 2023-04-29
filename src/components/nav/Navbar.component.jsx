import Header from "./Header.component";
import Profile from "./Profile.component";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light rounded shadow-lg">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand">
          TODO
        </a>
        <ul className="navbar-nav mb-lg-0 d-sm-flex">
          <Header />
          <Profile />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

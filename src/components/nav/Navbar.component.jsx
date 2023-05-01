import Header from "./Header.component";
import ProfileLogo from "./ProfileLogo.component";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light rounded shadow-lg">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand fs-3  logo_cs">
          TODO
        </a>
        <ul className="navbar-nav mb-lg-0 d-sm-flex">
          <Header />
          <ProfileLogo />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

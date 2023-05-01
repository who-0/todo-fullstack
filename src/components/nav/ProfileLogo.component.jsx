import { Link } from "react-router-dom";
const ProfileLogo = () => {
  return (
    <li className="nav-item  ms-2 mt-lg-2  mt-2">
      <Link to="/profile" className="nav-link p-0">
        <img src="/img/user.png" alt="user" className="img-fluid" width={40} />
      </Link>
    </li>
  );
};

export default ProfileLogo;

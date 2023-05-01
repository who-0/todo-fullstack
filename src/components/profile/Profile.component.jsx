import { Link } from "react-router-dom";
import ProfileContent from "./ProfileContent.component";

const Profile = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center ">
      <div className="w-75 h-75 bg-primary rounded-4 shadow-lg position-relative">
        <Link
          to="/"
          className="position-absolute top-10 start-10 m-3 bg-light p-1 px-2 rounded-3"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </Link>
        <ProfileContent />
      </div>
    </div>
  );
};
export default Profile;

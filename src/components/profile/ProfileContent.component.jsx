import React from "react";
import ProfileBtn from "./ProfileBtn.component";

function ProfileContent() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column h-100">
      <h1 className="fs-1 uname_cs">Username</h1>
      <p className="fs-5 email_cs">test@gamil.com</p>
      <ProfileBtn />
    </div>
  );
}

export default ProfileContent;

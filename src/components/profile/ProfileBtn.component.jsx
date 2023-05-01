import React from "react";

function ProfileBtn() {
  return (
    <div className="my-3">
      <button className="btn btn-outline-light me-3">Logout</button>
      <button className="btn btn-outline-danger px-3">Delete</button>
    </div>
  );
}

export default ProfileBtn;

import React from "react";
import { Link } from "react-router-dom";
function Suggestion({ link, sugmsg }) {
  const path = "/" + link;
  return (
    <div className="text-muted text-center ">
      {sugmsg}
      <Link to={path} className="fs-4 guess_cs">
        {link}
      </Link>
    </div>
  );
}

export default Suggestion;

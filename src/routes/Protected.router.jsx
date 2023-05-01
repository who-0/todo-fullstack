import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;

import { Navigate } from "react-router-dom";

const Protected = ({ isLogin, children }) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;

import SignupImage from "./SignupImage.component";
import SignupInput from "./SignupInput.component";

const Signup = () => {
  return (
    <div className="container bg-primary vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <SignupImage />
        <SignupInput />
      </div>
    </div>
  );
};

export default Signup;

import "./styles.css";
const Btn = ({ name }) => {
  return (
    <button type="submit" className="btn btn-success w-50 fs-4 login-btn_cs">
      {name}
    </button>
  );
};

export default Btn;

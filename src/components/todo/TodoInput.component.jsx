const TodoInput = () => {
  return (
    <div className="text-center">
      <input
        type="text"
        value={"hello world"}
        className="w-75 me-2 fs-5 input_cs"
      />
      <button className="fs-4 input-button_cs">+</button>
    </div>
  );
};
export default TodoInput;

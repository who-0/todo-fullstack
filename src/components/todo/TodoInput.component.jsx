const TodoInput = ({ inputValue, setInputValue, formHandler }) => {
  return (
    <div className="text-center">
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={inputValue}
          className="w-75 me-2 fs-5 input_cs"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="fs-4 input-button_cs">+</button>
      </form>
    </div>
  );
};
export default TodoInput;

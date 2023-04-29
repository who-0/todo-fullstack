import TodoInput from "./TodoInput.component";
import TodoLists from "./TodoLists.component";

const Todo = () => {
  return (
    <div className="row justify-content-center mt-5 h-75 mx-sm-2 m-0">
      <div className="col-lg-4 col-md-8 col-sm  bg-light text-start rounded-3 ">
        <div className="lists_container_cs h-75 bg-primary w-100 my-4 rounded-2">
          <ul className="m-0 p-1">
            <TodoLists />
          </ul>
        </div>
        <TodoInput />
      </div>
    </div>
  );
};

export default Todo;

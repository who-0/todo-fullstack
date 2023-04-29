import { useState } from "react";
import TodoInput from "./TodoInput.component";
import TodoLists from "./TodoLists.component";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [listId, setListId] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    setListId(listId + 1);
    const newList = [...lists, { id: listId, list: inputValue }];
    setInputValue("");
    setLists(newList);
  };
  return (
    <div className="row justify-content-center mt-5 h-75 mx-sm-2 m-0 ">
      <div className="col-lg-4 col-md-8 col-sm  bg-light text-start rounded-3 h-100">
        <div className="h-75 bg-primary w-100 my-4 rounded-2 overflow-auto">
          <TodoLists lists={lists} />
        </div>
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          formHandler={formHandler}
        />
      </div>
    </div>
  );
};

export default Todo;

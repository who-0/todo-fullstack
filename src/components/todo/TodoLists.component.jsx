const TodoLists = ({ lists }) => {
  return (
    <ul className="m-0 p-1 ">
      {lists.map((list) => (
        <li
          className="list_cs bg-white my-1 h-50 rounded-1 p-1 ps-3 fs-5"
          key={list.id}
        >
          {list.list}
          <div className="d-inline float-end  pe-1">
            <i className="fa-solid fa-pen"></i>
            <i className="fa-regular fa-trash-can ms-2"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;

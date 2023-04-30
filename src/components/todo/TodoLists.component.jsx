const TodoLists = ({ lists }) => {
  return (
    <ul className="m-0 p-1 w-100">
      {lists.map((list) => (
        <li
          className="list_cs bg-white my-1 h-50 rounded-1 p-1 ps-3  overflow-x-auto"
          key={list.id}
        >
          <p className="fs-5 m-0 d-inline">{list.list}</p>
          <div className="d-inline float-end  pe-1 fs-6 lh-lg">
            <i className="fa-solid fa-pen"></i>
            <i className="fa-regular fa-trash-can ms-2"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;

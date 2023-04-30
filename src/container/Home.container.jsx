import Navbar from "../components/nav/Navbar.component";
import Todo from "../components/todo/Todo.component";
const Home = () => {
  return (
    <div className="container bg-primary vh-100 py-3 shadow-lg ">
      <Navbar />
      <Todo />
    </div>
  );
};
export default Home;

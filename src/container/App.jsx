import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";
import Navbar from "../components/nav/Navbar.component";
import Todo from "../components/todo/Todo.component";
function App() {
  return (
    <div className="container bg-primary vh-100 py-3 shadow-lg ">
      <Navbar />
      <Todo />
    </div>
  );
}
export default App;

import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  /*
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

  const updateTodo = useCallback((id) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) return { ...todo, done: !todo.done }
        else return todo;
      });
    });
  }, []);
  const deleteTodo = useCallback(id => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  }, []);
  const addTodo = useCallback((text) => {
    const todo = { id: cnt.current++, text, done: false }
    setTodoList(todoList => todoList.concat(todo))
  }, []);
  */

  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <TodoForm></TodoForm>
        <TodoTable></TodoTable>
      </div>
    </div>
  );
};
export default TodoContainer;

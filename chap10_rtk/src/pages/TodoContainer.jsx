import TodoForm from './../components/todoList/TodoForm';
import TodoTable from './../components/todoList/TodoTable';

const TodoContainer = () => {
  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm />
      <TodoTable />
    </div>
  );
};
export default TodoContainer;

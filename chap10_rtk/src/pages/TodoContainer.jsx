import { useSelector } from 'react-redux';
import TodoForm from './../components/todoList/TodoForm';
import TodoTable from './../components/todoList/TodoTable';

const TodoContainer = () => {
  const { count } = useSelector(store => store.countStore);

  return (
    <div>
      <h3>Todo List / {count}</h3>

      <TodoForm />
      <TodoTable />
    </div>
  );
};
export default TodoContainer;

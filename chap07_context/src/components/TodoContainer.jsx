import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
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

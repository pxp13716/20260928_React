import { Outlet, NavLink, useNavigation } from 'react-router'
import { BarLoader } from 'react-spinners'

const isActive = ({ isActive }) => isActive ? { color: 'green', fontWeight: 'bold' } : undefined;

function App() {
  const navigation = useNavigation();

  return (
    <div className="m-3">
      <h1>Chap06 TodoList</h1>

      <div className="mb-3">
        <NavLink to="/" className={isActive}>HOME</NavLink> | {' '}
        <NavLink to="/count" className={isActive}>COUNT</NavLink> | {' '}
        <NavLink to="/todos" className={isActive}>TODO</NavLink> | {' '}
        <NavLink to="/list" className={isActive}>LIST</NavLink> | {' '}
      </div>

      <hr />

      <div>
        {navigation.state === 'loading' ? <BarLoader color='orange' /> : <Outlet></Outlet>}
      </div>
    </div>
  );
}

export default App;

import { createBrowserRouter } from 'react-router'

import App from './../App.jsx'
import Count from './../pages/Count.jsx'
import TodoContainer from './../pages/TodoContainer.jsx'

import ContactList from '../pages/contacts/ContactList.jsx'
import Contact from '../pages/contacts/Contact.jsx'
import AddContact from '../pages/contacts/AddContact.jsx'
import UpdateContact from '../pages/contacts/UpdateContact.jsx'
import UpdatePhoto from '../pages/contacts/UpdatePhoto.jsx'

import ErrorElem from '../pages/common/ErrorElem.jsx'
import NotFound from '../pages/common/NotFound.jsx'

const routes = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorElem />, children: [
      { index: true, element: <h3>INDEX</h3> },
      { path: '/count', element: <Count /> },
      { path: '/todos', element: <TodoContainer /> },

      { path: '/list', element: <ContactList /> },
      { path: '/contact/:no', element: <Contact /> },
      { path: '/add', element: <AddContact /> },
      { path: '/update/:no', element: <UpdateContact /> },
      { path: '/photo/:no', element: <UpdatePhoto /> },

      { path: '*', element: <NotFound /> },
    ]
  }
])
export default routes;

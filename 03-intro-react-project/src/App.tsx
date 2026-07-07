
import './App.css'
import Todo from './features/todos/pages/Todo'
//
import Header from './components/layout/Header'
import Welcome from './pages/Welcome'
import { createBrowserRouter, RouterProvider } from 'react-router'



function App() {

  // emulate js routing by using a state variable to determine which page to show
  // const currentPage = window.location.pathname
  // const content = currentPage === '/todos' ? <Todo /> : <Welcome />

  // with react router lib (data mode)
  const router = createBrowserRouter([
    { path: '/', element: <Welcome /> },
    { path: '/todos', element: <Todo /> }
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />,
    </>
  )
}

export default App

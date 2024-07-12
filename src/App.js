import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Services from './components/Services';
import Price from './components/Price';
import About from './components/About';

function App() {

  const AppLayout=()=>{
    return(
      <>
      <Header/>
      <Outlet/>
      </>
    )
  }

  const router =createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/price",
        element:<Price/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App;

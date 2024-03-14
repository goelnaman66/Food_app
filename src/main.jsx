import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './components/contact.jsx';
import Error from './components/error.jsx';
import Body from './components/body.jsx';
import Menu from './components/menu.jsx';
//import Grocery from './components/grocery.jsx';


const Grocery = lazy(()=> import('./components/grocery.jsx'));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resid",
        element: <Menu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
      }
    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)

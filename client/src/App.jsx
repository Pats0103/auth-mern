
import{ createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import  PageNotFound  from "./components/PageNotFound"
import Register from "./components/Register"
import axios from 'axios';
import Login from "./components/Login";


axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT || 5000}`;
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} >
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>

       </Route>
      <Route path="*" element={<PageNotFound/>}/>
      </>
    )
  )
  return (
    <div className="flex justify-center">

    <div className="w-[70%]">
      <RouterProvider router={router}/>
    </div>
    </div>
  )
}

export default App

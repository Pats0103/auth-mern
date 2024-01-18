
import{ createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import  PageNotFound  from "./components/PageNotFound"
import Login from "./components/Login"
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} >
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

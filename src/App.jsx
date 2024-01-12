
import{ createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import  PageNotFound  from "./components/PageNotFound"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} >
     
       </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
        
      
    </>
  )
}

export default App

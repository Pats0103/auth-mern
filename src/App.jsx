import Header from "./components/Header"
import{ createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path="" element={<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
        
      
    </>
  )
}

export default App

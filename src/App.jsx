import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { useRoutes } from "react-router-dom"
import Create from './components/create/Create'
import Gallery from './components/gallery/Gallery'
import Dweller from './components/dweller/Dweller'

function App() {

  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/dweller/:id",
      element: <Dweller />
    },
    ])
    
    return (
      <>
        {element}
      </>
    )
}

export default App

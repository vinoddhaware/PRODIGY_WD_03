import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Player2 from "./pages/Player2"
import Player1 from "./pages/Player1"

function App() {

  const router = createBrowserRouter([
    {
      path: '/PRODIGY_WD_03/',
      element: <Home />
    },
    {
      path: '/PRODIGY_WD_03/Player1',
      element: <Player1 />
    },
    {
      path: '/PRODIGY_WD_03/Player2',
      element: <Player2 />
    }
  ])

  return (
    <>
          <RouterProvider router={router} />
    </>
  )
}

export default App

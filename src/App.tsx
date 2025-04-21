import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClientRoutes } from './routes/clientRoutes'
import { AdminRoutes } from './routes/AdminRoutes'

function App() {
  const isLogIn = false
  const router = createBrowserRouter(isLogIn ? AdminRoutes : ClientRoutes);

  return <RouterProvider router={router} />;


}

export default App

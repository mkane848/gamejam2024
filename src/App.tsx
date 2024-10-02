import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import OptionsMenu from './layout/OptionsMenu';
import NotFound from './layout/NotFound';
import Home from './layout/Home';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <OptionsMenu />
      <Outlet />
      {/* <Snackbar />
      <Footer /> */}
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
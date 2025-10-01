import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout'

import { Home } from './pages/home';
import { Cart } from './pages/cart'
import { Detail } from './pages/detail';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: 'cart',
        element: <Cart/>
      },

      {
        path: '/products/:id',
        element: <Detail/>
      }
    ]
  }
])

export default router;

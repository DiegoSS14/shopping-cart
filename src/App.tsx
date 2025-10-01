import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout'

import { Home } from './pages/home';
import { Cart } from './pages/cart'
import { Product } from './pages/product';

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
        element: <Product/>
      }
    ]
  }
])

export default router;

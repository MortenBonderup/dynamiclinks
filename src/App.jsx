import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import DefaultPage from './views/DefaultPage';
import ProductPage from './views/ProductPage';

const router = createBrowserRouter([
  {
    path: "/dynamiclinks/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import ErrorPage from '@/pages/ErrorPage';
import DetailPage from '@/pages/DetailPage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flor/:id",
    element: <DetailPage />,
  },
]);

export default routes;
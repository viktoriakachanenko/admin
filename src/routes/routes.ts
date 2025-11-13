import { createBrowserRouter } from 'react-router';
import { Layout } from 'src/components/layout';
import { Home } from 'src/pages/home';
import { Users } from 'src/pages/users/users';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'users', Component: Users },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import { Layout } from "src/components/layout";
import { Home } from "src/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
]);

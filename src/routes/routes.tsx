import { HomeFeature } from "features";
import { MainLayout } from "layouts";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <HomeFeature /> }],
  },
];

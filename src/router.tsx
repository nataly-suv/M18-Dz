import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import NotFound from "./pages/NotFound/NotFound";
import Beans from "./pages/Beans/Beans";
import Bean from "./pages/Bean/bean";
import Layout from "./components/Layout/layout";
import Recipes from "./pages/Recipes/recipes";
import Combinations from "./pages/Combinations/сombinations";
import History from "./pages/History/history";

const router = createBrowserRouter([
  {
    path: "/M18-Dz",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "beans", element: <Beans /> },
      { path: "bean/:id", element: <Bean /> },
      { path: "facts", element: <Facts /> },
      { path: "recipes", element: <Recipes/> },
      { path: "combinations", element: <Combinations/> },
      { path: "history", element: <History/> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;

// {
//     path: "/",
//     element: <Home/>,
// },
//   {
//       path: "/beans",
//       element: <Beans/>
//   },
//   {
//     path: "/bean/:id",
//     element: <Bean />,
//   },
//   {
//     path: "/facts",
//     element: <Facts />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },

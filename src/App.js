import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root";
import Dashboard from "./pages/dashboard";
import Country from './pages/country';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/country/:name",
        element: <Country />
      },
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

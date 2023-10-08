import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import ServerDashboard from "./pages/dashboard/ServerDashboard";
import Menu from "./components/Menu";
import MainNavbar from "./components/Header";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <MainNavbar />
        <div className="container">
          <div className="menuContainer w-full h-full">
            <Menu />
          </div>
          <div className="ContentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <ServerDashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <SignIn />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

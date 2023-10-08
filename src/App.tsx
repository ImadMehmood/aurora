import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import ServerDashboard from "./pages/dashboard/ServerDashboard";
import Menu from "./components/Menu";
import MainNavbar from "./components/Header";
import { Toaster } from "react-hot-toast";

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
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <ServerDashboard />,
        },
      ],
    },
    {
      path: "/",
      element: <SignIn />,
    },
  ]);

  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;

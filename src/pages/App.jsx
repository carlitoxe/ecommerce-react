import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./home";
import MyAccount from "./myaccount";
import MyOrder from "./myorder";
import NotFound from "./notfound";
import SignIn from "./signin";
import MyOrders from "./myorders";
import Layout from "../components/Layout";
import { ShoppingCartProvider } from "../context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;

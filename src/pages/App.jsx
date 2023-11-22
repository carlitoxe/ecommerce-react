import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Category from "./category";
import MyAccount from "./myaccount";
import MyOrder from "./myorder";
import NotFound from "./notfound";
import SignIn from "./signin";
import MyOrders from "./myorders";
import Layout from "../components/Layout";
import { ShoppingCartProvider } from "../context";
import CheckoutSideMenu from "../components/CheckoutSideMenu";
import { ScrollToTop } from "../utils";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;

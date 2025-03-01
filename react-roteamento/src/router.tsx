import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import RootLayout from "./RootLayout";
import Product from "./pages/Product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [{
                    index: true,
                    element: <Home />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/product/:productId",
                    element: <Product />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }
            ]
        }
])

export default router
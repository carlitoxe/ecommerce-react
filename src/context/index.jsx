import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    // Product Detail Modal Mode
    const [openModal, setOpenModal] = useState(false);
    
    // Product Detail Sidemenu Mode
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Sidemenu Mode
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    // Prodduct Detail - Show Product (Info)
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    console.log(cartProducts);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);
    console.log(order);

    return (
        <ShoppingCartContext.Provider 
        value={{ 
            count, 
            setCount,
            openModal, 
            setOpenModal,
            productToShow,
            setProductToShow,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
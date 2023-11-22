import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api"


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
    const [orders, setOrders] = useState([]);
    // console.log('order', orders);

    // Get Products
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${apiUrl}/products`)
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(err => console.error(err))
          .finally(() => setIsLoading(false))
      }, [])

    // Search Products by title
      const [ searchValue, setSearchValue ] = useState('');

      const onSearchValue = e => {
        setSearchValue(e.target.value)
      }

      let searchedProducts = []
    
      if (searchValue) {
        searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
      } else {
        searchedProducts = products;
      }

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
            orders,
            setOrders,
            products,
            setProducts,
            isLoading,
            searchValue,
            onSearchValue,
            setSearchValue,
            searchedProducts,
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
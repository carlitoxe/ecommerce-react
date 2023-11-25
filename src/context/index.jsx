import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api"
import { totalPrice } from "../utils";

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
    
    // console.log(cartProducts);

    // Handling Shopping Cart
    const isCartProducts = cartProducts.length !== 0;
    const total = totalPrice(cartProducts);
    
    const addProductsToCard = (e, productData) => {
      e.stopPropagation();
      const isInCart = cartProducts.some(product => product.id === productData.id);
      // productData.qty = qty
      // console.log(productData);
      if (!isInCart) {
          // setCount(count + 1);
          productData.qty = 1;
          setCartProducts([...cartProducts, productData]);
      } else {
          const productToUpdate = cartProducts.find(product => product.id === productData.id);
          productToUpdate.qty += 1;
          // console.log(productToUpdate);
          // setCartProducts([...cartProducts, {...productData, qty}]);
        }
        setCount(count + 1)
      closeProductDetail();
      openCheckoutSideMenu();  
  }

  const totalQty = cartProducts.reduce((sum, product) => sum + product.qty, 0);
  console.log(totalQty);
    
    const handleCheckout = () => {
      const date = new Date();
      // const timeNow = Date.now();
      if (isCartProducts) {
          const orderToAdd = {
              id: crypto.randomUUID(),
              date: date.toLocaleDateString(),
              products: cartProducts,
              totalProducts: totalQty,
              totalPrice: total,
          }
          setOrders([...orders, orderToAdd]);
          setCartProducts([]);
          setCount(0);
          closeCheckoutSideMenu();
      } else {
          return
      }
      console.log(cartProducts);
    }
    const handleDelete = (e, id) => { 
        e.stopPropagation();
        const cartUpdated = cartProducts.filter(product => product.id !== id)
        setCartProducts(cartUpdated)
        setCount(count - 1);
        console.log(cartProducts);
    }

  const cartCount = cartProducts.reduce((sum, product) => sum + product.qty, 0);

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
            handleCheckout,
            handleDelete,
            isCartProducts,
            total,
            addProductsToCard,
            cartCount
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
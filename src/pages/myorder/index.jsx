import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import ProductDetailSide from "../../components/ProductDetailSide"

function MyOrder() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, order } = useContext(ShoppingCartContext);
  
  console.log(order?.slice(-1)[0]);
    return (
      <>
        <p>My Order</p>
        <section className={`flex flex-col bg-black rounded-lg z-10 mt-5 w-2/5`}>

        <div>
          {order.length ? 
          <>
            {order?.slice(-1)[0].products?.map(product => (
            <OrderCard key={product.id} {...product} />
            ))} 
            <p className="text-right pr-2 mt-2">Total : <span className="text-lime-400 font-medium">${order?.slice(-1)[0].totalPrice.toFixed(2)}</span></p>
          </>
        : <p className="text-center">No Orders atm</p>}
          
        </div>

    </section>

    <ProductDetailSide />

      </>
    )
  }
  
  export default MyOrder
  
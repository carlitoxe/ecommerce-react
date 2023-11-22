import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import ProductDetailSide from "../../components/ProductDetailSide"

function MyOrder() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, orders } = useContext(ShoppingCartContext);
  const { id } = useParams();
  // console.log(id);
  const { pathname } = location;
  console.log(pathname);
  const substr = pathname.substring(11);

  const order = substr !== 'last' ? orders?.find(ord => ord.id === id) : orders[orders.length - 1];

  // console.log('order', order);

    return (
      <>
        <div className='flex items-center relative justify-center w-2/4 mb-5'>
          <Link to={'/my-orders'} className='absolute left-0 hover:text-blue-500'>
            <ChevronLeftIcon className='w-8 h-8' />
          </Link>
          <h1 className='text-center text-2xl'>My Order</h1>
        </div>
        <section className={`flex flex-col bg-black rounded-lg z-10 w-2/4`}>
        <div className="h-screen">
          <div className="px-2">
            <p className="border-b border-gray-400 pb-1">Order Placed: {order.date}</p>
          </div>
          {order ? 
          <>
            {order?.products?.map(product => (
            <OrderCard key={product.id} {...product} />
            ))} 
            <div className="flex justify-between items-center px-2 mt-2">
              <p>Items : <span className="font-medium">{order.totalProducts}</span></p>
              <p>Total : <span className="text-lime-400 font-medium">${order?.totalPrice.toFixed(2)}</span></p>
            </div>
            
          </>
        : <p className="text-center">Order Not Found</p>}
          
        </div>

    </section>

    <ProductDetailSide />

      </>
    )
  }
  
  export default MyOrder
  
import { useContext } from 'react'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom';

function MyOrders() {
  const { orders } = useContext(ShoppingCartContext);
  console.log(orders);

  return (
        <>
          <div className='mt-2 mb-4'>
            <h1 className='text-center text-2xl'>My Orders</h1>
          </div>
          <section className='flex flex-col gap-4 w-full items-center justify-center px-4 sm:px-8 md:px-2 lg:px-8'>
          { orders.length ? (
              orders?.map((ord, index) => (
                <Link to={`/my-order/${ord.id}`} key={index} className='flex justify-center w-full md:w-2/4 lg:w-2/5'>
                  <OrdersCard 
                    totalPrice={ord.totalPrice} 
                    totalProducts={ord.totalProducts}
                    date={ord.date} 
                  />

                </Link>
              ))
          ) : (
            <div className='text-xl '>You have no orders at this moment</div>
          )
          }
          </section>
        </>
  )
}

export default MyOrders

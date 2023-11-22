import { TrashIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const OrderCard = ({ id, title, image, price, description, handleDelete }) => {
    const { openProductDetail, closeCheckoutSideMenu, setProductToShow, cartProducts, setCartProducts, setCount, count } = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        closeCheckoutSideMenu();
        setProductToShow(productDetail);
        openProductDetail();
    }

    return (
        <div 
            className="flex px-2 hover:bg-blue-900 rounded-lg duration-200 ease-in cursor-pointer"
            onClick={() => showProduct({id, title, image, price, description})}
        >
            <div className='flex justify-between items-center w-full border-b border-gray-500 py-2'>
                <div className='flex items-center gap-2'>
                    <figure className='w-20 h-20'>
                        <img className="w-full h-full rounded-lg object-cover" src={image} alt="" />
                    </figure>
                        <p className='text-sm font-light px-1'>{title}</p>
                </div>
                <div className='flex items-center gap-2'>
                <p className='text-lg font-medium text-lime-400'>${price}</p>
                {
                    handleDelete && 
                        <button onClick={(e) => handleDelete(e, id)}>
                            <TrashIcon className="w-6 h-6 text-white hover:text-red-500"/>
                        </button>
                }
         
            </div>
                  
            </div>
        </div>
    )
}

export default OrderCard;
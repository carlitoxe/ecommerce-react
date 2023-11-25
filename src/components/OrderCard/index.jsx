import { TrashIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../context'
import { useLocation } from 'react-router-dom'

const OrderCard = ({ id, title, image, price, description, qty, handleDelete }) => {
    const { openProductDetail, closeCheckoutSideMenu, setProductToShow, cartProducts, setCartProducts, setCount, count } = useContext(ShoppingCartContext)
    const { pathname } = useLocation();

    const showProduct = (productDetail) => {
        closeCheckoutSideMenu();
        setProductToShow(productDetail);
        openProductDetail();
    }

    const updateProductQty = (e, productData) => {
        const productToUpdate = cartProducts.find(product => product.id === productData.id);
        if (e.target.value) {
            productToUpdate.qty = parseInt(e.target.value);
        }
        setProductToShow(productData);
    }
    
    // const handleChange = (e) => {
    //     setQuantity(parseInt(e.target.value));
    //     e.stopPropagation();
    //     console.log(e.target.value);
    //     const index = cartProducts.findIndex(product => product.id === id);
    //     // setQuantity(productToUpdate.qty) 
    //     // productToUpdate.qty = quantity;
    //     cartProducts[index].qty = quantity;
    //     // console.log(productToUpdate);
    // }
    const subTotal = (price * qty).toFixed(2);

    const isHomeOrCart = pathname === '/' || pathname === '/cart';

    return (
        <div 
            className="flex px-2 hover:bg-blue-900 rounded-lg duration-200 ease-in"
            // onClick={() => showProduct({id, title, image, price, description, qty})}
        >
            <div className='flex justify-between items-center w-full border-b border-gray-500 p py-2'>
                <div className='flex items-center w-full gap-2 cursor-pointer hover:text-lime-400'
                onClick={() => showProduct({id, title, image, price, description, qty})}
                >
                    {
                        !isHomeOrCart && 
                        <div className='flex text-gray-400 text-xs sm:text-sm'>
                            {qty} x ${price}
                        </div>
                    }
                    <figure className='w-20 h-20'>
                         <img className="w-full h-full rounded-lg object-cover" src={image} alt="" />
                    </figure>
                        <p className='text-sm px-1'>{title}</p>
                </div>
                           {isHomeOrCart &&
                                <input 
                                type="number" 
                                className="w-14 mr-1.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="1" 
                                value={qty} 
                                onChange={e => updateProductQty(e, {id, qty})} 
                                min={1} 
                                max={100} 
                              />
                }
                <div className='flex items-center gap-2'>
                <p className='text-lg font-medium text-lime-400'>${subTotal}</p>
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
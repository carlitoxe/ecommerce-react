import { useContext } from "react";
import { ShoppingCartContext } from '../../context'
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

const Card = ({ title, price, category, image }) => {
    const { count, setCount } = useContext(ShoppingCartContext);
    
    return (
        <div className='bg-black cursor-pointer w-56 h-78 text-white rounded-lg border border-slate-600 hover:border-slate-300 duration-200 delay-100'>
            <figure className='relative mb-2 w-full h-4/5 rounded-lg'>
                <span className='absolute bottom-0 left-0 bg-gray-600 rounded-xl m-2 text-xs px-2 py-0.5 capitalize'>{category}</span>
                <img className='w-full h-56 object-cover rounded-t-lg' src={image} alt={`${title} image`} />
                {/* <button 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 text-black p-1 font-medium hover:bg-blue-500 hover:text-white'
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button> */}
            </figure>
            <p className="flex justify-between items-center px-3">
                <span className="text-sm font-light truncate mr-2">{title}</span>
                <span className="font-medium">${price}</span>
            </p>
            <div className="flex justify-center items-center pb-3 mt-2">
                <button 
                    className="flex items-center px-5 py-1 text-sm transition ease-in-out duration-200 rounded-xl bg-blue-900 hover:bg-blue-600 hover:text-white focus:outline-none font-medium"
                    onClick={() => setCount(count + 1)}
                >
                <ShoppingCartIcon className="h-4 w-4 mr-1" />    
                Add to Cart 
                </button>
            </div>
        </div>
    )
}

export default Card;

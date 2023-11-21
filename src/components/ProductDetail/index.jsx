import { useContext } from "react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ShoppingCartContext } from "../../context";
// import './styles.css'

const ProductDetail = () => {
  const { setOpenModal, productToShow, isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContext);

    return (
            <div className="flex flex-col fixed bg-black rounded-lg w-[400px] h-[calc(100vh-140px)] overflow-hidden shadow-lg hover:shadow-xl duration-500 transform transition overflow-y-auto">
                {/* <div className="flex justify-between items-center p-4"> */}
                    <figure className="relative mb-2 w-full h-3/5">
                        <button 
                            onClick={() => setOpenModal(false)}
                            className="absolute top-0 right-0 m-2 font-bold cursor-pointer"
                        >
                            <XCircleIcon className="text-red-500 w-8 h-8 cursor-pointer"/>
                        </button>
                        <img 
                            src={productToShow.image} 
                            alt='product image' 
                            className="w-full h-full object-cover rounded-t-lg" 
                        />

                    </figure>
                {/* </div> */}
                <div className="p-2 text-white text-center">
                    <h1 className='text-xl font-bold'>
                        {productToShow.title} 
                    </h1>
                    <p className='mt-1 text-lg'>
                        Price: <span className="font-semibold text-lime-400">${productToShow.price}</span>
                    </p>
                    
                    <p className='mt-1 text-xs text-gray-300 text-light pb-4'>
                        {productToShow.description} 
                    </p>
                </div>
            </div>
            
    )
}

export default ProductDetail;
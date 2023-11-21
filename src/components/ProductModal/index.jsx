import { createPortal } from "react-dom";

const ProductModal = ({ children }) => {
    return createPortal(    
        <div className="bg-[rgba(43,45,51,0.8)] flex justify-center items-center fixed top-0 bottom-0 inset-x-0 overflow-y-auto">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export default ProductModal;
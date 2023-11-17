import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <>
        <div className='flex flex-col items-center mt-20 text-white'>
            <Navbar />
            {children}
            <Footer />
        </div>

        </>
    )
}

export default Layout;
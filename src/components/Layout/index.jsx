import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <>
        <div className='flex flex-col justify-center bg-black items-center mt-20 text-white'>
            <Navbar />
            <main className="contents">
            {children}
            </main>
            <Footer />
        </div>

        </>
    )
}

export default Layout;
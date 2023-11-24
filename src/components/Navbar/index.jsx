import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { useContext, useState } from "react";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const activeStyle = 'flex font-normal bg-gray-600 rounded-lg px-2 py-1.5'; 
  const activeStyleMobile = 'flex w-full font-medium  bg-gray-700 rounded-lg px-2 py-1.5'; 
  const { count, cartProducts } = useContext(ShoppingCartContext)

  const navigationLeft = [
    { name: 'All', href: '/' },
    // { name: 'Clothes', href: '/clothes' },
    { name: 'Electronics', href: 'category/electronics' },
    { name: "Men's Clothing", href: 'category/mens-clothing' },
    { name: "Women's Clothing", href: 'category/womens-clothing' },
    { name: 'Jewelery', href: 'category/jewelery' },
    // { name: 'Furniture', href: 'category/furniture' },
    // { name: 'Toys', href: '/toys' },
    // { name: 'Others', href: '/others' },
  ];

  const navigationRight = [
    { name: 'My Orders', href: '/my-orders' },
    { name: 'My Account', href: '/my-account' },
    { name: 'Sign In', href: '/sign-in' },
    { name: 'Cart', href: '/cart' },
  ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
    <nav className="hidden lg:flex justify-between items-center fixed w-full pt-5 pb-3 px-10 text-sm top-0 z-50 bg-black/80 border-b border-gray-600">
      <ul className="flex items-center text-white gap-0.5">
        <li className="font-semibold text-lg mr-3 py-0.5">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        {navigationLeft.map(item => {

          return (
            <li key={item.name} className="flex">
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? activeStyle : 'px-2 hover:bg-gray-700 rounded-lg py-1.5 duration-200 ease-in'}
              >
                {item.name}
              </NavLink>
            </li>
          )
        })}

      </ul>
      <ul className="flex items-center text-white gap-0.5">
      <li className="text-gray-400 mr-1">toxedev@gmail.com</li>
      {navigationRight.map(item => {
          return (
            <li key={item.name}>
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? activeStyle : 'flex px-2 hover:bg-gray-700 rounded-lg py-1.5 duration-200 ease-in'}
              >
                {item.href !== '/cart' ? 
                item.name : 
                <><ShoppingCartIcon className="h-5 w-5 mr-0.5 text-blue-500" /> <span>{cartProducts.length}</span></>
                }
              </NavLink>
            </li>
          )
        })}

      </ul>
    </nav>
    <nav className="lg:hidden bg-white dark:bg-black w-full fixed top-0 z-50 sm:px-4 border-b border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to="/" className='text-2xl font-medium'>
            Shopi
          </NavLink>
          <div className="flex items-center gap-3">
          <NavLink to='/cart' className={({ isActive }) => isActive ? activeStyleMobile : 'flex px-2 hover:bg-gray-800 rounded-lg py-1.5 duration-200 ease-in'}>
            <ShoppingCartIcon className="h-6 w-6 mr-0.5 text-blue-500" /> <span>{cartProducts.length}</span>

          </NavLink>
          <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="true"
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="w-6 h-6 text-white" />
      {/* <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg> */}
    </button> 
          </div>
  
    {isOpen &&
    <div className="w-full" id="navbar-default">
    <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-900 rtl:space-x-reverse dark:bg-gray-900 dark:border-gray-700">
    {navigationLeft.map(item => (
            <li key={item.name} className="flex">
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? activeStyleMobile : 'px-2 w-full hover:bg-gray-800 rounded-lg py-1.5 duration-200 ease-in'}
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </li>
        ))}
        <div className="w-full my-2 px-2 border-b border-gray-500">
        </div>
        {navigationRight.map(item => (
          item.href !== '/cart' && 
             (
                <li key={item.name}>
                  <NavLink 
                    to={item.href}
                    className={({ isActive }) => isActive ? activeStyle : 'flex px-2 hover:bg-gray-800 rounded-lg py-1.5 duration-200 ease-in'}
                    onClick={toggleMenu}
                  >
                    {item.href !== '/cart' ? 
                    item.name : 
                    <><ShoppingCartIcon className="h-5 w-5 mr-0.5 text-blue-500" /> <span className="mr-2">{cartProducts.length}</span></>
                    }
                  </NavLink>
               </li>    
            )
        ))}
    </ul>
        
  </div>     
    }
    
  </div>
</nav>

    </>
  );
};

export default Navbar;

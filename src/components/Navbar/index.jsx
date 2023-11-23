import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const activeStyle = 'flex bg-gray-700 font-normal rounded-lg px-2 py-1'; 
  const { count } = useContext(ShoppingCartContext)

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
    { name: 'My Order', href: '/cart' },
  ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }

  return (
    <nav className="flex justify-between items-center fixed w-full py-5 px-12 text-sm font-light top-0 z-50 bg-black/80">
      <ul className="flex items-center text-white gap-0.5">
        <li className="font-semibold text-lg mr-3">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        {navigationLeft.map(item => {
          // const active = pathname === item.href;
          // console.log(pathname);
          return (
            <li key={item.name} className="flex">
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? activeStyle : 'px-2'}
              >
                {item.name}
              </NavLink>
            </li>
          )
        })}
        {/* <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/furniture" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Others
          </NavLink>
        </li> */}
      </ul>
      <ul className="flex items-center text-white gap-3">
      <li className="text-gray-400">toxedev@gmail.com</li>
      {navigationRight.map(item => {
          return (
            <li key={item.name}>
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? activeStyle : 'flex'}
              >
                {item.href !== '/cart' ? 
                item.name : 
                <><ShoppingCartIcon className="h-5 w-5 mr-0.5 text-blue-500" /> <span>{count}</span></>
                }
              </NavLink>
            </li>
          )
        })}
        {/* <li className="text-gray-400">toxedev@gmail.com</li>
        <li>
          <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My Orders
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-order" className={classNames(({ isActive }) => isActive ? activeStyle : undefined, 'flex')}>
            <ShoppingCartIcon className="h-5 w-5 mr-0.5" /> {count}
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

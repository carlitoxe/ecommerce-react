import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
// import ProductDetail from "../../components/ProductDetail";
// import ProductModal from "../../components/ProductModal";
import ProductDetailSide from "../../components/ProductDetailSide";
import { ShoppingCartContext } from "../../context";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Home() {
  // const [products, setProducts] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const { searchedProducts, searchValue, onSearchValue, isLoading } = useContext(ShoppingCartContext);

  const { category } = useParams();
  // console.log(category);

  const categoryName = category?.replace('-', ' ').replace('mens', "men's");
  const filteredByCategory = category ? 
                              searchedProducts?.filter(product => product.category === categoryName) : 
                              searchedProducts;

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const response = await fetch(`${apiUrl}/products`);
  //   //     const data = await response.json();
  //   //     console.log(products);
  //   //     setProducts(data);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // }
  //   // fetchData();
  //   setIsLoading(true);
  //   fetch(`${apiUrl}/products`)
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(err => console.error(err))
  //     .finally(() => setIsLoading(false))
  // }, [])

  // const Products = () => {
  //   return (
  //     products?.map(product => (
  //       <Card key={product.id} {...product}/>
  //     ))
  //   )
  // }



  return (
    <>
      <div className="flex items-center relative justify-center mt-2 mb-3">
        <h1 className="text-center text-2xl capitalize">{categoryName ? categoryName : 'All Products'}</h1>
      </div>
      <div className="flex justify-center items-center">
        <form className="w-80 mb-7">

    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        {/* <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg> */}
      </div>
      {/* <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required=""
      /> */}

  <input
          type="text"
          placeholder="Search for a product..."
          className="block w-full px-4 ps-10 py-1.5 pl-5 border rounded-lg bg-transparent border-gray-300 placeholder-gray-400  text-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          value={searchValue} 
          onChange={onSearchValue}
      />
      {/* <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button> */}
    </div>
  </form>

      </div>

      {!isLoading ? 
        searchedProducts?.length ? 
      (
        <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
          {filteredByCategory?.map(product => (
            <Card key={product.id} {...product} />
          ))}
        </section>
      ) : <div className="mt-2 text-lg">No results found for: <span className="italic font-medium">"{searchValue}"</span></div>
      : (
        <div className="mt-5 h-screen">Loading...</div>
      )}
      {/* {openModal && (
      <ProductModal>
        <ProductDetail />
      </ProductModal>
     )} */}
      <ProductDetailSide />
    </>
  );
}

export default Home;

import { useState, useEffect, Suspense, useContext } from "react"
import { apiUrl } from "../../api"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail";
import ProductDetailSide from "../../components/ProductDetailSide";
import { ShoppingCartContext } from "../../context";
import ProductModal from "../../components/ProductModal";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useContext(ShoppingCartContext);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`${apiUrl}/products`);
    //     const data = await response.json();
    //     console.log(products);
    //     setProducts(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchData();
    setIsLoading(true);
    fetch(`${apiUrl}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [])

  // const Products = () => {
  //   return (
  //     products?.map(product => (
  //       <Card key={product.id} {...product}/>
  //     ))
  //   )
  // }

  return (
    <>
      <p className="text-2xl">Home</p>
     {!isLoading ? 
     <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
     {
           products?.map(product => (
             <Card key={product.id} {...product}/>
           ))
     }

   </section> : <div className="mt-5 h-screen">Loading...</div>
     } 
     {/* {openModal && (
      <ProductModal>
        <ProductDetail />
      </ProductModal>
     )} */}
     <ProductDetailSide />
    </>
  )
}


export default Home

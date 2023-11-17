import { useState, useEffect, Suspense } from "react"
import { apiUrl } from "../../api"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
     <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4">
     {
           products?.map(product => (
             <Card key={product.id} {...product}/>
           ))
     }

   </section> : <div className="mt-5">Loading...</div>
     } 
     <ProductDetail />
    </>
  )
}


export default Home

import { useLoaderData } from "react-router-dom";
import HomeImages from "./HomeImages";

const Home = () => {
    const products = useLoaderData();
    const allProducts = products.products;
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {
        allProducts.map( (product) => <HomeImages key={product.id} product={product} ></HomeImages> )
      }
    </div>
  );
};

export default Home;

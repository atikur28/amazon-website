import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const products = useLoaderData();
    const allProducts = products.products;
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {
                allProducts.map( product => <Product key={product.id} product={product} ></Product> )
            }
        </div>
    );
};

export default Products;
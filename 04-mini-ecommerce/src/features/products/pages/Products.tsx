import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import type { Products } from "../models/Product";

function Products() {
    const [products, setProducts] = useState<Products>([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    // Utiliser le composant ProductList pour afficher les products
    return (
        <>
            <h1>Products</h1>
            <ProductList products={products} />
        </>
    );
}
export default Products;

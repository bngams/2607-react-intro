import type { Products } from "../models/Product"
import ProductCard from "./ProductCard";

function ProductList({ products } : { products: Products }) {
    return (
        <div style={{ padding: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem" }} >
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductList;
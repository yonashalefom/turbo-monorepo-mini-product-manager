import {Product} from "@repo/types";

export default async function Products() {
    const response = await fetch(`${process.env.API_URL}/products`, {
        next: {tags: ["products"]}
    });

    const products: Product[] = await response.json()

    return (
        <div>
            <br/>
            <h1>Products</h1>
            <div>{
                products.map((product) => (
                    <div key={product.id}>
                        <h2>Name: {product.name}</h2>
                        <p>Price: {product.price}</p>
                    </div>
                ))
            }</div>
        </div>
    );
}

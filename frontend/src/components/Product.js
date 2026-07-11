import React, { useState, useEffect } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        if (result) setProducts(result);
    }

    return (
        <div className="product-list-container">
            <h1>Product List</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>₹{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product;
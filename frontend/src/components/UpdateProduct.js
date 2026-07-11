import React from 'react';

const UpdateProduct = () => {

    const updateProduct = async () => {}
    return (
        <div className="add-product-container">
        <h1>Update Product</h1>
        <input type="text" placeholder='Enter product name'  />

        <input type="number" placeholder='Enter product price' />

        <input type="text" placeholder='Enter product category' />

        <input type="text" placeholder='Enter product company' />

        <button onClick={updateProduct} className="signup-btn">Update Product</button>
    </div>
    )
}

export default UpdateProduct;
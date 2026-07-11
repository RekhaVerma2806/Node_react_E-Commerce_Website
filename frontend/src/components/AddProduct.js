import React, {useState} from 'react';

const AddProduct = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const addProduct = async () => {
        console.warn(name, price, category, company);
    }

    return (
    <div className="add-product-container">
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        <input type="text" placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} />
        <input type="text" placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} />
        <button onClick={addProduct} className="signup-btn">Add Product</button>
    </div>
    )
}

export default AddProduct;
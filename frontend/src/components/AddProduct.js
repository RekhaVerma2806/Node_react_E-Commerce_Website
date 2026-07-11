import React, { useState } from 'react';

const AddProduct = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct = async () => {
        if(!name || !price || !category || !company){
            
            setError(true);
            return false;
        }
        // console.warn(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.warn(userId);
        const result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({name, price, category, company, userId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.warn(data);
    }

    return (
    <div className="add-product-container">
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} />
        <span className="error">{error && !name && <span className="invalid-input">Enter valid name</span>}</span>

        <input type="number" placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        <span className="error">{error && !price && <span className="invalid-input">Enter valid price</span>}</span>

        <input type="text" placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} />
        <span className="error">{error && !category && <span className="invalid-input">Enter valid category</span>}</span>

        <input type="text" placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} />
        <span className="error">{error && !company && <span className="invalid-input">Enter valid company</span>}</span>

        <button onClick={addProduct} className="signup-btn">Add Product</button>
    </div>
    )
}

export default AddProduct;
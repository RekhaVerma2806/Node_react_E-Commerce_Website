import React , {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(params);
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    };

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, category, company })
        });
        result = await result.json();
        if (result) {
            navigate('/products');
        }
    };

    return (
        <div className="add-product-container">
        <h1>Update Product</h1>
        <input type="text" placeholder='Enter product name' value={name} onChange={(e) => setName(e.target.value)} />

        <input type="number" placeholder='Enter product price' value={price} onChange={(e) => setPrice(e.target.value)} />

        <input type="text" placeholder='Enter product category' value={category} onChange={(e) => setCategory(e.target.value)} />

        <input type="text" placeholder='Enter product company' value={company} onChange={(e) => setCompany(e.target.value)} />

        <button onClick={updateProduct} className="signup-btn">Update Product</button>
    </div>
    )
}

export default UpdateProduct;
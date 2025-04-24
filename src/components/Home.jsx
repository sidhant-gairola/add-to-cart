import './Home.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useState } from 'react';

import img1 from '/product-image-1.png';
import img2 from '/product-image-2.jpg';
import img3 from '/product-image-3.jpg';
import img4 from '/product-image-4.jpg';
import img5 from '/product-image-5.jpg';
import img6 from '/product-image-6.jpg';

const Home = () => {

  const [clicked, setClicked] = useState([]);

  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "product1", price: "2999", image: img1 },
    { id: 2, name: "product2", price: "999", image: img2 },
    { id: 3, name: "product3", price: "499", image: img3 },
    { id: 4, name: "product4", price: "5500", image: img4 },
    { id: 5, name: "product5", price: "120", image: img5 },
    { id: 6, name: "product6", price: "570", image: img6 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setClicked((prev) => [...new Set([...prev,product.id])]);
  };

  return (
    <div>
      <div className="product-info">
        {products.map((product) => (
          <div key={product.id} className='product-list'>
            <span className='product-image-container'>
              <img src={product.image} alt="image" className='product-image' />
            </span>
            <span>
              <h2>{product.name}</h2>
              <p>₹{product.price}</p>
            </span>
            <button onClick={() => handleAddToCart(product)}>{clicked.includes(product.id)? "Added to cart" : " Add to cart"}</button>
          </div>
        ))};
      </div>
    </div>
  )
}

export default Home

// ProductPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProductData(productId)
      .then((data) => setProductData(data))
      .catch((error) => console.log(error));
  }, [productId]);

  const fetchProductData = (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productData = {
          images: [
            'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
            'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
            'https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=1480&t=st=1687071810~exp=1687072410~hmac=19de2f1e5033db16e211c8153e05f96671ef8a369e286889aa4f932cb4088e7e',
        ],
          reviews: [
            { id: 1, rating: 4, comment: 'Great product!' },
            { id: 2, rating: 5, comment: 'Highly recommended!' },
            { id: 3, rating: 3, comment: 'Average quality.' },
          ],
        };
        resolve(productData);
      }, 1000);
    });
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { images, reviews } = productData;

  return (
    <div className="product-page">
      <h2>Product Details</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product Image ${index + 1}`} />
        ))}
      </div>
      <h3>Reviews</h3>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id}>
            <div>Rating: {review.rating}</div>
            <div>Comment: {review.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

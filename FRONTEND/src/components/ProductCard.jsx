import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/productCard.css"
import "../styles/other.css"

const ProductCard = ({ product }) => {
    return (
        <div className='product-card'>
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <div className='product-name'>
                <h3 className='product-name'>{product.name}</h3>
                <p className='product-price'>${product.price.toFixed(2)}</p>
                <Link to={`/product/${product._id}`} className='view-details-btn'>
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
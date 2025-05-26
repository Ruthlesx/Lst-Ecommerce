import React from 'react';
import styles from './products.module.css';
import { useGetProductsQuery } from '../../products/productApi'
//import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';



const Products: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('');
  const [visibleCount, setVisibleCount] = useState(8); // Show 4 products initially

  const handleLoadMore = () => {
    setVisibleCount(data?.products.length || 0); // Show all products on click
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <section className={styles['products-section']}>
      <div className={styles['products-container']}>
        <div className={styles['products-header']}>
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>

        <div className={styles['products-item']}>
          <div className={styles['products-item-top']}>
            {data?.products
              .slice(0, visibleCount) // 🔥 Show only a few
              .map((product: any) => (
                <div key={product.id} className={styles['products-card']}>
                  <img src={product.thumbnail} alt={product.title} />

                  <div className={styles['products-text']}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                  </div>

                  <h4 className={styles['products-prices']}>
                    <span className={styles['ProductPrice']}>${product.price}</span>{' '}
                    <span className={styles['ProductDiscount']}>${product.discountPercentage}</span>
                  </h4>
                </div>
              ))}
          </div>
        </div>

        {/* ✅ Only show button if there are hidden products */}
        {visibleCount < (data?.products.length || 0) && (
          <div>
            <button onClick={handleLoadMore} className={styles['products-button']}>
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
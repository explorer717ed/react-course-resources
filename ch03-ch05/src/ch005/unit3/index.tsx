import React, { useState, useMemo, useEffect } from 'react';

interface Product { id: number; name: string; category: string; price: number; rating: number; }
// Sample product data
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, rating: 4.5 },
  { id: 2, name: 'Shoes', category: 'Fashion', price: 50, rating: 4.2 },
  { id: 3, name: 'Phone', category: 'Electronics', price: 700, rating: 4.7 },
  { id: 4, name: 'T-shirt', category: 'Fashion', price: 20, rating: 4.0 },
  // ... more products
];

const List: React.FC<{list: Product[]}> = ({list}) => {
  console.log('render list', list);
  
  return (
    <div>
      <h2>Filtered Products</h2>
      <ul>
        {list.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - Rating: {product.rating}
          </li>
        ))}
      </ul>
    </div>
  )
}

const ProductSearch = () => {
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPrice, setFilterPrice] = useState(0);
  const [filterRating, setFilterRating] = useState(0);

  // Memoizing the filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...'); // This will only log when dependencies change
    return products.filter(product => {
      return (
        (filterCategory === '' || product.category === filterCategory) &&
        product.price >= filterPrice &&
        product.rating >= filterRating
      );
    });
  }, [filterCategory, filterPrice, filterRating]);



  // Comparison: useState + useEffect 
  // 1. useState set prev value when re-render
  // 2. useEffect triggered
  // 3. setFilteredProducts happened and set another value
  // --> hence, <List> component re-render twice by 1&3.
  /*
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    console.log('Filtering products...');
    setFilteredProducts(
      products.filter(product => {
        return (
          (filterCategory === '' || product.category === filterCategory) &&
          product.price >= filterPrice &&
          product.rating >= filterRating
        );
      })
    );
  }, [filterCategory, filterPrice, filterRating]);
  */


  return (
    <div>
      <h1>Product Search</h1>
      
      <div>
        <label>
          Category:
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
        </label>

        <label>
          Min Price:
          <input
            type="number"
            value={filterPrice}
            onChange={(e) => setFilterPrice(parseInt(e.target.value))}
          />
        </label>

        <label>
          Min Rating:
          <input
            type="number"
            value={filterRating}
            onChange={(e) => setFilterRating(parseFloat(e.target.value))}
            step="0.1"
          />
        </label>
      </div>

      <List list={filteredProducts}/>
    </div>
  );
};

export default ProductSearch;
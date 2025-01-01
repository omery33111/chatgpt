"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const Products = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {

      // Fetch products from the API (this runs on the server-side in Next.js 13 unless it has "{ cache: 'force-cache' }" that makes it run SSG)
      const res = await fetch('https://fakestoreapi.com/products', { cache: 'force-cache' });
      const data: Product[] = await res.json();
      setProducts(data);
    };

    fetchProducts(); // Fetch data on component mount
  }, []);

  const handleNavigate = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleNavigate(product.id)}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
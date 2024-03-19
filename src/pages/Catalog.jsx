import './Catalog.css';
import Product from '../components/Product';

function Catalog() {
  const data = [
    {
      title: 'Green shorts',
      price: 34.99,
      category: 'tops',
      image: 'men-shrt1.jpeg',
      _id: '001',
    },
    {
      title: 'Lightblue shorts',
      price: 47.99,
      category: 'bottoms',
      image: 'men-shrt2.jpg',
      _id: '002',
    },
    {
      title: 'Joggers',
      price: 62.99,
      category: 'bottoms',
      image: 'men-shrt3.jpeg',
      _id: '003',
    },
    {
      title: 'Stringers',
      price: 24.99,
      category: 'tops',
      image: 'men-shrt4.jpeg',
      _id: '004',
    },
  ];

  return (
    <div className="catalog page">
      <h2>Shop our products!</h2>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;

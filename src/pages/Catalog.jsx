import './Catalog.css';
import Product from '../components/Product';

function Catalog() {
  const data = [
    {
      title: 'Oversized Pump Cover',
      price: 34.99,
      category: 'tops',
      image: 'img1.jpg',
      _id: '001',
    },
    {
      title: 'Compression shorts',
      price: 47.99,
      category: 'bottoms',
      image: 'img2.jpg',
      _id: '002',
    },
    {
      title: 'Joggers',
      price: 62.99,
      category: 'bottoms',
      image: 'img3.jpg',
      _id: '003',
    },
    {
      title: 'Stringers',
      price: 24.99,
      category: 'tops',
      image: 'img4.jpg',
      _id: '004',
    },
  ];

  return (
    <div className="catalog page">
      <h2>Shop our products!</h2>
      <Product info={data[0]}></Product>
      <Product info={data[1]}></Product>
    </div>
  );
}

export default Catalog;

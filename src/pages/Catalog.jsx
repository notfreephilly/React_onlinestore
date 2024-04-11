import './Catalog.css';
import Product from '../components/Product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Catalog() {
  const [data, setData] = useState([]);

  async function loadData() {
    let service = new DataService();
    let cat = await service.getCatalog();
    setData(cat);
  }

  useEffect(function () {
    loadData();
  }, []);

  return (
    <div className="catalog page">
      <h2>Flex Your Next Fit</h2>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;

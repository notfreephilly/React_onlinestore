import { useState } from 'react';
import './Admin.css';
import DataService from '../services/dataService';

function Admin() {
  const [coupon, setCoupon] = useState({
    code: '',
    discount: '',
  });
  const [allCoupons, setAllCoupons] = useState([]);
  const [products, setProducts] = useState({
    title: '',
    category: '',
    image: '',
    price: '',
  });
  const [allProducts, setAllProducts] = useState([]);

  // COUPON FUNCTIONS

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    // console.log(name);

    let couponCopy = { ...coupon }; //contents of coupon and putting it in a new variable

    couponCopy[name] = val; //current val of input
    setCoupon(couponCopy); //equal to the updated coupon

    // setCoupon({...coupon, e})

    // console.log(name, val);
  }

  function saveCoupon() {
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
    console.log(coupon);
  }

  // PRODUCT FUNCTIONS
  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    let productCopy = { ...products };
    productCopy[name] = val;
    setProducts(productCopy);

    console.log(name, val);
  }

  function saveProduct() {
    products.price = parseFloat(products.price);

    let copy = [...allProducts];
    copy.push(products);
    setAllProducts(copy);
    console.log(products);

    // send product to the server
    let service = new DataService();
    service.saveProduct(products);
  }

  return (
    <div className="admin page">
      <h1>Admin Portal</h1>
      <div className="parent">
        <div className="prods form">
          <h4>Products</h4>
          <div className="products">
            <label className="form-label">Title:</label>
            <input
              onChange={handleProductChange}
              name="title"
              type="text"
              className="form-control"
            />
          </div>
          <div className="products">
            <label className="form-label">Category:</label>
            <input
              onChange={handleProductChange}
              name="category"
              type="text"
              className="form-control"
            />
          </div>
          <div className="products">
            <label className="form-label">Image:</label>
            <input
              onChange={handleProductChange}
              name="image"
              type="text"
              className="form-control"
            />
          </div>
          <div className="products">
            <label className="form-label">Price:</label>
            <input
              onChange={handleProductChange}
              name="price"
              type="text"
              className="form-control"
            />
          </div>
          <button onClick={saveProduct} className="btn btn-dark">
            Save Product
          </button>
          <ul>
            {allProducts.map((e) => (
              <li>
                {e.title} - {e.category} - ${e.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="coupons form">
          <h4>Coupons</h4>
          <div>
            <label className="form-label">Code</label>
            <input
              onChange={handleCouponChange}
              name="code"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Discount</label>
            <input
              onChange={handleCouponChange}
              name="discount"
              type="text"
              className="form-control"
            />
            <div className="action">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save Coupon
              </button>
            </div>
          </div>
          <ul>
            {allCoupons.map((c) => (
              <li>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;

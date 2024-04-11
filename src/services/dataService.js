import axios from 'axios';

const data = [
    {
      title: 'Blue "Show Your Pump" Cover',
      price: 14.99,
      category: 'tops',
      image: 'rflx-blue.jpeg',
      _id: '001',
    },
    {
      title: 'Black "Show Your Pump" Cover',
      price: 14.99,
      category: 'tops',
      image: 'rflx-blk.jpeg',
      _id: '002',
    },
    {
      title: 'Two-Toned Reflex Origins Cover',
      price: 14.99,
      category: 'tops',
      image: 'rflx-blkgry.jpeg',
      _id: '003',
    },
    {
      title: 'Black Flex Cover w/ Red Inseam',
      price: 14.99,
      category: 'tops',
      image: 'blk-flex.jpeg',
      _id: '004',
    },
    {
      title: 'Gray Ranked Basic Pump Hoodie',
      price: 29.99,
      category: 'jackets',
      image: 'gray-hood.jpeg',
      _id: '005',
    },
    {
      title: 'White "Point&Flex" Pump Hoodie',
      price: 29.99,
      category: 'jackets',
      image: 'wht-hood.jpeg',
      _id: '006',
    },
    {
      title: 'Womens Sports Top - REFLEX Limited Edition',
      price: 34.99,
      category: 'tops',
      image: 'wmn-top.jpeg',
      _id: '007',
    },
    {
      title: 'Gray REFLEX Joggers for Her - Cozy Wear',
      price: 54.99,
      category: 'bottoms',
      image: 'wmn-jog.jpeg',
      _id: '008',
    },
    {
      title: 'Dark Blue REFLEX Joggers for Her - Cozy Wear',
      price: 54.99,
      category: 'bottoms',
      image: 'blu-jog.jpeg',
      _id: '009',
    },
    {
      title: 'Black REFLEX Joggers for Her - Cozy Wear',
      price: 54.99,
      category: 'bottoms',
      image: 'blk-jog.jpeg',
      _id: '010',
    },
];
  

class DataService {
    async getCatalog() {
        // without a server
        // return data;

        // Call the server
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

   async saveProduct(products) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", products)
        return response.data;
    }
}

export default DataService;
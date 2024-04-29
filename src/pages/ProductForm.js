import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductForm.css';

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    image: '',
    brand: '',
    category: '',
    category_name: '',
    description: '',
    rating: '',
    numReviews: '',
    price: '',
    countinStock: '',
    lat: '',
    lng: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend API
      const response = await axios.post('/api/products/create/', formData);

      // Handle successful response (optional)
      console.log('Product created:', response.data);

      // Clear form fields after submission
      setFormData({
        name: '',
        slug: '',
        image: '',
        brand: '',
        category: '',
        category_name: '',
        description: '',
        rating: '',
        numReviews: '',
        price: '',
        countinStock: '',
        lat: '',
        lng: '',
      });
    } catch (error) {
      // Handle error (optional)
      console.error('Error creating product:', error);
    }
  };

  useEffect(() => {
    // Fetch additional data from the backend (e.g., category options, farmer name, lat, lng, etc.)
    const fetchData = async () => {
      try {
        // Fetch category options from the backend
        const categoryOptionsResponse = await axios.get('/api/categories/');
        // Assuming the response data contains category options in an array format
        const categoryOptions = categoryOptionsResponse.data;

        // Update the state with fetched category options
        setFormData((prevFormData) => ({
          ...prevFormData,
          category: categoryOptions[0], // Assuming the first option is the default selected option
          category_name: categoryOptions[0], // Assuming the first option is the default selected option
        }));

        // Fetch additional backend data as needed (e.g., lat, lng, farmer name, etc.)
        // Update the state with fetched data accordingly
      } catch (error) {
        console.error('Error fetching additional data:', error);
      }
    };

    fetchData();
  }, []); // Ensure the effect runs only once after the initial render

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      </div>
      <div className="form-group">
        <input type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="Slug" />
      </div>
      <div className="form-group">
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      </div>
      <div className="form-group">
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" />
      </div>
      <div className="form-group">
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      </div>
      <div className="form-group">
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" />
      </div>
      <div className="form-group">
        <input type="text" name="numReviews" value={formData.numReviews} onChange={handleChange} placeholder="Number of Reviews" />
      </div>
      <div className="form-group">
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
      </div>
      <div className="form-group">
        <input type="text" name="countinStock" value={formData.countinStock} onChange={handleChange} placeholder="Count in Stock" />
      </div>
      <div className="form-group">
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Vegetable">Vegetable</option>
          <option value="Poultry">Poultry</option>
        </select>
      </div>
      <div className="form-group">
        <input type="text" name="lat" value={formData.lat} onChange={handleChange} placeholder="Latitude" />
      </div>
      <div className="form-group">
        <input type="text" name="lng" value={formData.lng} onChange={handleChange} placeholder="Longitude" />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  );
}

export default ProductForm;

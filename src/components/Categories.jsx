import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';







const Categories = () => {

  const [category, setCategory] = useState([]);

  function getCategory() {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      console.log(res.data);
      setCategory(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCategory()
  }, [])



  return (
    <div>

     

        {category.map((category) => (

          <Link to={category}>  <div className="flex m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category}</h5>

          </div></Link>



        ))}
     
    </div>
  )
}

export default Categories
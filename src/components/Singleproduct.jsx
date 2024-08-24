import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Singleproduct() {

const [product1, setProduct1]=useState({});
const params = useParams();
console.log(params);

    function getProduct(){
    axios.get("https://fakestoreapi.com/products/" + params.id).then((res)=>{
    console.log(res.data);
    setProduct1(res.data);
}).catch((err)=>{
    console.log(err);
})
    }

    useEffect(()=>{
getProduct();
    },[])

    const { id, title, price, description, category, image, rating } = product1;

  return (
    <div>
        single params{params.id}
          <div className="bg-gray-100 dark:bg-gray-800 p-8  m-10 -ml-10 ">

              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="flex flex-col md:flex-row -mx-4">
                    
                      <div className="md:flex-1 px-4 ">

                          <div className="h-[420px] w-[400px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4   ml-16 ">

                              <img className=" h-full w-full  " src={image} alt="Product Image"/>
                              
                          </div>

                         
                      </div>
                      <div className="md:flex-1 px-4">
                          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h2>
                                                   <div >
                              <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                              <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                          </div>
                          <div className="flex mb-4 mt-2">
                              <div className="flex mr-4">
                                  <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                  <span className="text-gray-600 dark:text-gray-300"> ${price}</span>
                              </div>
                              <div className="flex items-center ">
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                  {/* <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating.rate} </span> */}
                              </div>
                              
                          </div>
                          
 <div >
                              <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                              <span className="text-gray-600 dark:text-gray-300">{category}</span>
                          </div>



                          
                          <div className='pt-2'>
                              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                              <p className="text-gray-600 dark:text-gray-300 text-inherit mt-2">
                                 {description}
                              </p>
                          </div>
                          <div className="flex -mx-2 mb-4 mt-10">
                              <div className="w-1/2 px-2">
                                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                              </div>

                          </div>
                          </div>
                  </div>
              </div>
          </div>



        <div>
        


    
          </div>
    </div>
  )
}

export default Singleproduct
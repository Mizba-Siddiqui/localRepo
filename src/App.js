import React from "react";
import Navbar from "./components/Navbar";
import './index.css';
import AllProducts from "./components/AllProducts";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart";
import Singleproduct from "./components/Singleproduct";
import LoginForm from "./components/Form";
import Users from "./components/Users";
import Categories from "./components/Categories";
import SingleCatogory from "./components/SingleCatogory";

// import Error from "./components/Error";
    
  





function App() {

  return (

    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path="/products" element={<AllProducts />}/>
          <Route path="/products/:id" element={<Singleproduct/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories/>}/> 
          <Route path="/categories/:category" element={<SingleCatogory/>}/>
          
          <Route path="/users" element={<Users/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          {/* <Route path="*" element={<Error/>}/> */}
      </Routes>
      </BrowserRouter>
            
    
      
    </>
  );
}

export default App;

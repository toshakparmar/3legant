import React, { useState, useEffect } from 'react'
import { HeroShop, Nav, MiniCard, Newsletter, Footer } from '../components'
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { handleError } from '../utils.js';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer } from 'react-toastify';

import { HeroImage, Filter, Sofa } from "../assets/resources";

const Shop = () => {

  const [loggedInUser, setLoggedInUser] = useState('');

  const [products, setProducts] = useState([]);

  const [sortByCategory, setSortByCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSortBy = (event) => {
    setTimeout(() => {
      setSortBy(event.target.value);
      console.log(event.target.value);  
    }, 1000)
  
    try{
      const url = `http://localhost:8000/products?sortByDirection=${sortBy}`;
      const response = fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem('token')}`
        },
      });
      if(response.status === 200){
        const result = response.json();
        const {products} = result;
        setProducts(products);
      }
    }catch(error){
      handleError(error);
    }
  }
  const handleSortByCategory = (event) => {
    setTimeout(() => {
      setSortByCategory(event.target.value);
      console.log(event.target.value);  
    }, 1000)
    
    try{
      const url = `http://localhost:8000/products?sortByCategory=${sortByCategory}`;
      const response = fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem('token')}`
        },
      });
      if(response.status === 200){
        const result = response.json();
        const {products} = result;
        setProducts(products);
      }
    }catch(error){
      handleError(error);
    }
  }
  const handleSortByPrice = (event) => {
    setTimeout(() => {
      setSortByPrice(event.target.value);
      console.log(event.target.value);
      const {minPrice, maxPrice} = sortByPrice.split('-'); //minPrice   
    }, 1000)

    try{
      const url = `http://localhost:8000/products?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      const response = fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem('token')}`
        },
      });
      if(response.status === 200){
        const result = response.json();
        const {products} = result;
        setProducts(products);
      }
    }catch(error){
      handleError(error);
    }
  }

  const getProducts = async (req, res) => {
    try {
      const url = "http://localhost:8000/products";
      const response = await fetch(url, {
        method: "GET",
				headers: {
					"Content-Type": "application/json",
          "Authorization": `${localStorage.getItem('token')}`
				}
      });
      if(response.status === 200){
        const result = await response.json();
        const {products} = result;
        setProducts(products);
        res.status(200).json({products: products, success: true});
      }else if(response.status === 401){
        handleError("Products not Found");
      }
    }catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
		localStorage.getItem('loggedInUser') && setLoggedInUser(localStorage.getItem('loggedInUser'));
    getProducts();    
	},[products]);

  return (
    <>
    <Nav loggedInUser={loggedInUser}/>
    <div className="home  ">
      <div className="content  ">
        <HeroShop
          image={HeroImage}
          title="Shop Page"
          page="Shop"
          description="Let’s design the place you always imagined."
        />
        <div className=" py-20 mx-10  gap-10 flex justify-between  max-sm:mx-4  max-sm:gap-14 max-sm:flex-wrap max-sm:items-center  max-md:mx-10 max-md:gap-20 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[180px]">
          <div className="head flex flex-col">
            <div className="head2 flex items-center justify-between flex-wrap">
              <div className="flex gap-2">
              <div className="sortBy">
              <Select
                  placeholder="Select Category"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                  onChange={handleSortByCategory}
                  value={sortByCategory}
                >
                  <Option value="66e72af811327b8f35e4d754">All rooms</Option>
                  <Option value="66e7295f11327b8f35e4d748">Living Room</Option>
                  <Option value="66e729aa11327b8f35e4d74c">Bedroom</Option>
                  <Option value="66e7299811327b8f35e4d74a">Kitchen</Option>
                  <Option value="66e72aa511327b8f35e4d74e">Bathroom</Option>
                  <Option value="66e72ab311327b8f35e4d750">Dinner</Option>
                  <Option value="66e72ad811327b8f35e4d752">Outdoor</Option>
                </Select>
              </div>
              <div className="sortBy">
              <Select
                  placeholder="Select Price"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                  onChange={handleSortByPrice}
                  value={sortByPrice}
                >
                  <Option value="allPrices">All Prices</Option>
                  <Option value="0-9999">&#x20B9;0 - &#x20B9;9999</Option>
                  <Option value="10000-19999">&#x20B9;10000 - &#x20B9;19999</Option>
                  <Option value="20000-29999">&#x20B9;20000 - &#x20B9;29999</Option>
                  <Option value="30000-39999">&#x20B9;30000 - &#x20B9;39999</Option>
                  <Option value="40000+">&#x20B9;40000+</Option>
                </Select>
              </div>
              </div>
              <div className="sortBy">
                <Select
                  placeholder="Sort By"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                  onChange={handleSortBy}
                  value={sortBy}
                >
                  <Option value="asc">Ascending</Option>
                  <Option value="desc">Descending</Option>
                </Select>
              </div>
            </div>
            <div className="cards flex gap-10 items-center mt-10 flex-wrap max-sm:gap-2  ">
              {products?.map((product) => (  
                <MiniCard
                  product={product.name}
                  image={`/3legant-E-Commerce/${product.image}`}
                  price={product.price}
                  id={product._id}
                  oldPrice={product.price * 1.5}
                  rating={product.rating}
                  newTag
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='text-gray-800 border-2 border-gray-800 font-inter font-semibold py-2 px-4 rounded-full transition duration-300 mb-10'>Show More</div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Shop
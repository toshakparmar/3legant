import React, { useEffect, useState } from 'react'
import { Nav, Footer } from '../components'
import SingleProduct from '../pages/SingleProduct'

const Product = () => {

  const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		localStorage.getItem('loggedInUser') && setLoggedInUser(localStorage.getItem('loggedInUser'));
	},[]);

  return (
    <div>
      <Nav loggedInUser={loggedInUser} />
      <SingleProduct />
      <Footer />
    </div>
  )
}

export default Product
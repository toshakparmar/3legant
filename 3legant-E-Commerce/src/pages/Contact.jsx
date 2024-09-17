import React, { useState, useEffect } from 'react'
import { Nav, Footer, NotificationBar } from '../components'
import Baner from "../components/Baner";
import CardContact from "../components/CardContact";
import MacroCard from "../components/MacroCard";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";

const Contact = () => {

  const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		localStorage.getItem('loggedInUser') && setLoggedInUser(localStorage.getItem('loggedInUser'));
	},[]);

  return (
    <div>
      <NotificationBar />
      <Nav loggedInUser={loggedInUser} />
      <div className="contactus ">
      <div className="content mx-48 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
        <div className="header-page flex items-center mt-4">
          <div className="right flex items-center gap-1">
            <div className="home font-int text-[#605F5F] text-sm font-medium">
              <Link to="/">Home</Link>
            </div>
            <div className="image ">
              <img src="/assets/resources/chevron-right.png" alt="" />
            </div>
          </div>
          <div className="textCon text-[#121212] font-int font-medium text-sm ml-4">
            Contact Us
          </div>
        </div>
        <div className="maincontent flex flex-col mr-[30vw] gap-6 mt-10  max-sm:mr-[19vw]">
          <div className="title text-[#141718] font-pop text-6xl font-medium max-sm:text-[30px] w-full">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </div>
          <div className="description text-[#141718] font-int text-base font-normal">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </div>
        </div>
        <div className="my-12">
          <Baner />
        </div>
        <div className="content flex flex-col items-center justify-center">
          <div className="title text-[#121212] font-pop text-4xl font-medium">
            Contact Us
          </div>
          <div className="cards my-10 flex items-center justify-center gap-6 flex-wrap">
            <CardContact
              image="/assets/resources/store.svg"
              title="Address"
              subtitle="234 Hai Trieu, Ho Chi Minh City, 
Viet Nam"
            />
            <CardContact
              image="/assets/resources/call2.svg"
              title="Contact Us"
              subtitle="+84 234 567 890
"
            />
            <CardContact
              image="/assets/resources/mail.svg"
              title="Email"
              subtitle="hello@3legant.com
"
            />
          </div>
        </div>
        <div className="form pb-20 flex items-center justify-center gap-28 max-sm:gap-14 max-xl:flex-wrap ">
          <Form />
          <div className="div relative flex items-center justify-center">
            <img src="/assets/resources/harta.png" alt="" />
            <div className="div2 absolute flex items-center justify-center">
              <img src="/assets/resources/location.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="macro-cards bg-[#F3F5F7] flex items-center justify-center gap-20 flex-wrap">
        <MacroCard
          image="/assets/resources/delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="/assets/resources/money.svg"
          title="Money-back"
          description="30 days guarantee"
        />
        <MacroCard
          image="/assets/resources/lock.svg"
          title="Secure Payments"
          description="Secured by Stripe"
        />
        <MacroCard
          image="/assets/resources/call.svg"
          title="24/7 Support"
          description="Phone and Email support"
        />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact

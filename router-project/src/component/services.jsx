
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './services.css'
function Services() {
    const navigate = useNavigate()
    function handlechange (){
        navigate('/')
    }
  return (
    <div>
       
     
      <button onClick={handlechange} >Go back to home </button>
      

      <div className="services">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>At <strong>ShopEase</strong>, we offer a wide range of services to make your shopping experience smooth and enjoyable. From fast deliveries to 24/7 customer support, we've got you covered.</p>
      </section>

      <section className="service-cards">
        <div className="service-card">
          <h2>Fast Delivery</h2>
          <p>Get your products delivered to your doorstep in record time. We offer express delivery options in select locations.</p>
        </div>

        <div className="service-card">
          <h2>24/7 Customer Support</h2>
          <p>Our dedicated customer service team is available 24/7 to assist you with your orders, inquiries, and any issues that may arise.</p>
        </div>

        <div className="service-card">
          <h2>Easy Returns & Exchanges</h2>
          <p>Not satisfied with your purchase? We offer a hassle-free return and exchange policy within 30 days of purchase.</p>
        </div>

        <div className="service-card">
          <h2>Secure Payments</h2>
          <p>We provide multiple secure payment options to ensure a worry-free transaction every time you shop with us.</p>
        </div>

        <div className="service-card">
          <h2>Exclusive Deals & Discounts</h2>
          <p>Sign up for our newsletter to receive exclusive deals, discounts, and offers available only to our loyal customers.</p>
        </div>
      </section>
    </div>
   
    </div>
  )
}

export default Services

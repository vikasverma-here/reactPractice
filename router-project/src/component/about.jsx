import React from 'react'
import { useNavigate } from 'react-router-dom'
import './about.css'
function About() {
    const navigate = useNavigate()
    function handlechange(){
       
        navigate("/")
    }
  return (
    <div>
      
       <button onClick={handlechange} > <h1>GO BACK TO HOME</h1> </button>
       <div className="about-us">
      <section className="about-intro">
        <h1>About ShopEase</h1>
        <p>
          Welcome to <strong>ShopEase</strong>, your go-to destination for a seamless online shopping experience. 
          We are passionate about bringing you the best products across a wide range of categories, including 
          fashion, electronics, home goods, and more. Since our inception, our mission has been to make shopping 
          convenient, enjoyable, and accessible to everyone.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At ShopEase, we believe shopping should be simple, hassle-free, and fun. Our goal is to provide an 
          easy-to-use platform where you can find top-quality products at competitive prices. We carefully 
          curate our collections to ensure that every product meets our high standards, so you can shop with 
          confidence.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Customer Satisfaction:</strong> We prioritize your happiness and strive to offer top-notch customer service, ensuring every order exceeds your expectations.</li>
          <li><strong>Quality Products:</strong> Every item in our store is selected with care to ensure it meets the highest quality standards.</li>
          <li><strong>Fast and Reliable Delivery:</strong> We offer fast delivery options so you can enjoy your purchases as soon as possible.</li>
          <li><strong>Secure Shopping:</strong> Our platform is designed with security in mind, offering multiple safe and secure payment options for a worry-free shopping experience.</li>
        </ul>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be a leader in the e-commerce industry by offering an unparalleled shopping experience 
          that combines quality, value, and convenience. We are constantly evolving, staying ahead of trends to 
          bring you the latest and greatest products from around the world.
        </p>
      </section>
    </div>
    </div>
  )
}

export default About
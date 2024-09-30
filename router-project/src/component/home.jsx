import React from 'react'
import './home.css'
function Home() {
  return (
    <div className="home">
    {/* Introduction Section */}
    <section className="intro">
      <h1>Welcome to ShopEase</h1>
      <p>Your one-stop shop for all your needs, delivering the best products right to your door.</p>
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>Why Shop with Us?</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Wide Range of Products</h3>
          <p>Explore a vast selection of products across various categories.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your products delivered within 24 hours in select locations.</p>
        </div>
        <div className="feature-card">
          <h3>Customer Support</h3>
          <p>24/7 customer support to help you with your orders and queries.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Multiple secure payment options for a seamless shopping experience.</p>
        </div>
      </div>
    </section>

    {/* More Information Section */}
    <section className="more-info">
      <h2>About ShopEase</h2>
      <p>At ShopEase, we believe in offering the best deals without compromising on quality. Our curated collections are sourced from the top brands, ensuring that you get the best value for your money. From electronics to fashion, we have everything you need to make your shopping experience smooth and enjoyable.</p>
    </section>
  </div>
  )
}

export default Home

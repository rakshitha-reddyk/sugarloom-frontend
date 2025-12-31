import React from "react";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-navbar">
      <Helmet>
        <title>SugarLoom | Artisan Cakes & Desserts</title>
        <meta property="og:title" content="SugarLoom" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.pexels.com/photos/30445121/pexels-photo-30445121.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="A stunning three-tier wedding cake adorned with vibrant red roses at a formal reception."
            className="hero-background-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </g>
              </svg>
              <span>Handcrafted With Love</span>
            </div>
            <h1 className="home-hero-title hero-title">
              Sweet Moments Woven Into Every Creation
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              From celebration cupcakes to bespoke wedding cakes, we transform
              your sweetest dreams into edible art. Discover flavors that linger
              and designs that captivate.
            </p>
            <div className="hero-cta-group">
              <button className="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </g>
                </svg>
                <span>View Our Catalog</span>
              </button>
              <button className="btn btn-lg btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <span>Book a Tasting</span>
              </button>
            </div>
          </div>
          <div className="hero-features">
            <div className="hero-feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                  <path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"></path>
                </g>
              </svg>
              <div className="hero-feature-text">
                <h3>Custom Designs</h3>
                <p>Personalized for your special day</p>
              </div>
            </div>
            <div className="hero-feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                ></path>
              </svg>
              <div className="hero-feature-text">
                <h3>Premium Ingredients</h3>
                <p>Quality you can taste</p>
              </div>
            </div>
            <div className="hero-feature-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                ></path>
              </svg>
              <div className="hero-feature-text">
                <h3>Award Winning</h3>
                <p>Recognized for excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="product-container">
          <div className="product-header">
            <h2 className="section-title">
              Bestsellers &amp; Seasonal Delights
            </h2>
            <p className="section-content">
              Explore our most loved creations and limited-time seasonal
              specials
            </p>
          </div>
          <div className="product-carousel-wrapper">
            <button
              id="productPrev"
              aria-label="Previous products"
              className="product-carousel-nav product-carousel-prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m12 19l-7-7l7-7m7 7H5"
                ></path>
              </svg>
            </button>
            <div id="productCarousel" className="product-carousel">
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Brightly colored cupcakes topped with raspberries and blueberries viewed from above."
                    className="product-image"
                  />
                  <div className="product-badge">
                    <span>Bestseller</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">Berry Bliss Cupcakes</h3>
                  <p className="product-description">
                    Light vanilla cake with fresh berry compote and cream cheese
                    frosting
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$4.50</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Close-up of a cupcake topped with strawberries, grapes, and chocolate curls, perfect for dessert lovers."
                    className="product-image"
                  />
                  <div className="product-badge product-badge-seasonal">
                    <span>Seasonal</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">Chocolate Decadence</h3>
                  <p className="product-description">
                    Rich dark chocolate cake with ganache and fresh fruit
                    topping
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$5.25</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/4887830/pexels-photo-4887830.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="A pink blueberry cake topped with fresh berries and surrounded by macarons, perfect for a romantic setting."
                    className="product-image"
                  />
                  <div className="product-badge">
                    <span>Bestseller</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">Romantic Rose Cake</h3>
                  <p className="product-description">
                    Delicate layers of rose-infused sponge with berry
                    buttercream
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$58.00</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="A delectable cupcake with creamy frosting on a white background, perfect for food photography."
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">Classic Vanilla Dream</h3>
                  <p className="product-description">
                    Timeless vanilla bean cupcake with swirled buttercream
                    perfection
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$3.75</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1346345/pexels-photo-1346345.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="An assortment of vibrant macarons arranged in boxes with a floral decoration, perfect for dessert lovers."
                    className="product-image"
                  />
                  <div className="product-badge product-badge-seasonal">
                    <span>Seasonal</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">French Macaron Collection</h3>
                  <p className="product-description">
                    Assorted flavors in a beautiful gift box with ribbon
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$24.00</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="A pink frosted cupcake, perfect for dessert lovers, showcasing rich creamy swirls."
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">Strawberry Sunset</h3>
                  <p className="product-description">
                    Fresh strawberry cake with pink champagne frosting
                  </p>
                  <div className="product-footer">
                    <span className="product-price">$4.75</span>
                    <button className="btn btn-primary btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="productNext"
              aria-label="Next products"
              className="product-carousel-nav product-carousel-next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div id="productDots" className="product-carousel-dots"></div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-full-wrapper">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                    <path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"></path>
                  </g>
                </svg>
              </div>
              <div className="cta-text-block">
                <h2 className="section-title">
                  Experience Your Dream Cake Before You Commit
                </h2>
                <p className="section-content">
                  Planning a wedding or special event? Book a complimentary
                  tasting session with our pastry chef. Sample up to five
                  flavors, discuss custom designs, and bring your vision to
                  life. Perfect for couples, event planners, and anyone
                  celebrating something special.
                </p>
                <ul className="cta-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Sample up to 5 signature flavors</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>One-on-one consultation with our pastry chef</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Custom design sketch and quote</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Flexible scheduling including evenings</span>
                  </li>
                </ul>
              </div>
              <button className="btn btn-accent btn-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
                <span>Reserve Your Tasting Slot</span>
              </button>
            </div>
            <div className="cta-image-wrapper">
              <img
                src="https://images.pexels.com/photos/10890856/pexels-photo-10890856.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Close-up of a delicious wedding cake with a 'Better Together' topper, perfect for celebrations."
                className="cta-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="section-title">Our Signature Creations</h2>
            <p className="section-content">
              From intimate celebrations to grand weddings, each design is
              crafted to tell your unique story
            </p>
          </div>
          <div className="gallery-carousel-wrapper">
            <button
              id="galleryPrev"
              aria-label="Previous gallery item"
              className="gallery-carousel-nav gallery-carousel-prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m12 19l-7-7l7-7m7 7H5"
                ></path>
              </svg>
            </button>
            <div id="galleryCarousel" className="gallery-carousel">
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm1 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">
                    Fleur-de-lis Wedding Masterpiece
                  </h3>
                  <p className="gallery-description">
                    Intricate handcrafted details for an unforgettable day
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm2 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Berry Celebration Cupcakes</h3>
                  <p className="gallery-description">
                    Fresh, vibrant, and bursting with flavor
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm3 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">
                    Rustic Elegance Wedding Cake
                  </h3>
                  <p className="gallery-description">
                    Natural beauty with strawberry accents
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm4 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Birthday Celebration Cake</h3>
                  <p className="gallery-description">
                    Making milestone moments extra special
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm5 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Orange Blossom Wedding Tier</h3>
                  <p className="gallery-description">
                    Garden-inspired outdoor celebration design
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm6 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Strawberry Dream Cake</h3>
                  <p className="gallery-description">
                    Luscious glazed strawberries and whipped cream
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm7 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Floral Elegance Cake</h3>
                  <p className="gallery-description">
                    Delicate blooms for a romantic celebration
                  </p>
                </div>
              </div>
              <div className="gallery-item gallery-parallax-item">
                <div className="home-thq-gallery-parallax-bg-elm8 gallery-parallax-bg"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Birthday Candle Celebration</h3>
                  <p className="gallery-description">
                    Create magical moments with loved ones
                  </p>
                </div>
              </div>
            </div>
            <button
              id="galleryNext"
              aria-label="Next gallery item"
              className="gallery-carousel-nav gallery-carousel-next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div id="galleryDots" className="gallery-carousel-dots"></div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-full-wrapper">
          <div className="features-header-block">
            <h2 className="section-title">How SugarLoom Works</h2>
            <p className="section-content">
              From browsing to tasting to celebrating, we make ordering your
              dream cake simple and delightful
            </p>
          </div>
          <div className="features-grid">
            <div className="features-card">
              <div className="features-number">
                <span>01</span>
              </div>
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Browse Our Collection</h3>
              <p className="features-description">
                Explore our curated catalog of cupcakes, celebration cakes, and
                wedding designs. Filter by flavor, size, and occasion to find
                the perfect match for your event.
              </p>
            </div>
            <div className="features-card">
              <div className="features-number">
                <span>02</span>
              </div>
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Book a Tasting Session</h3>
              <p className="features-description">
                Schedule a personalized consultation with our pastry chef.
                Sample flavors, discuss custom designs, and get expert advice
                for your special occasion.
              </p>
            </div>
            <div className="features-card">
              <div className="features-number">
                <span>03</span>
              </div>
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  ></path>
                </svg>
              </div>
              <h3 className="features-title">Customize Your Design</h3>
              <p className="features-description">
                Work with us to create a bespoke design that reflects your style
                and vision. Choose flavors, colors, decorations, and
                personalized details.
              </p>
            </div>
            <div className="features-card">
              <div className="features-number">
                <span>04</span>
              </div>
              <div className="features-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                    <path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="features-title">Enjoy Your Celebration</h3>
              <p className="features-description">
                We&apos;ll deliver or have your cake ready for pickup at your
                chosen date and time. All cakes are freshly baked with premium
                ingredients for maximum flavor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Loved by Couples and Celebrants</h2>
            <p className="section-content">
              Real stories from real celebrations
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
              </div>
              <p className="testimonials-quote">
                SugarLoom created the wedding cake of our dreams! The tasting
                session was so helpful, and the final cake was even more
                beautiful than we imagined. Our guests are still raving about
                how delicious it was.
              </p>
              <div className="testimonials-author-wrapper">
                <img
                  src="https://images.pexels.com/photos/10633531/pexels-photo-10633531.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="A beautifully decorated wedding cake with flower arrangements and assorted desserts, creating a romantic celebration setting."
                  className="testimonials-photo"
                />
                <div className="testimonials-author-info">
                  <h4 className="testimonials-author-name">
                    Sarah &amp; Michael
                  </h4>
                  <p className="testimonials-author-detail">
                    Wedding Cake, June 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
              </div>
              <p className="testimonials-quote">
                Ordered cupcakes for my daughter&apos;s birthday party and
                everyone loved them! The Berry Bliss flavor was a huge hit. The
                online ordering was so easy, and they arrived perfectly fresh
                and beautifully packaged.
              </p>
              <div className="testimonials-author-wrapper">
                <img
                  src="https://images.pexels.com/photos/12844889/pexels-photo-12844889.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Happy family celebrating a birthday with cake and confetti indoors. Laughter and joy fill the atmosphere."
                  className="testimonials-photo"
                />
                <div className="testimonials-author-info">
                  <h4 className="testimonials-author-name">
                    Jennifer Martinez
                  </h4>
                  <p className="testimonials-author-detail">
                    Birthday Cupcakes, March 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  ></path>
                </svg>
              </div>
              <p className="testimonials-quote">
                As a corporate event planner, I&apos;ve worked with many
                bakeries, but SugarLoom stands out. Their attention to detail,
                timely delivery, and ability to accommodate dietary restrictions
                make them my go-to for all client events.
              </p>
              <div className="testimonials-author-wrapper">
                <img
                  src="https://images.pexels.com/photos/16935895/pexels-photo-16935895.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Beautifully arranged wedding reception table with floral centerpiece and candles."
                  className="testimonials-photo"
                />
                <div className="testimonials-author-info">
                  <h4 className="testimonials-author-name">David Chen</h4>
                  <p className="testimonials-author-detail">
                    Corporate Events, Ongoing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search-section">
        <div className="search-container">
          <div className="search-header">
            <h2 className="section-title">Find Your Perfect Sweet</h2>
            <p className="section-content">
              Search by name or explore by category
            </p>
          </div>
          <div className="search-bar-wrapper">
            <div className="search-input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search for cupcakes, wedding cakes, flavors..."
                className="search-input"
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="search-categories-table">
            <div className="search-table-header">
              <h3>Popular Categories</h3>
              <p>Quick access to our most requested collections</p>
            </div>
            <table className="search-table">
              <thead>
                <tr>
                  <th>
                    <span>Category</span>
                  </th>
                  <th>
                    <span>Description</span>
                  </th>
                  <th>
                    <span>Starting Price</span>
                  </th>
                  <th>
                    <span>Lead Time</span>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                          <path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"></path>
                        </g>
                      </svg>
                      <span className="search-category-name">Cupcakes</span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Individual servings perfect for parties, meetings, or
                      personal treats
                    </span>
                  </td>
                  <td>
                    <span>$3.50</span>
                  </td>
                  <td>
                    <span>24 hours</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </g>
                      </svg>
                      <span className="search-category-name">
                        Celebration Cakes
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Birthdays, anniversaries, graduations, and milestone
                      moments
                    </span>
                  </td>
                  <td>
                    <span>$45.00</span>
                  </td>
                  <td>
                    <span>3 days</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        ></path>
                      </svg>
                      <span className="search-category-name">
                        Wedding Cakes
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Multi-tier custom designs for your special day with
                      tasting included
                    </span>
                  </td>
                  <td>
                    <span>$350.00</span>
                  </td>
                  <td>
                    <span>4 weeks</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                          <path d="M4 16s.5-1 2-1s2.5 2 4 2s2.5-2 4-2s2.5 2 4 2s2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"></path>
                        </g>
                      </svg>
                      <span className="search-category-name">
                        Custom Orders
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Bespoke designs tailored to your vision and dietary
                      requirements
                    </span>
                  </td>
                  <td>
                    <span>$75.00</span>
                  </td>
                  <td>
                    <span>1 week</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M8 2v4m8-4v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                      <span className="search-category-name">
                        Seasonal Specials
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Limited-time flavors and designs celebrating the current
                      season
                    </span>
                  </td>
                  <td>
                    <span>$4.00</span>
                  </td>
                  <td>
                    <span>48 hours</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="search-category-cell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </g>
                      </svg>
                      <span className="search-category-name">Gift Boxes</span>
                    </div>
                  </td>
                  <td>
                    <span>
                      Curated assortments of treats perfect for gifting any
                      occasion
                    </span>
                  </td>
                  <td>
                    <span>$28.00</span>
                  </td>
                  <td>
                    <span>24 hours</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Browse</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="home-hero">
        <div className="hero-content">
          <Script
            html={`<script defer data-name="carousels-handler">
(function(){
  const productCarousel = document.getElementById("productCarousel")
  const productPrev = document.getElementById("productPrev")
  const productNext = document.getElementById("productNext")
  const productDotsContainer = document.getElementById("productDots")

  const galleryCarousel = document.getElementById("galleryCarousel")
  const galleryPrev = document.getElementById("galleryPrev")
  const galleryNext = document.getElementById("galleryNext")
  const galleryDotsContainer = document.getElementById("galleryDots")

  function setupCarousel(carousel, prevBtn, nextBtn, dotsContainer) {
    const cards = carousel.querySelectorAll(":scope > *")
    const cardWidth = cards[0].offsetWidth
    const gap = parseInt(getComputedStyle(carousel).gap)
    const scrollAmount = cardWidth + gap

    for (let i = 0; i < cards.length; i++) {
      const dot = document.createElement("div")
      dot.classList.add(carousel.id.includes("product") ? "product-carousel-dot" : "gallery-carousel-dot")
      if (i === 0) dot.classList.add("active")
      dot.addEventListener("click", () => {
        carousel.scrollTo({ left: i * scrollAmount, behavior: "smooth" })
      })
      dotsContainer.appendChild(dot)
    }

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    })

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

    carousel.addEventListener("scroll", () => {
      const scrollPosition = carousel.scrollLeft
      const activeIndex = Math.round(scrollPosition / scrollAmount)
      const dots = dotsContainer.querySelectorAll("div")
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex)
      })
    })
  }

  setupCarousel(productCarousel, productPrev, productNext, productDotsContainer)
  setupCarousel(galleryCarousel, galleryPrev, galleryNext, galleryDotsContainer)

  const galleryItems = document.querySelectorAll(".gallery-parallax-item")
  galleryItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY

      const bg = item.querySelector(".gallery-parallax-bg")
      bg.style.transform = \`scale(1.1) translateX(\${deltaX * 15}px) translateY(\${deltaY * 15}px)\`
    })

    item.addEventListener("mouseleave", () => {
      const bg = item.querySelector(".gallery-parallax-bg")
      bg.style.transform = "scale(1.1) translateX(0) translateY(0)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

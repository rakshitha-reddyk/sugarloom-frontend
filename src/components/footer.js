import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-decorative-layer"></div>
        <div className="footer-content-wrapper">
          <div className="footer-columns">
            <div className="footer-column footer-brand-column">
              <div className="footer-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="footer-logo-icon"
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
                <span className="footer-brand-name">SugarLoom</span>
              </div>
              <p className="footer-brand-tagline">
                Handcrafted sweetness for life&apos;s special moments
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Pinterest"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m8 20l4-9m-1.3 3c.437 1.263 1.43 2 2.55 2c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7"></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Shop</h3>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-link">
                    <span>Cupcakes</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Wedding Cakes</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Custom Cakes</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Pastries</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Cookies</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Seasonal Specials</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Services</h3>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-link">
                    <span>Cake Tasting</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Event Reservations</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Custom Orders</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Wedding Planning</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Gift Cards</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-link">
                    <span>Corporate Events</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Contact</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  <span className="footer-contact-text">(555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                  <span className="footer-contact-text">
                    hello@sugarloom.com
                  </span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                      <circle cx="10" cy="10" r="3"></circle>
                    </g>
                  </svg>
                  <span className="footer-contact-text">
                    123 Sweet Street, Bakery District
                  </span>
                </div>
              </div>
              <div className="footer-hours">
                <p className="footer-hours-title">Hours</p>
                <p className="footer-hours-text">Mon-Fri: 8am - 7pm</p>
                <p className="footer-hours-text">Sat-Sun: 9am - 6pm</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                <span className="footer-thq-footer-copyright-text-elm">
                  © 2025 SugarLoom. All rights reserved.
                </span>
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-legal-separator">•</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <span className="footer-legal-separator">•</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Allergen Information</span>
                  </div>
                </a>
              </div>
              <p className="footer-tagline">
                <span className="footer-thq-footer-tagline-text-elm1">
                  Made with
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="footer-thq-footer-heart-icon-elm"
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
                <span className="footer-thq-footer-tagline-text-elm2">
                  and sugar
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes heartbeat {0%,100% {transform: scale(1);}
10%,30% {transform: scale(1.15);}
20%,40% {transform: scale(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

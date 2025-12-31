import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation">
        <div className="navigation-container">
          <a href="#">
            <div aria-label="SugarLoom Homepage" className="navigation-logo">
              <span className="section-title">SugarLoom</span>
            </div>
          </a>
          <div className="navigation-desktop">
            <a href="#">
              <div className="navigation-link">
                <span>Shop</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Collections</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Custom Orders</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Tasting Sessions</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>About</span>
              </div>
            </a>
          </div>
          <div className="navigation-actions">
            <button aria-label="Shopping Cart" className="navigation-cart">
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
              <span className="navigation-thq-navigation-cart-count-elm">
                0
              </span>
            </button>
            <button
              aria-label="Open Navigation Menu"
              aria-expanded="false"
              className="navigation-toggle"
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
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="#">
              <div aria-label="SugarLoom Homepage" className="navigation-logo">
                <span className="section-title">SugarLoom</span>
              </div>
            </a>
            <button
              aria-label="Close Navigation Menu"
              className="navigation-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Shop</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Collections</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Custom Orders</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Tasting Sessions</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>About</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes slideInLink {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-toggle">
(function(){
  const navToggle = document.querySelector(".navigation-toggle")
  const navClose = document.querySelector(".navigation-close")
  const mobileOverlay = document.querySelector(".navigation-mobile-overlay")
  const body = document.body

  function openMobileNav() {
    mobileOverlay.classList.add("navigation-open")
    navToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMobileNav() {
    mobileOverlay.classList.remove("navigation-open")
    navToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMobileNav)
  navClose.addEventListener("click", closeMobileNav)

  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav)
  })

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      closeMobileNav()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

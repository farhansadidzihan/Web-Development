import React from 'react'

const Header = () => {
  // let styles = {
  //   height: "60px"
  // }
  return (
    <div class="container">
      <ul className="nav justify-content-end navbar-light" role="menu group">
        <li name="Home" role="menuitem" class="nav-item"> 
          <a href="/" title="Home" class="nav-link"> HOME </a>
        </li>
        <li name="about" role="menuitem" class="nav-item"> 
          <a href="/about" title="about" class="nav-link"> ABOUT </a>
        </li>
        <li name="menu" role="menuitem" class="nav-item"> 
          <a href="/menu" title="menu" class="nav-link"> MENU </a>
        </li>
        <li name="bookings" role="menuitem" class="nav-item"> 
          <a href="/bookings" title="bookings" class="nav-link"> BOOKINGS </a>
        </li>
        <li name="order" role="menuitem" class="nav-item"> 
          <a href="/order" title="order" class="nav-link"> ORDER </a>
        </li>
      </ul>
      {/* <link href='https://ik.imagekit.io/zenius/Coursera/html-css/Asset_16_4x_nnQ67G1HkI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270946' /> */}
  </div>
  )
}

export default Header

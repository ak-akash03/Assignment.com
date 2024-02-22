import React from 'react'
import logo from "../../IMAGE/assignmentcom.png"

function Header() {
  return <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container container-fluid">
    <a class="navbar-brand" href="/"><img src={logo} height={"50px"} alt='png'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            BLOG
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">LINK</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ALL PROJECT
          </a>
          <ul class="dropdown-menu disabled" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/">ASSIGNMENT WRITTEN WORK</a></li>
            <li><a class="dropdown-item" href="/">SOFTWARE PROJECTS & REPORTS</a></li>
            <li><a class="dropdown-item" href="/">HARDWARE PROJECTS & REPORTS</a></li>
            
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item disabled" href="/">OTHER</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">DISABLED</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </>
}

export default Header

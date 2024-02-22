import React from 'react'
import logo from "../../IMAGE/assignmentcom.png"

function Header() {
  return <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container container-fluid">
    <a class="navbar-brand" href="/"><img src={logo} height={"50px"} alt='png'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Blog
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Works
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/">Frontend Project & Report</a></li>
            <li><a class="dropdown-item" href="/">Backend Project & Report</a></li>
            <li><a class="dropdown-item" href="/">Fullstack Project & Report</a></li>
            <li><a class="dropdown-item" href="/">Hardware Project & Report</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Other</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </>
}

export default Header

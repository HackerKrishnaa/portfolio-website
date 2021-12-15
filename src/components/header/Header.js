import React from "react";

export default function Header() {
    return (
    <header>
      <div class="container">
        <div class="nav">
          <div class="nav1">
            <a href="#"><img src="/images/software-development.png" alt="Logo" /></a>
            </div>
          <div class="nav2">
            <div class="menu"><a href="#about">about Me</a></div>
            <div class="menu"><a href="#services">services</a></div>
            <div class="menu"><a href="#">Blogs</a></div>
            <div class="menu">
              <a href="./template/portifolio.html">Portifolio</a>
            </div>
            <div class="menu"><a href="#contact">contact Me</a></div>
          </div>
        </div>
      </div>
    </header>
    );
}

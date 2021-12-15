import React from 'react';

export default function Footer() {
    return(
        <footer>
        <div class="container">
          <div class="footerContainer">
            <div class="footerLogo">
              <img src="/images/software-development.png" alt="Logo" />
            </div>
            <div class="footerNav">
              <p><a href="#about">About me</a></p>
              <p><a href="#services">services</a></p>
              <p><a href="#">blogs</a></p>
              <p><a href="./template/portifolio.html">Portifolio</a></p>
              <p><a href="#contact">contact me</a></p>
            </div>
            <div class="footerMedias">
              <div class="footerMedia">
                <a href="https://www.linkedin.com/in/laura-irene-paul"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
              <div class="footerMedia">
                <a href="https://www.facebook.com/irene.mmassy.1466"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </div>
              <div class="footerMedia">
                <a href="https://www.instagram.com/minaheryy/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
              <div class="footerMedia">
                <a href="https://www.behance.net/laummassy01ce"
                  ><i class="fab fa-behance"></i
                ></a>
              </div>
              <div class="footerMedia">
                <a href="https://github.com/irenemmassy"
                  ><i class="fab fa-github-alt"></i
                ></a>
              </div>
            </div>
            <span>Copyright ©2020 All rights reserved </span>
          </div>
        </div>
      </footer>  
    );
}
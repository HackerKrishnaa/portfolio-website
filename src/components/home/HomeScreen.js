import React from 'react';


function HomeScreen() {
    return(
        <div className="Mainbackground" id="home">
        <div className="topBackground"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001517"
            fillopacity="1"
            d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
  
        <div className="container fluids">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="screenWords">
                <h1>Hello, I'm Ramakrishna.</h1>
                <p>
                  A full-stack developer. Specializing in building exceptional
                  trending mobile applications and websites. Feel free to take a
                  look at my latest projects. Remotely available UTC−1 to UTC+7.
                </p>
                <div className="twoMainButton">
                  <div className="buttonMain">
                    <a href="">Mobile Apps</a>
                    <div className="hrizontalLine"></div>
                  </div>
                  <div className="buttonMain">
                    <a href="">Websites</a>
                    <div className="hrizontalLine diff"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="screenImage">
                <img src="/images/main8.png" alt="RK blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeScreen;
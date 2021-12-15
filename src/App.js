import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {Tab, Tabs} from "react-bootstrap";

function App() {
  return (
  <>
      {/* Header */}
      <Header />
      {/* HOME SCREEN */}
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
                look at my latest projects. Remotely available UTC−1 to UTC+8.
                project@irenemmassy.com Tel:+255 065 535 2744
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
    {/* SERVICES */}
    <div className="section" id="services">
      <div className="container rows">
        <Tabs defaultActiveKey= "services" className="tab">
            <Tab className="tablinks" eventKey="services" title="Services">
              <div className="container rows">
                <div className="tabcontent" id="London">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img
                            src="/images/software-development.png"
                            alt="Web Development"
                          />
                        </div>
                        <div className="sectionWords">
                          <h4>Web Development</h4>
                          <p>
                            Expand your business outreach by capitalizing on web
                            development services.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img
                            src="/images/Coding.png"
                            alt="Mobile Development"
                          />
                        </div>
                        <div className="sectionWords">
                          <h4>Mobile Development</h4>
                          <p>
                            Optimize smart ways to deal with the customers.Hire skilled
                            mobile app developer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img
                            src="./assets/images/img6.svg"
                            alt="Cross-Platform App"
                          />
                        </div>
                        <div className="sectionWords">
                          <h4>Cross-Platform App</h4>
                          <p>
                            Using React Native and flutter to build single app that
                            performs on both Android and iOS.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className="tablinks" eventKey="technology" title="Technology">
              <div className="container rows">
                <div className="tabcontent" id="Paris">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img src="./assets/images/img7.svg" alt="blockchain" />
                        </div>
                        <div className="sectionWords">
                          <h4>Mobile Development</h4>
                          <ul>
                            <li>Flutter Framework</li>
                            <li>Android Apps</li>
                            <li>React Native</li>
                            <li>Ionic Framework</li>
                            <li>Xamarin Framework</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img src="./assets/images/img9.svg" alt="blockchain" />
                        </div>
                        <div className="sectionWords">
                          <h4>Web Development</h4>
                          <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ReactJs</li>
                            <li>Jquery</li>
                            <li>JSON</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img src="./assets/images/img11.svg" alt="blockchain" />
                        </div>
                        <div className="sectionWords">
                          <h4>Server Side</h4>
                          <ul>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>Express.js Framework</li>
                            <li>Laravel Framework</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className="tablinks" eventKey="industry" title="Industry">
              <div className="container rows">
                <div className="tabcontent" id="Tokyo">
                  <div className="row">
                  </div>
                </div>
              </div>
            </Tab>
        </Tabs>
        </div>
      </div>
    {/* ABOUT */}
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-6">
                <div className="aboutMeImg">
                  <img src="/images/about2.png" alt="about me" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me">
                  <h5>About me</h5>
                  <div className="aboutHorizontalLine"></div>
                  <p>
                    I enjoy creating things that live on the internet, whether
                    that be websites, applications, or anything in between. My
                    goal is to always build products that provide pixel-perfect,
                    performant experiences.
                  </p>
                  <p>
                    Familiarity with Front End High level programming such as
                    HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side coding
                    skills Node.js and Php Frameworks( Express.js,Laravel).
                  </p>
                  <p>
                    Understanding of data structures algorithms including data
                    migration, transformation and analysis. Deploying, managing,
                    and operating scalable, highly available, and fault tolerant
                    systems on AWS.
                  </p>
                  <p>
                    Excellent communication skills on both Telugu, Hindi and English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT */}
   
    {/* RECENT WORK */}
    
    {/* FOOTER */}
    <Footer />

</>
  );
}

export default App;

import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

function Services() {
    return(
        <div className="section" id="services">
      <div className="container rows">
        <Tabs defaultActiveKey= "services" className="tab" >
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
                            src="/images/cross-platform.png"
                            alt="Cross-Platform App"
                          />
                        </div>
                        <div className="sectionWords">
                          <h4>Cross-Platform App</h4>
                          <p>
                            Using React Native  to build single app that
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
                          <img src="/images/app-development.png" alt="blockchain" />
                        </div>
                        <div className="sectionWords">
                          <h4>Mobile Development</h4>
                          <ul>
                            {/* <li>Flutter Framework</li> */}
                            <li>Android Apps</li>
                            <li>React Native</li>
                          {/* <li>Ionic Framework</li>
                            <li>Xamarin Framework</li>  */} 
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sectionBox">
                        <div className="sectionImage">
                          <img src="/images/programming.png" alt="blockchain" />
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
                          <img src="/images/server.png" alt="blockchain" />
                        </div>
                        <div className="sectionWords">
                          <h4>Server Side</h4>
                          <ul>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>Express.js Framework</li>
                            {/* <li>Laravel Framework</li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
           {/*  <Tab className="tablinks" eventKey="industry" title="Industry">
              <div className="container rows">
                <div className="tabcontent" id="Tokyo">
                  <div className="row">
                  </div>
                </div>
              </div>
            </Tab> */}
        </Tabs>
        </div>
      </div>
    )
}

export default Services;
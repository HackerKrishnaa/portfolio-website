import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContractComponent from "./components/contactComponent/ContactComponent";
import Services from "./components/services/Services";
import About from "./components/about/About";
import HomeScreen from "./components/home/HomeScreen";

function App() {
  return (
  <>
      {/* Header */}
      <Header />
      {/* HOME SCREEN */}
     <HomeScreen />
    {/* SERVICES */}
    <Services />
    {/* ABOUT */}
    <About />
    {/* CONTACT */}
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
          <ContractComponent />
          </div>
        </div>
      </div>
    </div>
    {/* RECENT WORK */}
    {/* To be added later */}
    {/* FOOTER */}
    <Footer />

</>
  );
}

export default App;

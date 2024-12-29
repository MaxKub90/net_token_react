import React from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdComponent from "../components/ThirdComponent";
import FourthComponent from "../components/FourthComponent";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


const Home: React.FC = () => {
  return (
    <div className="app">
      
      <FirstSection />
      <SecondSection />
      <ThirdComponent />
      <FourthComponent />
      <Roadmap />
      <FAQ />
      <Footer/>
    
    
    </div>
  );
};

export default Home;

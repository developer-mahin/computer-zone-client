import React from 'react';
import BrandPartner from './BrandPartner/BrandPartner';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import ContactSection from './ContactSection/ContactSection';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
          <HomeSlider></HomeSlider>  
          <BrandPartner></BrandPartner>
          <CategoriesSection></CategoriesSection>
        
        </div>
    );
};

export default Home;
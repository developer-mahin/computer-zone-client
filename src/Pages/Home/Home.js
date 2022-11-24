import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AllProductsSection from './AllProductSection/AllProductsSection';
import BrandPartner from './BrandPartner/BrandPartner';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import ContactSection from './ContactSection/ContactSection';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <HomeSlider></HomeSlider>
      <BrandPartner></BrandPartner>
      <CategoriesSection></CategoriesSection>
      {
        user?.uid && <AllProductsSection></AllProductsSection>
      }
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
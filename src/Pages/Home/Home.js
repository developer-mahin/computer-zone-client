import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AdvertiseSection from './AdvertiseSection/AdvertiseSection';
import AllProductsSection from './AllProductSection/AllProductsSection';
import BrandPartner from './BrandPartner/BrandPartner';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import ContactSection from './ContactSection/ContactSection';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {

  const { user } = useContext(AuthContext)


  const { data: availableData = [] } = useQuery({
    queryKey: ["availableProduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise?status=Available")
      const data = await res.json()
      return data;
    }
  })


  return (
    <div>
      <HomeSlider></HomeSlider>
      <BrandPartner></BrandPartner>
      <CategoriesSection></CategoriesSection>
      {
        availableData.length && <AdvertiseSection
          availableData={availableData}
        ></AdvertiseSection>
      }
      {
        user?.uid && <AllProductsSection></AllProductsSection>
      }
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
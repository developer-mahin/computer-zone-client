import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BigSpinner from '../../components/Spinner/BigSpinner';
import useTitle from '../../hooks/useTitle';
import AdvertiseSection from './AdvertiseSection/AdvertiseSection';
import AllProductsSection from './AllProductSection/AllProductsSection';
import BrandPartner from './BrandPartner/BrandPartner';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import ContactSection from './ContactSection/ContactSection';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
  useTitle("Home")
  const [loading, setLoading] = useState(false)

  const { data: advertiseProducts = [] } = useQuery({
    queryKey: ["availableProduct"],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch("https://computer-zone-server.vercel.app/advertise?status=Available")
      const data = await res.json()
      setLoading(false)
      return data;
    }
  })


  return (
    <div>
      <HomeSlider></HomeSlider>
      <BrandPartner></BrandPartner>
      <CategoriesSection></CategoriesSection>
      {
        loading ? <BigSpinner></BigSpinner> : <>

          {
            advertiseProducts.length && <AdvertiseSection
              advertiseProducts={advertiseProducts}
            ></AdvertiseSection>
          }

        </>
      }

      <AllProductsSection></AllProductsSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
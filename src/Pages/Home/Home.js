import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import BigSpinner from '../../components/Spinner/BigSpinner';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AdvertiseSection from './AdvertiseSection/AdvertiseSection';
import AllProductsSection from './AllProductSection/AllProductsSection';
import BrandPartner from './BrandPartner/BrandPartner';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import ContactSection from './ContactSection/ContactSection';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {

  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const { data: advertiseProducts = [] } = useQuery({
    queryKey: ["availableProduct"],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch("https://computer-zone-server.vercel.app/advertise?status=Available", {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`
        }
      })
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
      {
        user?.uid && <AllProductsSection></AllProductsSection>
      }
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
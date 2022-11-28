import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { HandThumbDownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {

  const errorPageBg = {
    backgroundImage: `url(${"https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png"})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={errorPageBg}>
      <section className="flex items-center h-screen p-16 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <HandThumbDownIcon className="w-40 h-40 text-green-500" />
          
          <div className="flex items-center justify-center">
            <div className="w-36 h-36 border-t-8 border-b-8 border-green-400 rounded-full animate-spin"></div>
        </div>

          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              Sorry, we couldn't find this page.
            </p>
            <Link to="/">
              <PrimaryButton classes="px-8 py-3 font-semibold rounded">
                Back to homepage
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
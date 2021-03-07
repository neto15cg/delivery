import React from 'react';
import Home from '@container/Home/Home';
import Header from '@container/Header/Header';
import Footer from '@container/Footer/Footer';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  const handleNavigate = (location) => {
    const { lat, lng } = location;
    history.push(`/products?lat=${lat}&lng=${lng}`);
  };

  return (
    <>
      <Header />
      <Home onNavigate={handleNavigate} />
      <Footer />
    </>
  );
};

export default HomePage;

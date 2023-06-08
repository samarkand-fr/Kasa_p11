import React from 'react';
import Gallery from '../../components/Gallery/index.jsx';
import Banner from '../../components/Banner/index.jsx';
import Background from '../../assets/IMG.jpg';
const title = 'Chez vous, partout et ailleurs';

const Home = () => {
  return (
    <div>
      <Banner picture={Background} title={title} />
      <Gallery />
    </div>
  );
};

export default Home;

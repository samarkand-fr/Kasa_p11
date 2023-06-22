import React from 'react';
import FetchData from '../../utils/FetchData';
import homeBanner from '../../assets/banner.jpg';
import Banner from '../../components/Banner';
import Thumb from '../../components/Thumb';

const Home = () => {
  return (
    <section className="home content-wrapper">
      {/* Render the banner component with the home banner image and title */}
      <Banner picture={homeBanner} title="Chez vous, partout et ailleurs" />
      {/* Fetch the data for announcements */}
      <FetchData url="/annonces.json">
                {/**
         * Callback function to render the list of announcements.
         * @param {Array} annonces - Array of announcement objects.
         * @returns {ReactNode} JSX representing the list of announcements.
         */}

        {(annonces) => (
          <div className="thumb-wrapper">
            {/* Render each announcement as a Thumb component */}
            {annonces && annonces.map(({ id, title, cover }) => (
              <Thumb key={id} link={`/annonce/${id}`} title={title} cover={cover} />
            ))}
          </div>
        )}
      </FetchData>
    </section>
  );
};

export default Home;

import React from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../utils/FetchData';
import Error from '../../components/Error';
import Error404 from '../ErrorPage';
import AnnonceContent from '../../components/AnnonceContent';

/**
 * Renders the Annonce page component.
 * @function Annonce
 * @returns {ReactNode} JSX injected in the DOM.
 */
function Annonce() {
  const { annonceId } = useParams();

  return (
 <div className='content-wrapper'>
    <FetchData url="/annonces.json">
      {/**
         * Callback function to handle fetched data and render the announcement content.
         * @param {Array} fetchedData - Array of fetched announcement data.
         * @param {Error} error - Error object, if any.
         * @returns {ReactNode} JSX representing the announcement content or error component.
         */}
      {(fetchedData, error) => {
        const thisAnnonce = fetchedData?.find((annonce) => annonce.id === annonceId);
        if (error) {
          return <Error />;
        }
        if (!thisAnnonce) {
          return <Error404 />;
        }
        return <AnnonceContent annonce={thisAnnonce} />;
      }}
    </FetchData>
    </div>
  );
}

export default Annonce;

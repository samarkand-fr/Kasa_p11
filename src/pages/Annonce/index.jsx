import React from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../utils/FetchData';
import Error from '../../components/Error';
import Error404 from '../ErrorPage';
import AnnonceContent from '../../components/AnnonceContent';

function Annonce() {
  const { annonceId } = useParams();

  return (
 <div className='content-wrapper'>
    <FetchData url="/annonces.json">
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

import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';

const FetchData = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch data from the provided URL
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Send a GET request to the URL
        const jsonData = await response.json(); // Parse the response data as JSON
        setData(jsonData); // Store the data in the component's state
      } catch (err) {
        console.log(err); // Log any errors that occur during the fetch request
        setError(true); // Set the error state to true
      }
    };

    fetchData(); // Invoke the fetch data function when the component mounts or when the URL prop changes
  }, [url]);

  useEffect(() => {
    // Set the document title
    document.title = 'Accueil - Kasa';
  }, []);

  return (
    <>
      {error ? (
        <Error /> // Render the Error component if an error occurred during the fetch request
      ) : (
        children(data) // Render the children component with the fetched data once it is available
      )}
    </>
  );
};

export default FetchData;

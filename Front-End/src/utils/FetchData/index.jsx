import React, { useEffect, useState } from 'react';
import Error from '../../components/Error';

/**
 * FetchData component to fetch data from a URL and handle error states.
 * @function FetchData
 * @param {string} url - The URL to fetch data from.
 * @param {function} children - A function that takes the fetched data as an argument and returns JSX.
 * @returns {ReactNode} JSX injected in the DOM.
 */
const FetchData = ({ url, children }) => {
  const [data, setData] = useState(null); // State to store the fetched data
  const [error, setError] = useState(false); // State to track if an error occurred

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

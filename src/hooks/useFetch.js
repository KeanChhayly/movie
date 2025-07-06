import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [movie, setMovie] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetching() {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setMovie(response.results);
      } catch (error) {
        console.error(`The api is error with : ${error}`);
      }
    }
    fetching();
  }, [url]);
  return { movie };
};

export default useFetch;

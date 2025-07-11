import backup from "../assets/backup.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
const MovieDetail = ({ title }) => {
  const params = useParams();
  const [movie, setmovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useTitle(movie.title);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backup;
  const api = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setmovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [api]);

  return (
    <main>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <section className="flex justify-around flex-wrap py-5">
          <div className="max-w-sm">
            <img className="rounded" src={image} alt={movie.title} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
            <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
            <p className="my-4">{movie.overview}</p>
            {Array.isArray(movie.genres) && (
              <p className="my-7 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            )}

            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-yellow-400 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p class="ms-2 text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span class="text-gray-900 dark:text-white">
                {movie.vote_count} reviews
              </span>
            </div>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget: </span>
              <span>{movie.budget}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Revenue: </span>
              <span>{movie.revenue}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release Date: </span>
              <span>{movie.release_date}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB Date: </span>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default MovieDetail;

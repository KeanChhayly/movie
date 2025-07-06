import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { movie: movies } = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Search for: ${queryTerm} / Movie`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `Results for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((m, index) => (
            <Cards key={index} movie={m} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;

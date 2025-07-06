// import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import { useEffect } from "react";
const MovieList = ({ apiPath, title }) => {
  const { movie: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {Array.isArray(movies) &&
            movies?.map((m, index) => <Cards key={index} movie={m} />)}
        </div>
      </section>
    </main>
  );
};

export default MovieList;

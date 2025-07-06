import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import notFounded from "../assets/notFounded.png";
import Button from "../components/Button";
const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Movie`
  });
  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
          404, Oops
        </p>
        <div className="max-w-lg">
          <img className="rounded" src={notFounded} alt="Page Not Founded" />
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

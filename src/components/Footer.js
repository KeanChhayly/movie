
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Link
            to="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            end
          >
            {" "}
            © 2023 CopyRight By Kean Chhayly
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://web.facebook.com/kean.chhayly.7"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Facebook
            </a>
          </li> 
          <li>
            <a
              href="https://www.instagram.com/__lyy______/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@keanchhayly4097"
              className="hover:underline me-4 md:me-6"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

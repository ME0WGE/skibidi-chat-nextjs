"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer
      className="
        border-t-2 border-violet-700
        flex flex-col sm:flex-row justify-between items-center text-center
        w-full max-w-4xl mx-auto px-4 py-4 text-violet-100 bg-gradient-to-r from-gray-950 via-violet-950 to-indigo-950
        mt-8
      ">
      <div className="mb-2 sm:mb-0">
        <span>
          © 2025 Made With
          <span className="mx-1 text-violet-500 text-xl align-middle">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          by
          <span className="wave-text inline-block ml-1">
            {[
              "K",
              "a",
              "m",
              "i",
              "l",
              " ",
              "B",
              "a",
              "l",
              "d",
              "y",
              "g",
              "a",
            ].map((l, i) => (
              <span
                key={i}
                className="inline-block wave"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  WebkitTextStrokeWidth: "0.4px",
                  WebkitTextStrokeColor: "#a78bfa",
                }}>
                {l}
              </span>
            ))}
          </span>
        </span>
      </div>
      <ul className="flex items-center gap-6 list-none text-indigo-400">
        <li>
          <a
            href="https://www.linkedin.com/in/kamil-baldyga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 text-2xl mr-2 hover:text-violet-400 transition">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com/ME0WGE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 text-2xl hover:text-violet-400 transition">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

import React from "react";
import Lottie from "lottie-react";
import notFound from "../assets/notFound.json";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-full h-full">
      <div className="w-[600px] h-[600px] mx-auto flex flex-col items-center">
        <Lottie
          className="w-[450px] h-[450px] mx-auto"
          animationData={notFound}
          loop={true}
        />
        <br />
        <div className="">
          {error && (
            <div className="text-center text-xl font-mono font-semibold">
              <p>{error.status}</p>
              <p>{error.statusText || error.message}</p>
            </div>
          )}
        </div>

        <Link
          to="/topic"
          className="inline-flex items-center px-5 rounded py-[8px] font-semibold border-2 border-purple-500 hover:bg-purple-500 transition-colors duration-200 text-purple-500 hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

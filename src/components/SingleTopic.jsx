import React from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export const SingleTopic = ({ quizTopic }) => {
  const { name, logo, total, id } = quizTopic;

  return (
    <div className="text-left w-[360px] h-[450px] rounded-lg shadow-lg px-7 bg-purple-200 py-5 mx-auto">
      <div className="w-[300px] h-[300px] ">
        <img className="object-cover w-full h-full" src={logo} alt={name} />
      </div>
      <div className="max-w-[400px] h-14 mt-10 pt-3 flex items-center justify-between border-t-2 border-purple-600">
        <h1 className="text-xl bg-gray-50 px-3 py-1 rounded font-bold uppercase text-gray-900">{name}</h1>
        <div className="flex items-center" title={`total Quiz ${total}`}>
          <CodeBracketSquareIcon className="h-6 w-6 text-blue-500" />
          <p className="text-2xl font-mono font-bold">{total}</p>
        </div>
        <Link 
        to={`/topic/${id}`}
        className="inline-flex items-center px-5 rounded py-[8px] font-semibold border-2 border-purple-500 hover:bg-purple-500 transition-colors duration-200 text-purple-500 hover:text-white">
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

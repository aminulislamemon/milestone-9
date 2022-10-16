import React from "react";
import { Options } from "./Options";
import { ToastContainer, toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

export const SingleQuiz = ({ singleQuiz }) => {
  const { correctAnswer, options, question } = singleQuiz;
  const hintsHandler = () => {
    toast.warning(correctAnswer);
  };

  return (
    <div className="w-full h-full py-5">
      <div className="lg:w-[700px] lg:h-[300px] sm:w-[400px] sm:h-[600px] mx-auto rounded shadow-md shadow-purple-300 border-[1px] border-gray-50">
        <div className="max-w-[600px] h-[100px] mx-auto text-center flex items-center justify-between">
          <h1 className=" font-bold font-mono text-purple-500 py-2">
            <span className="text-xl font-bold">Quiz</span>- {question}
          </h1>
          <div className="max-w-[60px] h-[60px]">
            <EyeIcon
            onClick={hintsHandler}
              title={correctAnswer}
              className="w-8 h-8 ml-5 cursor-pointer"
            >
              <ToastContainer theme="colored" />
            </EyeIcon>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 px-3 ">
          {options.map((option) => (
            <Options
              key={Math.random()}
              option={option}
              correctAnswer={correctAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

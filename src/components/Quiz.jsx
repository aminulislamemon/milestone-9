import React from "react";
import { useLoaderData } from "react-router-dom";
import { SingleQuiz } from "./SingleQuiz";

export const Quiz = () => {
  const quizData = useLoaderData();
  const {name} = quizData.data;
  const quizs = quizData.data.questions;
  return (
    <div className="w-full h-full">
      <div className="">
        <h1 className="text-center py-5 text-purple-600 text-3xl font-mono font-extrabold"> Quiz on - {name}</h1>
        {quizs.map((singleQuiz) => (
          <SingleQuiz key={singleQuiz.id} singleQuiz={singleQuiz}  />
        ))}
      </div>
    </div>
  );
};

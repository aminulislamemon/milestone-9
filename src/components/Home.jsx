import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizTopicContext } from "../context/QuizTopicContext";
import { SingleTopic } from "./SingleTopic";

export const Home = () => {
    const quizTopics = useContext(QuizTopicContext);
  return (
    <>
      <div>
        {/* Header starts here */}
        <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100 lg:w-20 lg:h-20">
            <svg
              className="w-10 h-10 text-purple-600 lg:w-16 lg:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Take a quiz chellange
                <br className="hidden md:block" />
                With{" "}
                <span className="inline-block text-purple-600">QuizBunny</span>
              </h2>
              <Link
                to="/topic"
                aria-label=""
                className="inline-flex items-center px-5 rounded py-[8px] font-semibold border-2 border-purple-500 hover:bg-purple-500 transition-colors duration-200 text-purple-500 hover:text-white"
              >
                Play Quiz
              </Link>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700">
                Consider your career goals and interests. Coding could be a good
                option If working in technology appeals to you. If you enjoy
                thinking logically to solve puzzles and engaging in the creative
                side of your mind to develop new programs and apps, then coding
                could be an ideal career.
              </p>
            </div>
          </div>
        </div>
        {/* hero section starts here */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  px-5 py-5 text-center gap-5">
          {quizTopics.map((quizTopic) => (
            <SingleTopic 
            key={quizTopic.id} 
            quizTopic={quizTopic}
            />
          ))}
        </div>
      </div>
    </>
  );
};

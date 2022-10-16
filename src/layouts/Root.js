import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import { QuizTopicContext } from "../context/QuizTopicContext";

const Root = () => {
  const quizTopicData = useLoaderData([]);
  const quizTopics = quizTopicData.data;
  return (
    <div>
      <QuizTopicContext.Provider value={quizTopics}>
        <Header />
        <Outlet />
      </QuizTopicContext.Provider>
    </div>
  );
};

export default Root;

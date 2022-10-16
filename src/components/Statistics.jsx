import React, { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { QuizTopicContext } from "../context/QuizTopicContext";

export const Statistics = () => {
  const quizTopics = useContext(QuizTopicContext);
  return (
    <div className="w-full h-full">
      <div className="ml-80 mt-28 ">
        <LineChart
          width={600}
          height={300}
          data={quizTopics}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

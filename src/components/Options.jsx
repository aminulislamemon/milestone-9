import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Options = ({ option, correctAnswer }) => {
  const quizOptionHandler = (option) => {
    if (option === correctAnswer) {
      toast.success("Your answer is correct!");
    } else {
      toast.error("your answer is wrong!");
    }
  };
  return (
    <div
      onClick={() => {
        quizOptionHandler(option);
      }}
      className="lg:max-w-[350px] sm:max-w-[200px] lg:h-[80px] sm:h-[50px] sm:flex sm:items-center sm:justify-center border-2 border-purple-500 rounded hover:bg-purple-100 cursor-pointer"
    >
      <div className="max-w-[300px] h-[70px] mx-auto font-bold font-mono flex items-center justify-center ">
        <ToastContainer theme="colored" />
        {option}
      </div>
    </div>
  );
};

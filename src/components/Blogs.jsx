import React from "react";

export const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--vtI2NHvd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0lj87mz6whntv2zbxdm.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Programming
              </a>
              <span className="text-gray-600">— 11 Oct 2022</span>
            </p>
            <p
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              What is the purpose of react router?
            </p>
            <p className="mb-2 text-gray-700">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow">
          <img
            src="https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Programming
              </a>
              <span className="text-gray-600">— 11 Oct 2022</span>
            </p>
            <p
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              How Does Context API works?
            </p>
            <p className="mb-2 text-gray-700">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow">
          <img
            src="https://miro.medium.com/max/1200/1*i84qwZI8_mxxM1zQ3hYd_A.jpeg"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Programming
              </a>
              <span className="text-gray-600">— 11 Oct 2022</span>
            </p>
            <p
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              What is useRef?
            </p>
            <p className="mb-2 text-gray-700">
            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React , React will set its .current property to the corresponding DOM node whenever that node changes.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";
import Link from "next/link";
import React from "react";

const NotFoundPage404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800 px-4">
      <h1 className="text-9xl  font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-center mb-6 text-white max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage404;

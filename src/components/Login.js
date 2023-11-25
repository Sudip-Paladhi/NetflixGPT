import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background Image"
        />
      </div>
      <form className="absolute w-4/12 mx-auto right-0 left-0 p-12 my-24 text-white bg-black bg-opacity-80">
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          className="w-full p-4 my-4 bg-gray-800 rounded"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="w-full p-4 my-4 bg-gray-800 rounded"
          type="password"
          placeholder="password"
        />
        <button className="bg-red-700 p-4 my-6 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;

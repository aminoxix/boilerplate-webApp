import React from "react";
import { Link } from "react-router-dom";

// Components
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";
import SignUpButton from "../components/SignUpButton";

// Asset
import BrandLogo from "../assets/images/icon.png";

const Home = (props) => {
  return (
    <main className="bg-brand font-inter h-screen inset-0 2xl:px-[600px] xl:px-[400px] lg:px-[300px] py-6 px-6 text-white flex flex-col gap-40 justify-center items-center text-center">
      <div className="flex flex-col gap-14">
        <Title innerText="FOR DEVS" />
        <div className="flex justify-center items-center">
          <img className="w-1/3" src={BrandLogo} />
        </div>
        <div className="flex flex-col gap-4">
          <SubTitle innerText="Hey!" />
          {props.name ? (
            <p>My name is {props.name} & currently testing this app</p>
          ) : (
            <p>
              My name is Anshumaan & currently building a Vite app integrated
              with Firebase services for developers to use as a boilerplate for
              their projects
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Link to={`/signin`}>
          <Button innerText="Login" />
        </Link>
        <Link to={`/signup`}>
          <SignUpButton innerText="Sign Up" />
        </Link>
      </div>
    </main>
  );
};

export default Home;
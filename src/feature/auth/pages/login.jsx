import React from "react";
import LoginForm from "../components/loginForm";
import Pic from "../components/pic";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#2f4e7e] flex-row gap-[40px] bg-radial-[at_5%_15%] from-white to-state-400 to-95%">
      <LoginForm />
      <Pic />
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { login } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://192.168.88.63:3002/user/login", {
        email,
        password,
      });
      console.log(user);
      // localStorage.setItem("token", user.data.token);
      // dispatch(login(user.data));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-1/2 h-3/4 flex items-center justify-center relative">
      <form
        className="flex flex-col w-3/4 h-full px-5 py-10 rounded-4xl gap-5 items-center justify-center absolute"
        onSubmit={handleLogin}>
        <h1 className="text-2xl font-medium text-center">Нэвтрэх</h1>
        <div className="flex flex-col gap-5 mt-6 w-full items-center">
          <input
            type="text"
            placeholder="Имэйл"
            className="border border-black w-72 h-9 rounded-xl px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="border border-black w-72 h-9 rounded-xl px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-72 h-12 bg-[#222222] text-white rounded-xl"
         
          >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

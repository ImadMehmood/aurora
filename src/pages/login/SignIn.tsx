import React, { useState, ChangeEvent, FormEvent } from "react";
import { bgsticker, bgstickerb, eye, logo } from "../../assets";
import { Button } from "@nextui-org/react";

const SignIn: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading , setLoading] = useState<boolean>(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleEmailOrPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    // Add your form submission logic here
    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen relative bg-bodygray flex justify-center items-center px-3 ">
      <img src={bgsticker} alt="bgsticker" className="absolute top-0 left-0" />
      <img src={bgstickerb} alt="bgsticker" className="absolute bottom-0 right-0" />
      <img src={bgsticker} alt="bgsticker" className="absolute top-0 right-0 w-20 h-20" />
      <div className="bg-white max-w-[700px] w-full flex flex-col gap-12 sm:scale-90 items-center justify-center px-8 sm:px-20 py-12">
        <img src={logo} alt="logo" />
        <img src={bgsticker} alt="bgsticker" className="absolute top-0 -right-[12%] w-20 h-20" />
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="SignInP text-center w-full">Let’s Build Aurora Smart Assistant</p>
        </div>

        <form className="flex flex-col gap-1 justify-start items-start max-w-[500px] w-full" onSubmit={handleSubmit}>
          <p className="py-2">E-mail Or Phone Number</p>
          <input
          autoFocus
            type="text"
            placeholder="Email or phone number"
            value={emailOrPhone}
            onChange={handleEmailOrPhoneChange}
            className="inputSignIn px-4 py-4 outline-primary w-full"
          />
          <p className="py-2">Password</p>
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="inputSignIn px-4 py-4 outline-primary w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-8 top-4 cursor-pointer"
            >
              {isPasswordVisible ? <img src={eye} className="w-6"/> :<img src={eye} className="w-6" />}
            </button>
          </div>
          <p className="text-primary pb-8 ml-auto">Forgot Password?</p>
          <Button
          
          isLoading = {loading}
           type="submit" className="bg-primary py-2 text-lg w-full rounded-[100px] text-white p-2  cursor-pointer hover:bg-blue-700">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

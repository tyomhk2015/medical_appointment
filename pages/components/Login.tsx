import React, { useState } from "react";

interface ILogin {
  onSubmitHandler: (loginData: ILoginType) => void
  errorMsg: string;
}

interface ILoginType {
  user_name: string
  room_name: string
}

const Login: React.FC<ILogin> = ({onSubmitHandler, errorMsg}) => {
  const [loginData, setLoginData] = useState({
    user_name: '',
    room_name: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]: value
    });
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent the submission 
    if (!loginData.user_name.trim() || !loginData.room_name.trim()) return;
    onSubmitHandler(loginData);
  }

  return (
    <form onSubmit={submitHandler} method='POST'>
      <div
        className={`mt-4 grid gap-4 sm:mt-8 sm:flex sm:flex-col sm:items-center`}
      >
        <div className={`grid grid-cols-[1fr,9fr] items-center`}>
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          <input
            className={`border-solid border-b-[1px] border-b-[#16bbed] w-full rounded-lg py-2 text-center shadow-[0_0_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 focus:scale-105`}
            type="text"
            name='user_name'
            onChange={onChange}
            placeholder="Enter your name"
          />
        </div>
        <div className={`grid grid-cols-[1fr,9fr]  items-center`}>
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <input
            className={`border-solid border-b-[1px] border-b-[#16bbed] w-full rounded-lg py-2 text-center shadow-[0_0_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 focus:scale-105`}
            type="text"
            name='room_name'
            onChange={onChange}
            placeholder="Enter a room name"
          />
        </div>
      </div>
      {errorMsg && (
        <p className={`text-red-500 font-bold text-right mt-2 sm:mt-4`}>{errorMsg}</p>
      )}
      <div className={`mt-4 flex justify-end`}>
        <button
          className={`scale-[0.9] rounded-xl bg-[#16bbed] p-4 text-xl font-bold text-white shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:bg-sky-600 sm:scale-100`}
          type='submit'
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default Login;

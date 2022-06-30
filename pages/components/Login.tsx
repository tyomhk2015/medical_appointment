const Login: React.FC = () => {
  return (
    <form>
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
            className={`w-full rounded-lg py-2 text-center shadow-[0_0_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 focus:scale-105`}
            type="text"
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
            className={`w-full rounded-lg py-2 text-center shadow-[0_0_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 focus:scale-105`}
            type="text"
            placeholder="Enter a room name"
          />
        </div>
      </div>
      <div className={`mt-4 flex justify-end`}>
        <button
          className={`scale-[0.9] rounded-xl bg-[#16bbed] p-4 text-xl font-bold text-white shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:bg-sky-600 sm:scale-100`}
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default Login;

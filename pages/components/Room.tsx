import Link from "next/link";

const Room: React.FC = () => {
  return (
    <li
      className={`group rounded-xl bg-sky-200 p-4 transition-all duration-200 hover:cursor-pointer hover:bg-sky-400 hover:text-white hover:shadow-[0_0_8px_4px_rgba(56,189,248,0.5)]`}
    >
      <Link href="/Meeting/hello">
        <a className={`relative grid`}>
          <span className={`sm:text-3xl text-xl font-bold`}>Name</span>
          <span className={`text-sm sm:text-lg `}>11</span>
          <span className={`sm:text-xl text-right text-sm font-bold`}>Doctor</span>
          <span className={`text-sm sm:text-lg text-right`}>1/2</span>
          <svg
            className={`absolute top-0 right-0 h-6 w-6 rotate-90`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            ></path>
          </svg>
        </a>
      </Link>
    </li>
  );
};

export default Room;

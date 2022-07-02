import Link from "next/link";
import { useEffect } from "react";

interface IRoomProp {
  participants: number;
  roomName: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Room: React.FC<IRoomProp> = ({ participants, roomName, onClick }) => {
  return (
    <li
      onClick={onClick}
      id={roomName}
      className={`${
        participants >= 2 ?
        `bg-red-200 hover:bg-red-900 hover:shadow-[0_0_4px_4px_#f838387f]` : `bg-sky-200 hover:bg-sky-400 hover:text-white hover:shadow-[0_0_8px_4px_rgba(56,189,248,0.5)]`
      } group cursor-pointer rounded-xl  p-4 transition-all duration-200 hover:cursor-pointer hover:text-white`}
    >
      <div className={`relative grid`}>
        <span className={`text-2xl font-bold sm:text-4xl`}>{roomName}</span>
        <span className={`text-right text-sm font-bold sm:text-xl`}>
          Doctor
        </span>
        <p
          className={`${
            participants >= 2 && `text-red-400`
          } mt-2 flex items-center justify-end text-sm sm:text-lg`}
        >
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          {participants} / 2
        </p>
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
      </div>
    </li>
  );
};

export default Room;

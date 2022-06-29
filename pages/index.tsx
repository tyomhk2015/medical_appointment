import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [socket, setSocket] = useState<Socket>();

  const messageClick = () => {
    socket?.emit("clicked", "Button is clicked");
  };

  const changeTab = (event: React.MouseEvent<HTMLLIElement>) => {
    setSelectedTab(Number(event.currentTarget.getAttribute('data-key')));
  }

  useEffect(() => {
    if (socket || typeof window === "undefined") {
      return;
    }

    const deployedURL = 'https://medical-appointment-server.herokuapp.com/';
    const localURL = 'http://localhost:8080';

    const clientSocket = io(localURL);

    setSocket(clientSocket);

    clientSocket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  return (
    <>
      <button onClick={messageClick}>Click</button>
      <section
        className={`m-auto max-w-[1028px] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6`}
      >
        <ul className={`item-center grid grid-cols-2 justify-around gap-2`}>
          <li
            className={`${selectedTab === 0 ? `bg-sky-600` : `bg-sky-200`} shadow-[0_2px_2px_0_rgba(0,0,0,0.5)] hover:cursor-pointer group flex w-full justify-center rounded-xl p-3 transition-all duration-300 hover:bg-sky-600`}
            data-key={0}
            onClick={changeTab}
          >
            <svg
              className={`${selectedTab === 0 && `stroke-white`} h-6 w-6 transition-all duration-300 group-hover:stroke-white`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </li>
          <li
            className={`${selectedTab === 0 ? `bg-sky-600` : `bg-sky-200`} shadow-[0_2px_2px_0_rgba(0,0,0,0.5)] hover:cursor-pointer group flex w-full justify-center rounded-xl bg-sky-200 p-3 transition-all duration-300 hover:bg-sky-600`}
            data-key={1}
            onClick={changeTab}
          >
            <svg
              className={`${selectedTab === 1 && `stroke-white`} h-6 w-6 transition-all duration-300 group-hover:stroke-white`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </li>
        </ul>
        <form className={`mt-3`}>
          <h2 className={`text-center font-bold mt-4 text-3xl`}>{selectedTab === 0 ? 'Search Room' : 'Create Room'}</h2>
          <div className={`grid grid-cols-2 place-items-center`}>
            <div className={`grid text-center`}><span className={`font-bold italic`}>Your Name</span><input className={`mt-2 shadow-[0_0_4px_0_rgba(0,0,0,0.5)] text-center rounded-lg focus:scale-125 transition-all duration-300`} type="text" placeholder="Enter your name" maxLength={20}/></div>
            <div className={`grid text-center`}><span className={`font-bold italic`}>{selectedTab === 0 ? 'Room Name (Searching)' : 'Room Name (Creating)'}</span><input className={`mt-2 shadow-[0_0_4px_0_rgba(0,0,0,0.5)] text-center rounded-lg focus:scale-125 transition-all duration-300`} type="text" placeholder="Enter a room name" maxLength={20}/></div>
          </div>
        </form>
      </section>
      <section
        className={`m-auto mt-5 max-w-[1028px] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6`}
      >
        <ul className={`grid grid-cols-3 grid-rows-[autofill] gap-2`}>
          <li className={`bg-sky-50 rounded-xl p-4 transition-all duration-200 group hover:bg-sky-400 hover:text-white hover:cursor-pointer hover:shadow-[0_0_8px_4px_rgba(56,189,248,0.5)]`}>
            <Link href='/Meeting/hello'>
              <a className={`grid relative`}>
                <span className={`text-3xl font-bold`}>Name</span>
                <span className={``}>11</span>
                <span className={`text-right text-xl  font-bold`}>Doctor</span>
                <span className={`text-right`}>1/2</span>
                <svg className={`w-6 h-6 absolute top-0 right-0 rotate-90`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;

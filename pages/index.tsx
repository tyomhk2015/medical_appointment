import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import Login from "./components/Login";
import Room from "./components/Room";
import Title from "./components/Title";

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    if (socket || typeof window === "undefined") {
      return;
    }

    const deployedURL = "https://medical-appointment-server.herokuapp.com/";
    const localURL = "http://localhost:8080";

    const clientSocket = io(localURL);

    setSocket(clientSocket);

    clientSocket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  const messageClick = () => {
    socket?.emit("clicked", "Button is clicked");
  };

  return (
    <div className={`p-1 sm:p-5`}>
      <button
        className={`absolute bottom-2 right-3 font-bold text-white`}
        onClick={messageClick}
      >
        Click
      </button>
      <section
        className={`m-auto max-w-[728px] scale-[0.9] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6 shadow-[0_4px_4px_2px_rgba(255,255,255,0.5)] sm:scale-100`}
      >
        <Title />
        <Login />
      </section>

      <section
        className={`scale-[0.9] sm:scale-100 m-auto mt-5 max-w-[1028px] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6 shadow-[0_4px_4px_2px_rgba(255,255,255,0.5)]`}
      >
        <ul className={`grid grid-cols-2 grid-rows-[autofill] gap-2`}>
          <Room />
          <Room />
          <Room />
        </ul>
      </section>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import { useEffect, useState } from "react"
import io from "socket.io-client";

let socket;

const Home: NextPage = () => {
  
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const socket = io('http://localhost:8888', {
      withCredentials: true,
    });
  
      socket.on('connect', () => {
        console.log('connected')
      })

  }, []);

  return (
    <div className={`bg-red-500`}>
      <h1 className={`pt-4 pb-4 text-blue-100`}>Medical Appointment</h1>
    </div>
  );
};

export default Home;

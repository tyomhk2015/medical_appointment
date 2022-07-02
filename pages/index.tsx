import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import Login from "./components/Login";
import Meeting from "./components/Meeting";
import Room from "./components/Room";
import Title from "./components/Title";

interface ILoginType {
  user_name: string;
  room_name: string;
}
interface IRoom {
  roomName: string;
  participants: number;
}

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket>();
  const [loginData, setLoginData] = useState<ILoginType>();
  const [errorMsg, setErrorMsg] = useState("");
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [joinResult, setJoinResult] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    if (socket || typeof window === "undefined") {
      return;
    }

    const deployedURL = "https://medical-appointment-server.herokuapp.com/";
    const localURL = "http://localhost:8080";

    const clientSocket = io(localURL);

    setSocket(clientSocket);

    // Server to Client
    clientSocket.on("connect", () => {
      console.log("connected");
    });

    clientSocket.on("roomUpdate", (rooms) => {
      setRooms(rooms);
    });

    clientSocket.on("roomFull", (message) => {
      setErrorMsg(message);
      setJoinResult(false);
    });

    clientSocket.on("duplicatedJoin", (message) => {
      setErrorMsg(message);
      setJoinResult(false);
    });
  }, [socket]);

  // Client to Server.
  const testSocket = () => {
    socket?.emit("clicked", "Button is clicked");
  };

  const onSubmitHandler = (loginData: ILoginType) => {
    socket?.emit("joinRoom", loginData);
    if(!joinResult) return;
    setLoginData(loginData);
    setSelectedRoom(loginData.room_name);
  };

  const onRoomClick = (e: React.MouseEvent<HTMLLIElement>) => {
    socket?.emit("joinRoom", loginData);
    if(!joinResult || !loginData) return;
    setSelectedRoom(loginData.room_name);
  }

  return (
    <div className={`${rooms.length === 0 && `h-[100vh] flex justify-center flex-col items-center`} p-1 sm:p-5`}>
      <button
        className={`absolute bottom-2 right-3 font-bold text-white`}
        onClick={testSocket}
      >
        Click
      </button>
      <section
        className={`m-auto max-w-[448px] scale-[0.9] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6 shadow-[0_4px_4px_2px_rgba(255,255,255,0.5)] sm:scale-100`}
      >
        <Title />
        <Login onSubmitHandler={onSubmitHandler} errorMsg={errorMsg} />
      </section>

      {rooms.length > 0 && (
        <section
          className={`m-auto mt-5 max-w-[1028px] scale-[0.9] rounded-lg border-[1px] border-solid border-cyan-500 bg-white p-6 shadow-[0_4px_4px_2px_rgba(255,255,255,0.5)] sm:scale-100`}
        >
          <ul className={`grid sm:grid-cols-2 sm:grid-rows-[autofill] gap-3`}>
            {rooms?.map((room) => (
              <Room key={room.roomName} participants={room.participants} roomName={room.roomName} onClick={onRoomClick}/>
            ))}
          </ul>
        </section>
      )}
      {(selectedRoom && !!socket) && (<Meeting socket={socket} userName={loginData?.user_name} roomName={loginData?.room_name}/>)}
    </div>
  );
};

export default Home;

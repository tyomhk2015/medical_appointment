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
  const [loginData, setLoginData] = useState<ILoginType>({
    user_name: '',
    room_name: ''
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [joinResult, setJoinResult] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState('');

  const onLoginDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]: value
    });
  }

  useEffect(() => {
    if (socket || typeof window === "undefined") {
      return;
    }

    const deployedURL = "https://medical-appointment-server.herokuapp.com/";
    const localURL = "http://localhost:8080";

    const clientSocket = io(deployedURL);

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

    clientSocket.on("leave", (message) => {
      // Make new connection ready for the the next guest.
      // peerStream.srcObject = null; // Remove Peer B's video screen.
      // await initiateStream();
      console.log(message, 'left room');
      // echoJoinMsg(payload.message);
    });

  }, [socket]);

  // Client to Server.
  const testSocket = () => {
    socket?.emit("clicked", "Button is clicked");
  };

  const onSubmitHandler = () => {
    if(!loginData?.user_name || !loginData?.room_name) {
      setErrorMsg('Please write your name and the name of a room.');
      return;
    }

    setErrorMsg('');

    socket?.emit("joinRoom", loginData);

    if(!joinResult) return;

    setLoginData(loginData);
    setSelectedRoom(loginData.room_name);
  };

  const onRoomClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if(!loginData?.user_name) {
      setErrorMsg('Please write your name at above.');
      return;
    }

    setErrorMsg('');

    const room_name = e.currentTarget.id;
    if(!room_name) return;

    socket?.emit("joinRoom", {user_name: loginData.user_name, room_name: room_name});
    if(!joinResult || !loginData) return;
    
    setLoginData((prev) => ({user_name: loginData.user_name, room_name: room_name}));
    setSelectedRoom(room_name);
  }

  const onRoomClose = () => {
    socket?.emit("leave", loginData?.room_name, loginData?.user_name);
    setSelectedRoom('');
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
        <Login onSubmitHandler={onSubmitHandler} onChange={onLoginDataChange} errorMsg={errorMsg} />
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
      {(selectedRoom && !!socket) && (<Meeting socket={socket} onRoomClose={onRoomClose} userName={loginData?.user_name} roomName={loginData?.room_name}/>)}
    </div>
  );
};

export default Home;

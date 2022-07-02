import React, { useState } from "react";
import { Socket } from "socket.io-client";

interface IMeeting {
  socket: Socket | undefined
  userName: string | undefined
  roomName: string | undefined
}

const Meeting: React.FC<IMeeting> = ({socket, userName, roomName}) => {

  console.log(socket)
  socket?.emit("joinTest", 'Hey Hey');

  return (
    <div className={`absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-white p-2`}>
      <button>s</button>
      <h2>{roomName}</h2>
      
    </div>
  );
};

export default Meeting;

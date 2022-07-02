import React, { useState } from "react";
import { Socket } from "socket.io-client";

interface IMeeting {
  socket: Socket | undefined
  userName: string | undefined
  roomName: string | undefined
  onRoomClose :() => void
}

const Meeting: React.FC<IMeeting> = ({socket, userName, roomName, onRoomClose}) => {
  return (
    <div className={`absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-white p-2`}>
      <button onClick={onRoomClose} className={`scale-110 absolute right-3 top-3`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
      <h2>{roomName}</h2>
      
    </div>
  );
};

export default Meeting;

import type { NextPage } from "next";
import { useEffect, useState } from "react"
import io, {Socket} from "socket.io-client";

const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket>();

  const messageClick = () => {
    socket?.emit("clicked", "Button is clicked");
  }
  
  useEffect(() => {
    if (socket || typeof window === "undefined") {
      return;
    }

    const clientSocket = io('http://localhost:8888', {
      withCredentials: true,
    });

    setSocket(clientSocket);

    clientSocket.on('connect', () => {
      console.log('connected')
    })

  }, []);

  return (
    <div className={`bg-red-500`}>
      <h1 className={`pt-4 pb-4 text-blue-100`}>Medical Appointment</h1>
      <button onClick={messageClick}>Click</button>
    </div>
  );
};

export default Home;

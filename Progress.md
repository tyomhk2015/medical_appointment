## Day 1 (2022/06/25)

TLDR: Pondering about how to deploy Next.js w/ SocketIO to Vercel

Tried to find a way to deploy an application, which utilizes webrtc, socketIO with Next.js, that can be deployed to Vercel.

After extensive time of researching, I came to conclusion that deploying in such way was not possible.

There was a small Next.js application with socket.io on Github (<a href="https://github.com/arch-inc/nextjs-socketio-chat-example">Link</a>), but it was for deploying at Heroku.

On the brink of giving up, a post from stackoverflow (<a href="https://stackoverflow.com/questions/64795433/deploying-nextjs-front-end-and-expresss-back-end-to-heroku">Link</a>) gave an idea to achieve what I wanted. The comment wrote by '<a href="https://stackoverflow.com/users/11236310/yamo93">Yamo93</a>' gave me hope that my deploy Next.js with SocketIO to Vercel could be possible.

Deploying the frontend (Next.js) at one provider, deploying the server with SocketIO at the other provider sounded realistic approach to my goal. Since I had a similar experience during previous side project(<a href="https://github.com/tyomhk2015/mini_reactnode">Link</a>), I had feeling that this is something that is worth a try.

From local environment I successfully connected Next.js and SocketIO Server(Node.js), which are ran on different URL. To be honest, the only differences are the port numbers. (Figure 1-1)

![Screen Shot 2022-06-26 at 0 29 27](https://user-images.githubusercontent.com/35278730/175780509-930dfab3-ef30-462b-9082-209e6b0e016f.png)

(Figure 1-1)

Though it did took sometime, the official documentation of SocketIO (<a href="https://socket.io/docs/v3/handling-cors/">Link</a>) did help me to get through the CORS issue.

Left tasks for the project is to show available rooms, search and filter existing rooms, and to make 1:1 connection with a room host and a participant.

## Day 2 (2022/06/29)

Finished the main page of the application.

Seperated server.js from the current repository.<br>
The server.js will be maintained at <a href="https://github.com/tyomhk2015/medical_appointment_server">medical_appointment_server</a>

Suceeded deploying websocket server (socket.io) on Heroku, and frontend on Vercel.

<img width="873" alt="Screen Shot 2022-06-30 at 1 16 53" src="https://user-images.githubusercontent.com/35278730/176486319-3c1c584e-772e-49f3-930c-7edb5eb7bace.png">

The environment settings for deploying the websocket server took some time, due to unintuitive git repository provided by Heroku.<br>
However I overcame the setting and CORS issue with current project which are not host in localhost.

Satisfied with achieving what I have been aiming for, which is deploying websocket server and next.js app on different platform, and connecting them together with the websocket.

Huge thanks to Heroku documentation, related to node.js deployment and websocket setting.

The remaining tasks are implementing more websocket logics for chatting, making and searching for rooms, and video calls (WebRTC).

## Day 3 (2022/07/02)

Implemented joining and leaving rooms provided by socketIO, and realtime update of rooms and participants.

Validations for joining rooms are implemented.

UI has been changed.

I feel I'm getting more confident with Typescript. The time cost of dealing the Typescript error(warning) is getting shorter than one month ago.

The remaining tasks are implementing more websocket logics for chatting and video calls (WebRTC).
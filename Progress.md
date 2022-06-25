Day 1 (2022/06/25)

TLDR: Pondering about how to deploy Next.js w/ SocketIO to Vercel

Tried to find a way to deploy an application, which utilizes webrtc, socketIO with Next.js, that can be deployed to Vercel.

After extensive time of researching, I came to conclusion that deploying in such way was not possible.

There was a small Next.js application with socket.io on Github (<a href="https://github.com/arch-inc/nextjs-socketio-chat-example">Link</a>), but it was for deploying at Heroku.

On the brink of giving up, a post from stackoverflow (<a href="https://stackoverflow.com/questions/64795433/deploying-nextjs-front-end-and-expresss-back-end-to-heroku">Link</a>) gave an idea to achieve what I wanted. The comment wrote by '<a href="https://stackoverflow.com/users/11236310/yamo93">Yamo93</a>' gave me hope that my deploy Next.js with SocketIO to Vercel could be possible.

Deploying the frontend (Next.js) at one provider, deploying the server with SocketIO at the other provider sounded realistic approach to my goal. Since I had a similar experience during previous side project(<a href="https://github.com/tyomhk2015/mini_reactnode">Link</a>), I had feeling that this is something that is worth a try.

From local environment I successfully connected Next.js and SocketIO Server(Node.js), which are ran on different URL. To be honest, the only differences are the port numbers. (Figure 1-1)

(img)
(Figure 1-1)

Though it did took sometime, the official documentation of SocketIO (<a href="https://socket.io/docs/v3/handling-cors/">Link</a>) did help me to get through the CORS issue.

Left tasks for the project is to show available rooms, search and filter existing rooms, and to make 1:1 connection with a room host and a participant.


# Real-Time Chat Messaging App
[demo](https://kushaj-chat-app.vercel.app/)

![](assets/demo_image.png)

- Developed and deployed a full-stack chat application with authentication, Twilio SMS notifications, and a wide array of features, including direct/group chats, emojis, reactions, GIF support, and message editing, using JavaScript, React, Node.js, Express and Stream API.
- Implemented advanced React best practices, custom hooks, and React Context API to create a responsive, and scalable chat interface; and acquired skills to create fully custom chat applications by doing this project.
- Seamlessly integrated Twilio for real-time SMS notifications for offline users and employed Vercel for deploying the frontend application and Render for deploying the Express server, showcasing proficiency in diverse technology stacks and third-party APIs for a complete, mobile-responsive chat experience.

## Table of Contents
- [Demo Videos](#demo-videos)
    - [Sign up and Sign in process](#sign-up-and-sign-in-process)
    - [Create channels and invite people](#create-channels-and-invite-people)
    - [Direct messages and search for people/channels](#direct-messages-and-search-for-peoplechannels)
- [Dependencies](#dependencies)
- [Local Setup](#local-setup)
- [License](#license)

## Demo Videos

### Sign up and Sign in process
Sign up by providing your username, a profile photo, phone number for SMS notifications, and providing a secure password. The password is hashed and then stored in the backend.

Once signed up, you can easily login providing your username and password.

**Note**:- I am using the free version of Render to deploy the server and due to this reason, sometimes you will get a Connection error. Generally, waiting for some time, or pressing the logout button and signing in should solve this problem.

https://user-images.githubusercontent.com/24699564/227748631-5f86f1c5-f801-4239-9c34-6f34806a912e.mp4

### Create channels and invite people
Create your own channel and invite people to talk about things you are interested in. You can use emojis, reactions, GIF, edit messages, reply in threads.

https://user-images.githubusercontent.com/24699564/227748644-3d066032-9b41-4be7-aa75-b278acf774d6.mp4

### Direct messages and search for people/channels
You can also send direct messages to people and search for people.

https://user-images.githubusercontent.com/24699564/227748648-015dc8b8-57a9-4265-ade2-9f597f1c0ae2.mp4

## Dependencies
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Stream Chat](https://getstream.io/chat/)
- [stream-chat-react](https://www.npmjs.com/package/stream-chat-react)
- [universal-cookie](https://github.com/reactivestack/cookies)
- [brypt](https://github.com/kelektiv/node.bcrypt.js)
- [cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/)
- [Twilio](https://www.twilio.com/)

## Local Setup
**Step 1**. Setup Node.js v16.17.1. [nvm](https://github.com/nvm-sh/nvm) can be used to quickly setup Node.js (and you can also have multiple versions of Node.js).
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16.17.1
```

**Step 2**. Clone the repository and install all the dependencies.
```
git clone https://github.com/KushajveerSingh/chat_messaging_app
cd chat_messaging_app

cd client
npm install --legacy-peer-deps
cd ..

cd server
npm install --legacy-peer-deps
cd ..
```

`--legacy-peer-deps` would install the exact packages as used in the repository. The repository already includes VSCode and Prettier setup, and you can modify the default behavior in `.vscode/settings.json` and `.prettierrc` respectively.

**Step 3**. In the `client` folder, create `.env.local` and copy the contents from `.env.example` to `.env.local`.
- `REACT_APP_STREAM_KEY` - Goto https://getstream.io/ and create an account. And then follow the instructions to setup your first app. After creating the app, you can copy the stream key here.
- `REACT_APP_SERVER_URL` - Goto https://render.com/ and create an account. After that you can deploy the app in the `server` folder, and then copy the link of the server here.

**Step 4**. In the `server` folder, create `.env.local` and copy the contents from `.env.example` to `.env.local`.
- `STREAM_API_KEY`, `STREAM_API_SECRET`,`STREAM_APP_ID` - This information is available in the stream app you created.
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_MESSAGING_SERVICE_SID` - Goto https://www.twilio.com/ and create an account and follow the instructions to generate the tokens.

**Step 5**. In the `client` folder, run `npm run dev` to start the local development server at `localhost:3000`. Now you can customize the application as per your needs.

**Step 6**. In the `server` folder, run `npm run dev` to start the backend server.

**Step 7**. After making the desired changes you can push the code to GitHub and connect the repostiory on Vercel (for deploying the client side app) and Render (for deploying the backend server).

## License
This application has Apache License Version 2.0, as found in the [LICENSE](./LICENSE) file.

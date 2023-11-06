import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import io from "socket.io-client";

import Home from "./pages/home";
import Chat from "./pages/chat";

const socket = io.connect("http://localhost:5000");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userName={userName}
                setUserName={setUserName}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat userName={userName} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

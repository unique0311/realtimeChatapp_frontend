import styles from "./styles.module.css";
import MessagesReceived from "./messages";
import SendMessage from "./send-message";
import RoomAndUsers from "./room-and-users";

const Chat = ({ socket, userName, room }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsers socket={socket} userName={userName} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} userName={userName} room={room} />
      </div>
    </div>
  );
};

export default Chat;

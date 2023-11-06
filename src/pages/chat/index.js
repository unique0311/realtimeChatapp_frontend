import styles from "./styles.module.css";
import MessagesReceived from "./messages";
import SendMessage from "./send-message";

const Chat = ({ socket, userName, room }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} userName={userName} room={room} />
      </div>
    </div>
  );
};

export default Chat;

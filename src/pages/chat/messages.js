import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const Messages = ({ socket }) => {
  const [messageReceived, setMessageReceived] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageReceived((state) => [
        ...state,
        {
          message: data.message,
          userName: data.userName,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div className={styles.messagesColumn}>
      {messageReceived.map((msg, i) => (
        <div className={styles.message} key={i}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className={styles.msgMeta}>{msg.userName}</span>
            <span className={styles.msgMeta}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className={styles.msgText}>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Messages;

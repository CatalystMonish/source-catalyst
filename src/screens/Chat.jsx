import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where, // Import 'where' to filter the users collection
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { user } = UserAuth();
  const { receiverId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [receiverInfo, setReceiverInfo] = useState(null);

  // Firestore reference to the chat collection
  const chatRef = collection(
    db,
    "chats",
    user.uid + "-" + receiverId,
    "messages"
  );

  // Function to send a new message
  const sendMessage = async () => {
    if (!receiverId || newMessage.trim() === "") {
      console.error("ReceiverId is undefined or newMessage is empty.");
      return;
    }

    const messageData = {
      sender: user.uid,
      receiver: receiverId,
      text: newMessage,
      timestamp: new Date(),
    };

    await addDoc(chatRef, messageData);
    setNewMessage("");
  };

  // Function to listen for new messages
  useEffect(() => {
    const q = query(chatRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [chatRef]);

  useEffect(() => {
    if (receiverId) {
      const userRef = collection(db, "users");
      const userQuery = query(userRef, ("userId", "==", receiverId));

      onSnapshot(userQuery, (snapshot) => {
        if (!snapshot.empty) {
          const receiverData = snapshot.docs[0].data();
          setReceiverInfo(receiverData);
        } else {
          // Handle the case where receiver data is not found
        }
      });
    }
  }, [receiverId]);

  return (
    <div className="flex h-full flex-col">
      {receiverInfo && (
        <div className="align-center flex flex-row gap-3">
          {/* <strong>UID:</strong> {user.uid} */}
          <img
            className="h-8 w-8 rounded-full "
            src={receiverInfo.photoURL}
          ></img>
          {receiverInfo.displayName && (
            <span>
              <strong>{receiverInfo.displayName}</strong>
            </span>
          )}
        </div>
      )}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 rounded-lg p-2 ${
              message.sender === user.uid
                ? "self-end bg-blue-400 text-white"
                : "bg-gray-200 text-black"
            }`}
            style={{
              display: "flex",
              flexDirection: "column",
              wordBreak: "break-word",
              maxWidth: "70%",
              alignSelf:
                message.sender === user.uid ? "flex-end" : "flex-start",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-white p-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow rounded-full border px-4 py-2 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 rounded-full bg-blue-500 px-2 py-2 text-white hover:bg-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;

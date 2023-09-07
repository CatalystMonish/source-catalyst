import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase"; // Import Firebase services from your firebase.js file
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Chat = ({ selecteduser }) => {
  const { user } = UserAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Firestore reference to the chat collection
  const chatRef = collection(db, "chats", user.uid + "-" + selecteduser.uid, "messages");

  // Function to send a new message
  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      sender: user.uid,
      receiver: selecteduser.uid,
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
  }, []);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === user.uid ? (
              <div>Me: {message.text}</div>
            ) : (
              <div>
                {selecteduser.displayName || selecteduser.email}: {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;

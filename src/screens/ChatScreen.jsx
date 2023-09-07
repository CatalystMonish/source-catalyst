import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Adjust the import path as needed
import { collection, getDocs } from "firebase/firestore";
import Chat from "./Chat";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function ChatScreen() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch the list of users from Firestore
    async function fetchUsers() {
      const usersCollection = collection(db, "users");

      try {
        const querySnapshot = await getDocs(usersCollection);

        const userList = querySnapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));

        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div key={user.uid} className="rounded-lg border p-4 shadow-md">
            <strong>UID:</strong> {user.uid}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
            {user.displayName && (
              <span>
                <strong>Display Name:</strong> {user.displayName}
              </span>
            )}
            <Link to="/chat">
              <button
                className="bg-green"
                onClick={() => {
                  setSelectedUser(user);
                }}
              >
                Chat
              </button>
            </Link>
          </div>
        ))}
      </div>
      {selectedUser && <Chat selecteduser={selectedUser} />}
    </div>
  );
}

export default ChatScreen;

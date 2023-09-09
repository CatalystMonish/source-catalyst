import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Make sure this path is correctly adjusted
import { collection, getDocs } from "firebase/firestore";
import Chat from "./Chat";
import { Link, useParams } from "react-router-dom"; // Import useParams for extracting URL parameters
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
        console.error("Error fetching users:", error); // Handle errors appropriately
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <Link to={`/chat/${user.uid}`} key={user.uid}>
            <div
              className="rounded-lg border p-4 shadow-md"
              onClick={() => setSelectedUser(user)}
            >
              <div className="align-center flex flex-row gap-3">
                {/* <strong>UID:</strong> {user.uid} */}
                <img
                  className="h-8 w-8 rounded-full "
                  src={user.photoURL}
                ></img>
                {user.displayName && (
                  <span>
                    <strong>{user.displayName}</strong>
                  </span>
                )}
              </div>
              {/* <button
                className="align-right rounded-lg bg-green p-2"
                onClick={() => setSelectedUser(user)}
              >
                Chat
              </button> */}
            </div>
          </Link>
        ))}
      </div>
      {selectedUser && <Chat selecteduser={selectedUser} />}
    </div>
  );
}

export default ChatScreen;

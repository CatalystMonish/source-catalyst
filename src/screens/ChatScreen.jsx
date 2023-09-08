import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Make sure this path is correctly adjusted
import { collection, getDocs } from 'firebase/firestore';
import Chat from './Chat';
import { Link, useParams } from 'react-router-dom'; // Import useParams for extracting URL parameters
import { UserAuth } from "../context/AuthContext";

function ChatScreen() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch the list of users from Firestore
    async function fetchUsers() {
      const usersCollection = collection(db, 'users');
      
      try {
        const querySnapshot = await getDocs(usersCollection);
        
        const userList = querySnapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data()
        }));

        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error); // Handle errors appropriately
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.uid}
            className="border p-4 rounded-lg shadow-md"
          >
            <strong>UID:</strong> {user.uid}<br />
            <strong>Email:</strong> {user.email}<br />
            {user.displayName && (
              <span>
                <strong>Display Name:</strong> {user.displayName}
              </span>
            )}
            <Link to={`/chat/${user.uid}`}>
              <button className='bg-green' onClick={() => setSelectedUser(user)}>Chat</button>
            </Link>
          </div>
        ))}
      </div>
      {selectedUser && <Chat selecteduser={selectedUser} />}
    </div>
  );
}

export default ChatScreen;
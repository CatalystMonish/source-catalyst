import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';

function ConnectScreen({ onSelectUser }) {
  const [users, setUsers] = useState([]);

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
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <strong>UID:</strong> {user.uid}<br />
            <strong>Email:</strong> {user.email}<br />
            {user.displayName && (
              <span>
                <strong>Display Name:</strong> {user.displayName}
              </span>
            )}
            <button onClick={() => onSelectUser(user)}>Chat</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectScreen;

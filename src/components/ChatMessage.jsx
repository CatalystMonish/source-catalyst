import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatMessage = (props) => {
  const { auth } = props; // Get auth from props
  const [user] = useAuthState(auth);
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === user.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User Avatar" />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;

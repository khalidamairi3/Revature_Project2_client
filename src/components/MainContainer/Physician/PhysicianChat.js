import React, { useState } from 'react';
import ChatRoom from '../ChatRoom';

function Chat() {
  const [seeChat, setSeeChat] = useState(false);

  const handleSeeChat = () => {
    setSeeChat(!seeChat);
  }

  return (
    <div className="div-container">
      <h1>Chat</h1>
      <p>Start chatting with a patient now.</p> 
      { seeChat ? <button onClick={handleSeeChat}>Close Chat</button> : <button onClick={handleSeeChat}>Start Chat</button>}
      { seeChat ? <ChatRoom /> : null }
    </div>
  )
}

export default Chat
import React, { useState } from 'react';
import ChatRoom from '../ChatRoom';

function Chat() {
  const [seeChat, setSeeChat] = useState(false);

  const handleSeeChat = () => {
    setSeeChat(!seeChat);
  }

  return (
    <div className="div-container">
      <div className="chat-container">
        <h1>Chat</h1>
        <p>Start chatting with a trusted physician now.</p> 
        { seeChat ? <button onClick={handleSeeChat}>Close Chat</button> : <button onClick={handleSeeChat}>Start Chat</button>}
        { seeChat ? <ChatRoom closeModal={handleSeeChat} /> : null }
      </div>
    </div>
  )
}

export default Chat
import React, { useState, useEffect } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import './ChatRoom.css';

var stompClient =null;
const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab, setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: "",
        receiverName: "",
        connected: false,
        message: ""
    });

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
            // callMyFunction();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
    }, [])

    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData, "connected": true});
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
        stompClient.subscribe("/user/"+userData.username+'/private', onPrivateMessageReceived);
        userJoin();
    }

    const userJoin=()=>{
        var chatMessage = {
          senderName: userData.username,
          status:"JOIN"
        };
        stompClient.send("/chat/message", {}, JSON.stringify(chatMessage));
  }

    const onError = (err) => {
        console.log(err);
    }

    const onPublicMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
            switch(payloadData.status) {
                case "JOIN":
                    if (!privateChats.get(payloadData.senderName)) {
                        privateChats.set(payloadData.senderName, []);
                        setPrivateChats(new Map(privateChats));
                    }
                    break;
                case "MESSAGE":
                    publicChats.push(payloadData);
                    setPublicChats([...publicChats]);
                    break;
            }
    }

    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats))
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const sendPublicMessage = () => {
        if (stompClient) {
            var chatMessage = {
              senderName: userData.username,
              message: userData.message,
              status:"MESSAGE"
            };
            console.log(chatMessage);
            stompClient.send("/chat/message", {}, JSON.stringify(chatMessage));
            setUserData({...userData,"message": ""});
        }
    }

    const sendPrivateMessage = () => {
        if (stompClient) {
            let chatMessage={
                senderName: userData.username,
                receiverName: tab,
                message: userData.message,
                status: "MESSAGE"
            };
            if (userData.username !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send('/chat/private-message', {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message":""})
        }
    }

    const handleValue = (e) => {
        const {value, name} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    return (
        <div className="chat-room-container">
            {userData.connected?
            <div className="chat-box">
                <div className="member-list">
                    <ul>
                        <li onClick={ () => {setTab("CHATROOM")}} className={`member ${tab === "CHATROOM" && "active"}`}>General Chatroom</li>
                        {[...privateChats.keys()].map((name, index) => (
                            <li onClick={ () => {setTab(name)}} className={`member ${tab === name && "active"}`} key={index}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
                {tab === "CHATROOM" && <div className="chat-content">
                    <ul className="chat-messages">
                    {publicChats.map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                    </ul>

                    <div className="send-message">
                        <input 
                            type="text" 
                            className="input-message" 
                            placeholder="enter message (will be seen by everyone)" 
                            value={userData.message} 
                            onChange={handleMessage}
                        />
                        <button type="button" className="send-btn" onClick={sendPublicMessage}>send</button>
                    </div>      
                </div> }
                {tab !== "CHATROOM" && <div className="chat-content">
                    <ul className="chat-messages">
                    {[...privateChats.get(tab)].map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                    </ul>
                    <div className="send-message">
                        <input 
                            type="text" 
                            className="input-message" 
                            placeholder="enter private message"
                            value={userData.message} 
                            onChange={handleMessage}
                        />
                        <button type="button" className="send-btn" onClick={sendPrivateMessage}>send</button>
                    </div>      
                </div> }
            </div>
            :
            <div className="register"> 
                <input
                    id= "user-name"
                    className="username-input"
                    name="username"
                    placeholder= "Enter username"
                    value={userData.username}
                    onChange={handleUsername}
                    required
                />
                <button type="button" onClick={connect}>Connect</button>
            </div>
            }
        </div>
    )
}

export default ChatRoom
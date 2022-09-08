// React import
import React from "react";

// Component import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ChatRoom from "../../components/chatRoom/ChatRoom";

// Style import
import { ChatListContainer, ChatRoomList } from "./ChatList.styled";

const ChatList = () => {
  return (
    <ChatListContainer>
      <Header logo={false}/>
      <ChatRoomList>
        {Array.from({ length: 4 }, () => (
          <ChatRoom />
        ))}
      </ChatRoomList>
      <Footer />
    </ChatListContainer>
  );
};

export default ChatList;

import React from "react";



const ChatBox = () => {
  return (
    <>
      <div className="ChatBox-container">
        {(
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;


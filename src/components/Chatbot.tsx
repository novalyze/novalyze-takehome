import React, { useState, useRef, useEffect } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { responses } from "../constant/boatChat";
import ConfirmModal from "./ConfirmModal";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

//Similar kind of chatbot i have used before in a project so i took the code from there.
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showConfirmClose, setShowConfirmClose] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to generate AI responses
  const getAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    if (message.includes("order") || message.includes("tracking")) {
      return responses.order[
        Math.floor(Math.random() * responses.order.length)
      ];
    } else if (message.includes("product") || message.includes("item")) {
      return responses.product[
        Math.floor(Math.random() * responses.product.length)
      ];
    } else {
      return responses.help[Math.floor(Math.random() * responses.help.length)];
    }
  };

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  // Handle chat close confirmation
  const handleCloseChat = () => {
    setShowConfirmClose(true);
  };

  const confirmCloseChat = (confirm: boolean) => {
    if (confirm) {
      setIsChatOpen(false);
    }
    setShowConfirmClose(false);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition cursor-pointer duration-200 group"
      >
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-200 w-fit">
          Open Chatbot
        </span>

        <TbMessageChatbotFilled size={28} />
      </button>

      {/* Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-6 w-80 bg-white p-4 rounded-lg shadow-lg border md:w-1/3 md:bottom-20 flex flex-col">
          {/* Chatbot Header with Close Button */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Chatbot</h2>
            <button
              onClick={handleCloseChat}
              className="text-primary cursor-pointer hover:text-red-500"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-2 max-h-60 p-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-2 animate-pulse">
                  <p className="text-gray-500">AI is typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-primary p-2 flex gap-2">
            <input
              type="text"
              autoFocus
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button
              onClick={handleSendMessage}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmClose && (
        <ConfirmModal
          message="Are you sure you want to close the chat?"
          onConfirm={() => confirmCloseChat(true)}
          onCancel={() => confirmCloseChat(false)}
        />
      )}
    </>
  );
};

export default Chatbot;

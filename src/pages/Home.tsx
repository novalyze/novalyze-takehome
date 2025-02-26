import { useState } from "react";
import Header from "../components/Header";
import SamplePDF from "../resources/sample.pdf";

const Home: React.FC = () => {
  const [message, setMessage] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([
    { text: "What can I help with?", sender: "bot" },
    { text: "I love mathematics could you tell me a joke?", sender: "user" },
    {
      text: "Parallel lines have so much in common. It's a shame they'll never meet.",
      sender: "bot",
    },
    {
      text: "I Love Web development and coding.",
      sender: "user",
    },
    {
      text: "Ohh Nice! means you are smart",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessage([...message, { text: input, sender: "user" }]);
    setInput(""); // empty after send
  };

  return (
    <>
      <Header />
      <div className="flex h-screen bg-gray-background-dark gap-4 p-4">
        <div className="flex flex-col h-screen bg-gray-100 p-4 w-1/3">
          <h2 className="text-center font-bold">ChatGPT Dummy</h2>
          <div className="flex-1 overflow-y-auto p-4 bg-white shadow-md rounded-lg">
            {message.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg my-2 w-fit max-w-xs ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "mr-auto bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-blue-500 ml-1 text-white px-4 cursor-pointer py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
        <div className="h-screen bg-gray-100 w-2/3">
          <iframe
            src={SamplePDF}
            className="h-screen w-full border rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

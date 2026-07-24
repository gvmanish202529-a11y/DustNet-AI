import { useState } from "react";
import { Bot, User, Send } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm DustNet AI. Ask me anything about your rover.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "bot",
        text: "AI backend integration pending. This response is a frontend preview.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="flex h-[500px] flex-col rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
          <Bot className="text-orange-500" />
          DustNet AI Assistant
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-sm items-start gap-3 rounded-xl px-4 py-3 ${
                msg.sender === "user"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-800 text-white"
              }`}
            >
              {msg.sender === "bot" ? (
                <Bot size={18} />
              ) : (
                <User size={18} />
              )}

              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-orange-500"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-orange-500 p-3 transition hover:bg-orange-600"
          >
            <Send className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
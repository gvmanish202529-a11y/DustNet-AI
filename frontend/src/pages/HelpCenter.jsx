import { useState } from "react";
import { Bot, User, Send, MessageSquare, HelpCircle } from "lucide-react";

const HelpCenter = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm DustNet AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: "AI backend integration is pending. This is a frontend preview.",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const quickQuestions = [
    "How do I start a rover?",
    "Battery level information",
    "Mission status",
    "Emergency shutdown",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Help Center</h1>
        <p className="mt-2 text-slate-400">
          Get instant help using the DustNet AI Assistant.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* FAQ */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              Quick Help
            </h2>
          </div>

          <div className="space-y-3">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="w-full rounded-xl bg-slate-800 p-3 text-left text-slate-300 transition hover:bg-orange-500 hover:text-white"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Chatbot */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="flex items-center gap-3 border-b border-slate-800 p-5">
            <MessageSquare className="text-orange-500" />
            <h2 className="text-xl font-semibold text-white">
              DustNet AI Assistant
            </h2>
          </div>

          {/* Messages */}
          <div className="h-[450px] overflow-y-auto p-5 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-md gap-3 rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-orange-500 text-white"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <Bot size={20} />
                  ) : (
                    <User size={20} />
                  )}

                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-800 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask DustNet AI..."
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-orange-500"
              />

              <button
                onClick={sendMessage}
                className="rounded-xl bg-orange-500 px-5 transition hover:bg-orange-600"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
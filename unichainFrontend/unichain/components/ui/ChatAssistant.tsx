"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, MinusCircle, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";

const GEMINI_API_KEY = "AIzaSyAfev45DuOfnZ8MV9UtTNwIYHsqvciDZMQ";

interface Message {
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

interface QAPair {
  question: string;
  answer: string;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Load messages from local storage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));

        if (
          parsedMessages.length > 0 &&
          !(
            parsedMessages[0].role === "assistant" &&
            parsedMessages[0].content.includes("Chat history cleared")
          )
        ) {
          setMessages(parsedMessages);
          return;
        }
      } catch (error) {
        console.error("Error loading saved messages:", error);
      }
    }

    setMessages([
      {
        role: "assistant",
        content:
          "Hello! I'm Meleketegnaw, your AI assistant for Talak Kinash. I can help with questions about the app, but I can also answer general knowledge questions about anything else! Try asking about history, science, or any topic you're curious about.",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const qaData: QAPair[] = [
    {
      question: "What is Unichain?",
      answer:
        "Unichain is a revolutionary blockchain platform that enables secure, fast, and cost-effective transactions. It's designed to make blockchain technology accessible to everyone, offering features like smart contracts, token management, and decentralized applications.",
    },
    {
      question: "What does the Unichain web app do?",
      answer:
        "The Unichain web app provides a user-friendly interface for managing your blockchain activities. You can create and manage wallets, send and receive tokens, interact with smart contracts, stake your tokens, and explore decentralized applications built on Unichain.",
    },
    {
      question: "How do I get started with Unichain?",
      answer:
        "To get started with Unichain, visit our web app, create an account, and set up your wallet. You can then start exploring features like token transfers, staking, and interacting with dApps. Our platform is designed to be intuitive for both beginners and experienced users.",
    },
    {
      question: "What are the main features of Unichain?",
      answer:
        "Unichain offers several key features: secure wallet management, fast token transfers, smart contract deployment, token staking for rewards, NFT marketplace integration, and a developer-friendly environment for building dApps. All these features are accessible through our web interface.",
    },
    {
      question: "How do I create a wallet on Unichain?",
      answer:
        "Creating a wallet on Unichain is simple. Click the 'Create Wallet' button on our web app, follow the security setup process, and securely store your recovery phrase. Your wallet will be ready to use for transactions and other blockchain activities.",
    },
    {
      question: "What can I do with my Unichain wallet?",
      answer:
        "With your Unichain wallet, you can send and receive tokens, stake your assets to earn rewards, interact with smart contracts, participate in DeFi protocols, and manage your NFT collection. The wallet is your gateway to all Unichain features.",
    },
    {
      question: "How do I stake tokens on Unichain?",
      answer:
        "To stake tokens on Unichain, navigate to the staking section in the web app, select the tokens you want to stake, choose your staking period, and confirm the transaction. You'll start earning rewards based on your staking amount and duration.",
    },
    {
      question: "What is the Unichain token?",
      answer:
        "The Unichain token is the native cryptocurrency of our platform. It's used for transaction fees, staking, governance, and accessing premium features. Holders can participate in platform decisions and earn rewards through various mechanisms.",
    },
    {
      question: "How secure is Unichain?",
      answer:
        "Unichain implements multiple security layers including advanced encryption, secure key management, and regular security audits. Our web app uses industry-standard security practices to protect your assets and personal information.",
    },
    {
      question: "Can I develop on Unichain?",
      answer:
        "Yes! Unichain provides a comprehensive development environment. Developers can build smart contracts, create dApps, and integrate with our platform using our developer tools and documentation available on the web app.",
    },
    {
      question: "What are the transaction fees on Unichain?",
      answer:
        "Unichain offers competitive transaction fees that are typically lower than other major blockchain platforms. Fees vary based on network conditions and transaction type, but our web app always shows the current fee before you confirm any transaction.",
    },
    {
      question: "How do I track my transactions?",
      answer:
        "You can track all your transactions in real-time through the 'Transactions' section of the Unichain web app. The platform provides detailed transaction history, status updates, and receipt generation for all your blockchain activities.",
    },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clearChatHistory = () => {
    const welcomeMessage = {
      role: "assistant" as const,
      content:
        "Hello! I'm your Unichain AI assistant. I can help you understand our blockchain platform and web application features. You can ask me about wallet creation, token management, staking, smart contracts, and more. What would you like to know about Unichain?",
      timestamp: new Date(),
    };

    setMessages([welcomeMessage]);
    localStorage.removeItem("chatMessages");
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsOpen(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleGreeting = (input: string): string | null => {
    const text = input.toLowerCase();

    if (/^(hi|hello|hey|greetings|hola)(\s|$|\W)/i.test(text)) {
      return "Hello! Welcome to Unichain. I can help you explore our blockchain platform and web application features. What would you like to know about Unichain?";
    }

    if (/how are you/i.test(text)) {
      return "I'm doing well, thank you! I'm here to help you understand Unichain's features and how to use our platform. What would you like to learn about?";
    }

    if (/how('s| is) (it going|everything|things)/i.test(text)) {
      return "Everything is great! I'm ready to help you explore Unichain's blockchain platform and web application features. What can I assist you with today?";
    }

    if (/good (morning|afternoon|evening|day)/i.test(text)) {
      return "Good day to you too! I'm here to help you with Unichain. Would you like to learn about our platform features or how to get started?";
    }

    if (/thank you|thanks/i.test(text)) {
      return "You're welcome! Is there anything else you'd like to know about Unichain's platform or features?";
    }

    if (/bye|goodbye|see you/i.test(text)) {
      return "Goodbye! Feel free to return if you have more questions about Unichain. We're here to help you explore blockchain technology!";
    }

    if (/who are you|what's your name|what are you/i.test(text)) {
      return "I'm your Unichain AI assistant. I can help you understand our blockchain platform, web application features, and guide you through using Unichain's services. What would you like to know?";
    }

    return null;
  };

  const isLikelyFollowUp = (
    query: string,
    previousMessages: Message[]
  ): boolean => {
    if (previousMessages.length < 2) return false;

    const lowercaseQuery = query.toLowerCase().trim();

    const directFollowUpPatterns = [
      /^tell me more/i,
      /^more (about|on|info)/i,
      /^(and|so) (what|how|why|when)/i,
      /^what about/i,
      /^continue/i,
      /^go on/i,
      /^elaborate/i,
      /^explain (more|further)/i,
      /^examples/i,
    ];

    if (
      directFollowUpPatterns.some((pattern) => pattern.test(lowercaseQuery))
    ) {
      return true;
    }

    const followUpIndicators = [
      /\b(it|this|that|these|those|they|them|their|he|she|him|her|his)\b/i,
      /^(what|who|when|where|why|how|is|are|was|were|will|would|can|could)/i,
      /\b(also|furthermore|additionally|too|as well|next|previous|related|similar)\b/i,
      /^[^.?!]{1,20}[.?!]?$/i,
    ];

    return followUpIndicators.some((pattern) => pattern.test(lowercaseQuery));
  };

  const findBestMatch = (
    query: string,
    previousMessages: Message[] = []
  ): QAPair => {
    const greetingResponse = handleGreeting(query);
    if (greetingResponse) {
      return {
        question: query,
        answer: greetingResponse,
      };
    }

    const isFollowUp = isLikelyFollowUp(query, previousMessages);
    if (isFollowUp) {
      return {
        question: "",
        answer: "",
      };
    }

    const lowercaseQuery = query.toLowerCase();
    const blockchainKeywords = [
      "unichain",
      "blockchain",
      "crypto",
      "wallet",
      "token",
      "smart contract",
      "transaction",
      "decentralized",
      "mining",
      "staking",
      "defi",
      "nft",
    ];

    const containsBlockchainKeyword = blockchainKeywords.some((keyword) =>
      lowercaseQuery.includes(keyword)
    );

    const generalKnowledgePatterns = [
      /what is .+/i,
      /who is .+/i,
      /when .+/i,
      /where .+/i,
      /why .+/i,
      /how (to|do|does|can) .+/i,
      /tell me about .+/i,
      /explain .+/i,
      /definition of .+/i,
    ];

    const isGeneralKnowledge =
      !containsBlockchainKeyword &&
      generalKnowledgePatterns.some((pattern) => pattern.test(lowercaseQuery));

    if (isGeneralKnowledge) {
      return {
        question: "",
        answer: "",
      };
    }

    if (containsBlockchainKeyword) {
      const exactMatch = qaData.find(
        (qa) => qa.question.toLowerCase() === lowercaseQuery
      );

      if (exactMatch) return exactMatch;

      const words = lowercaseQuery.split(/\s+/);
      let bestMatchScore = 0;
      let bestMatchIndex = 0;

      qaData.forEach((qa, index) => {
        const questionWords = qa.question.toLowerCase().split(/\s+/);
        let matchScore = 0;

        words.forEach((word) => {
          if (
            word.length > 2 &&
            questionWords.some((qw) => qw.includes(word))
          ) {
            matchScore++;
          }
        });

        if (matchScore > bestMatchScore) {
          bestMatchScore = matchScore;
          bestMatchIndex = index;
        }
      });

      if (bestMatchScore > 0) {
        return qaData[bestMatchIndex];
      }
    }

    return {
      question: "",
      answer: "",
    };
  };

  const askGemini = async (
    query: string,
    previousMessages: Message[]
  ): Promise<string> => {
    try {
      console.log("Calling Gemini API for:", query);

      const conversationHistory = previousMessages.slice(0, -1).map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const currentQuery = {
        role: "user",
        parts: [{ text: query }],
      };

      const contents = [...conversationHistory, currentQuery];

      console.log(
        "Sending conversation to Gemini:",
        JSON.stringify(contents, null, 2)
      );

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [
                {
                  text: `You are an AI assistant for the Unichain blockchain platform and web application.
Your primary focus is on explaining Unichain's features, functionality, and how to use the platform.
Key topics to cover:
- Unichain's web application features and interface
- Wallet creation and management
- Token transactions and staking
- Smart contract interaction
- Platform security and benefits
- Getting started with Unichain
- Developer tools and resources

Keep responses focused on Unichain's specific features and benefits.
Maintain a helpful, professional tone while explaining technical concepts.
For follow-up questions, use conversation context to provide relevant information.
Keep responses concise (2-3 sentences) and avoid markdown formatting.
Always emphasize the user-friendly nature of the Unichain platform.`,
                },
              ],
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 200,
            },
          }),
        }
      );

      const data = await response.json();
      console.log("Gemini API response:", data);

      if (data.candidates && data.candidates[0]?.content?.parts?.length > 0) {
        let answer =
          data.candidates[0].content.parts[0].text ||
          "I couldn't find an answer to that question.";

        answer = answer.replace(/\*\*/g, "").replace(/\*/g, "");

        return answer;
      } else if (data.error) {
        console.error("Gemini API error:", data.error);

        if (isLikelyFollowUp(query, previousMessages)) {
          const prevQuestions = previousMessages
            .filter((msg) => msg.role === "user")
            .map((msg) => msg.content);

          if (prevQuestions.length > 0) {
            const lastQuestion = prevQuestions[prevQuestions.length - 1];
            const enhancedQuery = `${lastQuestion} ${query}`;
            console.log("Retrying with enhanced query:", enhancedQuery);

            const retryResponse = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  contents: [
                    {
                      parts: [
                        {
                          text: enhancedQuery,
                        },
                      ],
                    },
                  ],
                  generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 200,
                  },
                }),
              }
            );

            const retryData = await retryResponse.json();

            if (
              retryData.candidates &&
              retryData.candidates[0]?.content?.parts?.length > 0
            ) {
              let retryAnswer =
                retryData.candidates[0].content.parts[0].text ||
                "I couldn't find an answer to that question.";

              retryAnswer = retryAnswer.replace(/\*\*/g, "").replace(/\*/g, "");
              return retryAnswer;
            }
          }
        }

        return "I'm having trouble processing your request. Could you please rephrase your question?";
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);

      if (isLikelyFollowUp(query, previousMessages)) {
        return "I understand you're asking a follow-up question, but I'm having trouble connecting it to our previous conversation. Could you please provide more details?";
      }

      return "I'm sorry, I couldn't process your request at the moment. Please try asking again with more details.";
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const isFollowUp = isLikelyFollowUp(input, updatedMessages);
      let response: string;

      if (isFollowUp) {
        const contextMessages = updatedMessages.slice(-10);
        response = await askGemini(input, contextMessages);
      } else {
        const localMatch = findBestMatch(input, updatedMessages);

        if (localMatch.question === "" && localMatch.answer === "") {
          const contextMessages = updatedMessages.slice(-10);
          response = await askGemini(input, contextMessages);
        } else {
          response = localMatch.answer;
        }
      }

      const newAssistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setMessages((prev) => [...prev, newAssistantMessage]);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error processing message:", error);

      const errorMessage: Message = {
        role: "assistant",
        content:
          "I'm having trouble processing your request. Could you try asking your question differently?",
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, errorMessage]);
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg hover:opacity-90 transition-all"
        style={{
          backgroundColor: theme === "dark" ? "#fff" : "#000",
          border: "1px solid #e5e7eb",
        }}
        aria-label="Chat with Unichain AI"
      >
        {isOpen ? (
          <X
            className="h-6 w-6"
            style={{ color: theme === "dark" ? "#000" : "#fff" }}
          />
        ) : (
          <Bot
            className="h-6 w-6"
            style={{ color: theme === "dark" ? "#000" : "#fff" }}
          />
        )}
      </button>

      {isOpen && (
        <div
          className={`fixed bottom-20 right-4 z-40 w-80 md:w-96 transition-all duration-300 shadow-xl rounded-lg ${
            isMinimized ? "h-14" : "h-[70vh] max-h-[500px]"
          }`}
        >
          <Card className="h-full flex flex-col">
            <CardHeader className="p-3 border-b flex-shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  Unichain AI
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={clearChatHistory}
                    aria-label="Clear chat history"
                    title="Clear chat history"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={minimizeChat}
                    aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={toggleChat}
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <>
                <ScrollArea
                  className="flex-1 p-3"
                  style={{ maxHeight: "350px", overflowY: "auto" }}
                >
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "assistant"
                            ? "justify-start"
                            : "justify-end"
                        } mb-4`}
                      >
                        <div
                          className={`flex items-start gap-2 max-w-[80%] ${
                            message.role === "assistant"
                              ? "bg-primary/10 rounded-lg p-3"
                              : "bg-primary text-primary-foreground rounded-lg p-3"
                          }`}
                          style={{ overflowWrap: "anywhere" }}
                        >
                          {message.role === "assistant" && (
                            <Bot
                              className="h-5 w-5 mt-1"
                              style={{
                                color: theme === "dark" ? "#fff" : "#000",
                              }}
                            />
                          )}
                          <div>
                            <p className="text-sm">{message.content}</p>
                            <span className="text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex gap-2 max-w-[85%]">
                          <Avatar className="orange-gradient h-6 w-6">
                            <AvatarFallback className="text-xs">
                              AI
                            </AvatarFallback>
                          </Avatar>
                          <div className="rounded-lg px-3 py-2 bg-muted">
                            <p className="text-xs mb-1">
                              <Badge
                                variant="outline"
                                className="text-[10px] px-1"
                              >
                                Unichain AI
                              </Badge>
                            </p>
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-3 w-3 animate-spin" />
                              <p className="text-xs text-muted-foreground">
                                Thinking...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className="p-3 border-t flex gap-2"
                >
                  <Input
                    placeholder="Ask about Unichain or blockchain..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 text-xs h-8"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="orange-gradient text-primary-foreground h-8 w-8 p-0"
                    disabled={isLoading}
                    aria-label="Send message"
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </form>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
}

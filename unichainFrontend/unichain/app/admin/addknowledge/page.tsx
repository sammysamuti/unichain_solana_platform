'use client';
import { useState } from "react";
import Link from "next/link";

export default function AddKnowledgePage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  async function addKnowledge() {
    if (!question.trim() || !answer.trim()) {
      setFeedback({
        type: "error",
        message: "Both question and answer are required"
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/addKnowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });

      if (res.ok) {
        setFeedback({
          type: "success",
          message: "Knowledge added successfully!"
        });
        setQuestion("");
        setAnswer("");
      } else {
        const error = await res.json();
        throw new Error(error.message || "Failed to add knowledge");
      }
    } catch (error: any) {
      setFeedback({
        type: "error",
        message: error?.message || "Error adding knowledge"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link
            href="/admin/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/addknowledge"
            className="block py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Add Knowledge
          </Link>
          <Link
            href="/admin/settings"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Add Knowledge Base Entry</h1>
          
          {feedback.message && (
            <div
              className={`mb-4 p-4 rounded ${
                feedback.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the question..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Answer
              </label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={4}
                className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the answer..."
              />
            </div>

            <button
              onClick={addKnowledge}
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded text-white transition-colors ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isLoading ? "Adding..." : "Add Knowledge"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

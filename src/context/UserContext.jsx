import React, { createContext, useState } from "react";
import run from "../gemini";

export const datacontext = createContext();

const UserContext = ({ children }) => {
    let [speaking, setSpeaking] = useState(false);
    let [prompt, setPrompt] = useState("listening...");
    let [response, setResponse] = useState(false);

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt);
    let newText = text.replace(/\*\*/g, "").replace(/\*/g, "").replace(/google/gi, "Deepak");

    setPrompt(newText);
    speak(newText);
    setResponse(true);
    
    setTimeout(() => {
        setSpeaking(false);
    }, 5000);
  }

  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    let transcript = e.results[e.resultIndex][0].transcript;
    setPrompt(transcript);
    takeCommand(transcript.toLowerCase());  // ✅ FIXED missing `()`
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
  };

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
        window.open("https://www.youtube.com/", "_blank");
        speak("Opening YouTube");
        setPrompt("Opening YouTube...");
    } else {
        aiResponse(command);
    }

    setTimeout(() => {
        setSpeaking(false);
    }, 5000);
  }

  let value = { recognition, speaking, setSpeaking, prompt, setPrompt, response, setResponse };

  return <datacontext.Provider value={value}>{children}</datacontext.Provider>;
};

export default UserContext;

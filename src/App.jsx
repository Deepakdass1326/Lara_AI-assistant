import "./App.css";
import { CiMicrophoneOn } from "react-icons/ci";
import Elara from "./assets/ai.png"; // Your AI image
import { datacontext } from "./context/UserContext";
import { useContext } from "react";


function App() {
  let {recognition} =useContext(datacontext)
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center p-3">
      {/* AI Image */}
      <img
        className="w-48 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-[70vh] object-contain mt-[-130px] sm:mt-[-100px] md:mt-[-80px] lg:mt-[-60px]"
        src={Elara}
        alt="Elara"
      />

      {/* AI Description */}
      <h1 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        I'm Elara, Your Advanced Virtual Assistant
      </h1>

      {/* Button with Microphone Icon and Glow Effect */}
      <button onClick={()=>{
        recognition.start()
        
      }} className="mt-3 px-5 py-2 text-sm sm:text-base bg-teal-500 text-black font-semibold rounded-full shadow-lg hover:bg-teal-400 transition-all flex items-center gap-2 ring-2 ring-teal-400 ring-opacity-75 custom-glow">
        Click here <CiMicrophoneOn size={20} />
      </button>
    </div>
  );
}

export default App;

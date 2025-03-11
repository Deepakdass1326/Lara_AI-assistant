import "./App.css";
import { CiMicrophoneOn } from "react-icons/ci";
import Elara from "./assets/ai.png";
import { datacontext } from "./context/UserContext";
import { useContext } from "react";
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";


function App() {
  let { recognition, speaking, setSpeaking, prompt, setPrompt, response, setResponse } = useContext(datacontext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center p-3">
      <img
        className="w-48 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-[70vh] object-contain mt-[-130px] sm:mt-[-100px] md:mt-[-80px] lg:mt-[-60px]"
        src={Elara}
        alt="Elara"
      />

      <h1 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        I'm Elara, Your Advanced Virtual Assistant
      </h1>
        
      { 
  !speaking ? (
    <button
      onClick={() => {
        setPrompt("listening...")
        setSpeaking(true);
        setResponse(false);
        recognition.start();
      }}
      className="mt-3 px-5 py-2 text-sm sm:text-base bg-teal-500 text-black font-semibold rounded-full shadow-lg hover:bg-teal-400 transition-all flex items-center gap-2 ring-2 ring-teal-400 ring-opacity-75 custom-glow"
    >
      Click here <CiMicrophoneOn size={20} />
    </button>
  ) : <div className="flex flex-col items-center justify-center gap-2">
    {!response ? (
  <img src={speakimg} alt="" className="w-[100px]" />
) : (
  <img src={aigif} alt="" className="w-[50vh] h-[150px]" />
)}

<p className="text-white text-[1.5vmax]">{prompt}</p>

</div>

}

      
    </div>
  );
}

export default App;

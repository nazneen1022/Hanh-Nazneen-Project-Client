import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const recognition = new SpeechRecognition();

recognition.continous = true;

recognition.lang = "en-US";

const options = {
  autoStart: false,
};

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  const [listening, setListening] = useState(false);
  const [mycolor, setMycolor] = useState("green");

  useEffect(() => {
    function handleListen() {
      // handle speech recognition here
      if (listening) {
        setMycolor("red");
        startListening();
        recognition.onend = () => recognition.start();
      } else {
        setMycolor("green");
        stopListening();
      }
    }
    handleListen();
  }, [listening, startListening, stopListening]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <label>Speak something, it will be displayed below</label>
      <br />
      <br />
      <button onClick={resetTranscript}>Reset</button>
      <br />
      <button
        style={{
          width: "110px",
          height: "30px",
          background: mycolor,
          borderRadius: "5px",
          margin: "6em 0 2em 0",
        }}
        onClick={() => setListening(!listening)}
      >
        {!listening ? "Start Recording" : "Stop Recording"}
      </button>
      <br />
      {/* <span>{transcript}</span> */}
      <textarea id="mytextarea" defaultValue={transcript}></textarea>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);

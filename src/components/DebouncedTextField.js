import React, { useState, useEffect } from "react";

const DebouncedTextField = ({ initText, onTextChange, type, placeholder }) => {
  const [text, setText] = useState(initText);
  const [debouncedText, setDebouncedText] = useState(initText);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerID);
    };
  }, [text]);

  useEffect(() => onTextChange(debouncedText), [debouncedText, onTextChange]);

  if (type === "textarea") {
    return (
      <textarea
        className="form-control form-control-lg"
        rows="5"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    );
  } else {
    return (
      <input
        className="form-control form-control-lg"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder={placeholder}
      />
    );
  }
};

export default DebouncedTextField;

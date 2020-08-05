import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Dropdown from "./Dropdown";
import DebouncedTextField from "./DebouncedTextField";

const GoogleTranslateAPIKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

const Translate = () => {
  const options = [
    {
      label: "Chinese (Simplified)",
      value: "zh",
    },
    {
      label: "Japanese",
      value: "ja",
    },
    {
      label: "Korean",
      value: "ko",
    },
  ];

  const [selection, setSelection] = useState(options[0]);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    const makeAPIRequest = async () => {
      try {
        const res = await Axios.post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: text,
              target: selection.value,
              key: GoogleTranslateAPIKey,
            },
          }
        );
        const translatedText = res.data.data.translations[0].translatedText;
        setTranslatedText(translatedText);
      } catch (error) {
        setErr(error);
      }
    };

    if (text) {
      makeAPIRequest();
    }
  }, [text, selection]);

  return (
    <div>
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="card">
            <div className="card-header" style={{ height: "70px" }}>
              <h4>English</h4>
            </div>
            <div className="card-body">
              <DebouncedTextField
                initText={text}
                onTextChange={setText}
                type="textarea"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 p-0">
          <div className="card" style={{ height: "100%", minHeight: "200px" }}>
            <div className="card-header" style={{ height: "70px" }}>
              <h4 className="d-inline">Translate to </h4>
              <Dropdown
                options={options}
                selection={selection}
                onSelectionChange={setSelection}
              />
            </div>
            <div className="card-body">
              {translatedText}
              {err && (
                <Fragment>
                  {" "}
                  {err.toString()} <br /> The Google Translate API can only be
                  accessed with the "localhost:3000" url.
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;

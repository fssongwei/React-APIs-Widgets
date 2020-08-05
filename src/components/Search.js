import React, { useState, useEffect } from "react";
import Axios from "axios";
import DebouncedTextField from "./DebouncedTextField";

const Search = () => {
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await Axios("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            format: "json",
            origin: "*",
            srsearch: text,
          },
        });
        const data = response.data.query.search;
        setResults(data);
      } catch (error) {
        // TODO: Error Handling
      }
    };
    if (text) getResponse();
  }, [text]);

  const titleList = results.map((result, index) => {
    return (
      <a
        key={index}
        className={`list-group-item list-group-item-action ${
          index === 0 ? "active" : ""
        }`}
        data-toggle="list"
        href={`#list-${index}`}
      >
        {result.title}
      </a>
    );
  });

  const contentList = results.map((result, index) => {
    return (
      <div
        key={index}
        className={`tab-pane fade show ${index === 0 ? "active" : ""}`}
        id={`list-${index}`}
      >
        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        <a
          className="btn btn-raised btn-info"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Wiki Page
        </a>
      </div>
    );
  });

  return (
    <div>
      <DebouncedTextField
        initText={text}
        onTextChange={setText}
        type="input"
        placeholder="Search something from wiki ..."
      />

      <div className="row mt-5">
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            {titleList}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="nav-tabContent">
            {contentList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

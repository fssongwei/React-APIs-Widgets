import React, { useState, useEffect } from "react";
import unsplash from "../apis/unsplash";
import DebouncedTextField from "./DebouncedTextField";

const Photo = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await unsplash.get("/search/photos", {
          params: { query: text },
        });
        setImages(response.data.results);
      } catch (error) {
        // TODO: Error Handling
      }
    };
    if (text) getResponse();
  }, [text]);

  const imageList = images.map((image, index) => {
    return (
      <div className="card" key={image.id}>
        <img
          src={image.urls.regular}
          alt={image.description}
          style={{ width: "100%" }}
        />
      </div>
    );
  });

  return (
    <div>
      <DebouncedTextField
        initText={text}
        onTextChange={setText}
        type="input"
        placeholder="Search something from unsplash ..."
      />

      <div className="card-columns mt-5">{imageList}</div>
    </div>
  );
};

export default Photo;

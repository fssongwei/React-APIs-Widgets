import React, { useState, useEffect, Fragment } from "react";
import youtube from "../../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    onFormSubmit("");
  }, []);

  const onFormSubmit = async (term) => {
    try {
      setErrMsg("");
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      setErrMsg(
        <Fragment>
          {error.toString()} <br />
          <p
            dangerouslySetInnerHTML={{
              __html: error.response.data.error.message,
            }}
          ></p>
        </Fragment>
      );
    }
  };

  return (
    <div>
      <SearchBar onFormSubmit={onFormSubmit} />
      {videos.length === 0 && (
        <div className="container mt-5 text-center">
          {errMsg ? errMsg : "Loading"}
        </div>
      )}

      {videos.length !== 0 && (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList videos={videos} onVideoSelected={setSelectedVideo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

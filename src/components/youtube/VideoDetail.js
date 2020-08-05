import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> loading </div>;
  } else {
    return (
      <div className="card" height="100%">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allowFullScreen=""
          width="100%"
          height="500px"
        ></iframe>
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;

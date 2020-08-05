import React, { useState } from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const onVideoItemClick = (index) => {
    setSelectedVideoIndex(index);
  };

  const videosList = videos.map((video, index) => {
    const selected = selectedVideoIndex === index;

    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
        selected={selected}
        index={index}
        onVideoItemClick={onVideoItemClick}
      />
    );
  });

  return (
    <div>
      <div className="list-group list-group-flush">{videosList} </div>
    </div>
  );
};

export default VideoList;

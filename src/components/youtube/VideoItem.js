import React from "react";

const VideoItem = ({
  video,
  onVideoSelected,
  selected,
  index,
  onVideoItemClick,
}) => {
  // const isActiveClass = selected ? "active" : "";

  return (
    <div
      className="list-group-item list-group-item-action list-group-item-light p-0 d-flex mb-2"
      onClick={() => {
        onVideoSelected(video);
        onVideoItemClick(index);
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{ width: "168px" }}
      />

      <p className="d-inline text-dark" style={{ flex: 1 }}>
        {video.snippet.title}
      </p>
    </div>
  );
};

export default VideoItem;

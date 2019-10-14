import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item card m-4 border border-gray">
      <img
        className="card-img-top"
        alt={video.snippet.channelTittle}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="card-body">
        <p className="card-text titulo">{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;

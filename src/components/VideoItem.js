import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <div className="ui segment">
        <img
          className="ui image"
          alt={video.snippet.channelTittle}
          src={video.snippet.thumbnails.medium.url}
        />

        <div className="header">
          <p className="orange">{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

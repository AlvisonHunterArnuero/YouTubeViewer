import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
   <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
      </div>
    );
  });

  return (<div className="row">{renderedList}</div>);
};
export default VideoList;

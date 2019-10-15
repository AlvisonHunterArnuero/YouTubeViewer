import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, index) => {
    return (
   <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
      />
      </div>
    );
  });

  return (<div className="row">{renderedList}</div>);
};
export default VideoList;

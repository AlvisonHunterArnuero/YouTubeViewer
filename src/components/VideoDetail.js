import React from "react";

const VideoDetail = ({ video }) => {
  let msgTitle = !video ? "Please type in your search criteria" : <b className="text-uppercase">You are now watching: {video.snippet.title}</b>;
  let msgDescription = !video ? "Video Description will appear here upon video selection process.": <h6>{video.snippet.description}</h6>;

  const videoSrc = !video
    ? ""
    : `https://www.youtube.com/embed/${video.id.videoId}`;
  return (<>
  <div className="embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item" title={msgTitle} src={videoSrc} />
</div>
<div className="col-12 p-3 mb-2 bg-info text-white"><b>{msgTitle}</b>
{msgDescription}</div>
</>
  );
};

export default VideoDetail;

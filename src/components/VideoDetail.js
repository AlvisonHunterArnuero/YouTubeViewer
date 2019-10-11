import React from "react";

const VideoDetail = ({ video }) => {
  let msgTitle = !video ? (
    "Please type in your search criteria"
  ) : (
    <p className="ui green label">
      You are now watching: {video.snippet.title}
    </p>
  );

  let msgDescription = !video ? (
    <p className="ui phm bg-white blue">
      Video Description will appear here upon video selection process.
    </p>
  ) : (
    <p className="ui phm bg-white blue">{video.snippet.description}</p>
  );

  const videoSrc = !video
    ? ""
    : `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title={msgTitle} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{msgTitle}</h4>
        <div className="phm bg-blue black">{msgDescription}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

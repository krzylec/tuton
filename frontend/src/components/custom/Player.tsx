import { useState } from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
  url: string;
  placeholderUrl?: string;
}

export default function Player(props: Readonly<PlayerProps>) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const VideoPlayer = () => {
    return (
      <video key={props.url} controls onError={handleError}>
        <source src={props.url} type="video/mp4" />
      </video>
    );
  };

  const PlaceHolder = () => {
    return <ReactPlayer url={props.placeholderUrl} />;
  };

  return (
    <div className="">
      <div>{error ? <PlaceHolder /> : <VideoPlayer />}</div>
    </div>
  );
}

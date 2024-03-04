import {useEffect, useState} from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
    url: string;
}

export default function Player({url}: Readonly<PlayerProps>) {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };

    useEffect(() => {
        setError(false);
    }, [url]);
    const VideoPlayer = () => {
        return (
            <video controls onError={handleError}>
                <source src={url} type="video/mp4"/>
            </video>
        );
    };

    const PlaceHolder = () => {
        return <ReactPlayer url="https://www.youtube.com/watch?v=xXik7-co1M8"/>;
    };

    return (
        <div className="">
            <div>{error ? <PlaceHolder/> : <VideoPlayer/>}</div>
        </div>
    );
}

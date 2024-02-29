import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function Player() {

    const [url, setUrl] = useState<string>("https://www.youtube.com/watch?v=xvFZjo5PgG0");

    return (
        <div className="">
            <th>Custom URL</th>
            <td>
                <input className="border"
                    type="text"
                    placeholder="Enter URL"
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}>
                </input>
            </td>
            <ReactPlayer url={url} />
        </div>
    )
}
import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function Player() {

    return (
        <div>
            <th>Custom URL</th>
            <td><input className=" border" type="text" placeholder="Enter URL"></input></td>
            <ReactPlayer url='https://www.youtube.com/watch?v=cIFmYOyeLpI&t=22657s' />
        </div>
    )
}
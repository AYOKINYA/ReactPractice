import React, { useEffect, useRef } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "localhost";


const RtspPlayer = ({width, height}) => {

    const vidRef = useRef();

    useEffect(() => {

        console.log(vidRef.current)

        console.log(width, height)

        var videoUrl = `ws://${ffmpegIP}:6789/`;
        var player = new JSMpeg.VideoElement(vidRef.current, videoUrl, {
          autoplay: true,
        });
        console.log(player);
        // player.player.audioOut.context.resume();
      });

    return (
        <div id="video-canvas" ref={vidRef} style={{ width: width, height: height, zIndex: 0}}></div>
    )
}

export default RtspPlayer;
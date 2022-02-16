import React from "react";
import { useRef } from "react";
import HlsPlayer from "../Video/HlsPlayer";

const Camera = () => {

  const vidRef = useRef();

  return (
      <div style={{width:"100%", height:"100%", position: 'absolute'}}>
            <HlsPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={true}
                muted="muted"
                loop="loop"
                controls={true}
                width="100%"
                height="100%"
                vidRef={vidRef}
            />
      </div>
  );
}

export default Camera;
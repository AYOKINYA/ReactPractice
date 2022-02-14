import React, { useEffect } from "react";
import Hls from 'hls.js';

const HlsPlayer = ({
    hlsConfig,
    // vidRef,
    src,
    autoPlay,
    vidRef,
    ...props
  }) => {

    // vidRef = React.useRef(null); // 올바른 위치인가?

    const tmp = (e) => {
      console.log((e.nativeEvent.offsetX));
      console.log((e.nativeEvent.offsetY));
    }
  
    useEffect(() => {

      if (vidRef.current != null) {
        console.log(vidRef.current.offsetWidth);
        console.log(vidRef.current.offsetHeight);
      }

        let hls;
    
        function _initPlayer() {
          if (hls != null) {
            hls.destroy();
          }
    
          const newHls = new Hls({
            enableWorker: false,
            ...hlsConfig,
          });
    
          if (vidRef.current != null) {
            newHls.attachMedia(vidRef.current);  
          }
    
          newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
            newHls.loadSource(src);

            newHls.on(Hls.Events.MANIFEST_PARSED, () => {
              if (autoPlay) {
                vidRef?.current
                  ?.play()
                  .catch(() =>
                    console.log(
                      'Unable to autoplay prior to user interaction with the dom.'
                    )
                  );
              }
              
            });
          });
    
          newHls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  newHls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  newHls.recoverMediaError();
                  break;
                default:
                  _initPlayer();
                  break;
              }
            }
          });
    
          hls = newHls;
        }
    
        // Check for Media Source support
        if (Hls.isSupported()) {
          _initPlayer();
        }
    
        return () => {
          if (hls != null) {
            hls.destroy();
          }
        };


      }, [autoPlay, hlsConfig, vidRef, src]);
    
      // If Media Source is supported, use HLS.js to play video
      if (Hls.isSupported()) {
        return (<video ref={vidRef} {...props} />);
      }
    
      // Fallback to using a regular video player if HLS is supported by default in the user's browser
      return <video ref={vidRef} src={src} autoPlay={autoPlay} {...props} />;
}

export default HlsPlayer;
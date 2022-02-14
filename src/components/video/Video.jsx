import Cards from "../layout/DemoCards";
import HlsPlayer from "./HlsPlayer";
import React, { useRef } from "react";
import html2canvas from "html2canvas";

const Video = () => {

    const vidRef = useRef();

    const capture = (e) => {
      console.log("Capture");
      html2canvas(vidRef.current).then(
        (canvas) => {
          const x = e.nativeEvent.offsetX;
          const y = e.nativeEvent.offsetY;
          console.log(x);
          console.log(y);
          const img = canvas.getContext('2d').getImageData(x - 200, y - 150, 200, 200)
          const c = document.createElement("canvas");
          
          c.width = 200;
          c.height = 200;
          c.getContext('2d').putImageData(img, 0, 0)
          onSaveAs(c.toDataURL('image/png'), 'image-download.png')
        })
    }

    const onSaveAs = (url, filename) => {
      console.log("Save As");
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = url;
      link.download = filename;
      link.click();
      document.body.removeChild(link);
    }

    const clickTarget = (e) => {
      if (e.nativeEvent.offsetY > vidRef.current.offsetHeight)
        return ;
      vidRef.current.click();
      capture(e);
      console.log('video width : ', vidRef.current.offsetWidth);
      console.log('video height : ', vidRef.current.offsetHeight);
      console.log('current X : ', e.nativeEvent.offsetX)
      console.log('current Y : ', e.nativeEvent.offsetY)

    };

    const open = true;

    return (
      <div style={{position: "relative"}}>
          <HlsPlayer
          src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          autoPlay={true}
          muted={"muted"}
          loop={"loop"}
          controls={false}
          width="100%"
          height="auto"
          vidRef={vidRef}
        />
        <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
          <Cards open={open} clickTarget={clickTarget}/>
        </div>
      </div>
    )
}

export default Video;
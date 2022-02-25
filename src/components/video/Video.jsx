import Cards from "./Cards";
import HlsPlayer from "./HlsPlayer";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import RtspPlayer from "./RtspPlayer";

const Video = () => {

    const vidRef = useRef();

    const capture = (e) => {
      console.log("Capture");
      html2canvas(vidRef.current).then((canvas) => {
            const w = vidRef.current.offsetWidth;
            const h = vidRef.current.offsetHeight;
            console.log('video width : ', vidRef.current.offsetWidth);
            console.log('video height : ', vidRef.current.offsetHeight);
            console.log('canvas width : ', canvas.width)
            console.log('canvas height : ', canvas.height)
            

            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            console.log('current X : ', e.nativeEvent.offsetX)
            console.log('current Y : ', e.nativeEvent.offsetY)

            const cx = x / w * canvas.width;
            const cy = y / h * canvas.height;
            const left = Math.max(cx - 100, 0);
            const top = Math.max(cy - 100, 0);
            const width = Math.min(200, canvas.width - left);
            const height = Math.min(200, canvas.height - top);
            console.log(top, left, width, height);

            const img = canvas.getContext('2d').getImageData(left, top, width, height);
            const c = document.createElement("canvas");
            c.width = width;
            c.height = height;
            c.getContext('2d').putImageData(img, 0, 0);
            onSaveAs(c.toDataURL(), 'image-download.png');

            // when pixel size fixed to 200px x 200px
            // const cx = x / w * canvas.width;
            // const cy = y / h * canvas.height;
            // var img = canvas.getContext('2d').getImageData(cx - 100, cy - 100, 200, 200);
            // const c = document.createElement("canvas");
            // c.width = 200;
            // c.height = 200;
            // c.getContext('2d').putImageData(img, 0, 0);
            // onSaveAs(c.toDataURL(), 'image-download.png')
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
      if (
          (e.target.className !== 'react-grid-layout layout') || // Video 화면을 선택하는 게 아닐 때
          (e.nativeEvent.offsetY > vidRef.current.offsetHeight) // 빈 화면을 클릭할 때
        ) {
          return ;
        }

      vidRef.current.click();
      console.log('current event : ', e.nativeEvent)
      capture(e);
      console.log('video width : ', vidRef.current.offsetWidth);
      console.log('video height : ', vidRef.current.offsetHeight);
      console.log('current X : ', e.nativeEvent.offsetX)
      console.log('current Y : ', e.nativeEvent.offsetY)

    };

    const open = true;

    return (
      <div style={{position: "relative"}}>
          {/* <HlsPlayer
          src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          autoPlay={true}
          muted={"muted"}
          loop={"loop"}
          controls={false}
          width="100%"
          height="auto"
          vidRef={vidRef}
        /> */}
            <RtspPlayer width="100%" height="1080px"/>
        <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
          <Cards open={open} clickTarget={clickTarget}/>
        </div>
      </div>
    )
}

export default Video;
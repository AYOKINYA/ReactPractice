import Cards from "../layout/DemoCards";
import HlsPlayer from "./HlsPlayer";
import React, { useRef } from "react";
import html2canvas from "html2canvas";

const Video = () => {

    const vidRef = useRef();

    const capture = (e) => {
      console.log("Capture");
      html2canvas(vidRef.current, {
        width: vidRef.current.offsetWidth,
        height: vidRef.current.offsetHeight
      }).then(
        (canvas) => {
          const x = e.nativeEvent.clientX;
          const y = e.nativeEvent.clientY;
          console.log('video width : ', vidRef.current.offsetWidth);
          console.log('video height : ', vidRef.current.offsetHeight);
          console.log('canvas w : ', canvas.width)
          console.log('canvas h : ', canvas.height)
          console.log('x : ', x)
          console.log('y : ', y)

          let croppedCanvas = document.createElement("canvas");
          let croppedCanvasContext = croppedCanvas.getContext("2d");
          console.log("ctx : ", croppedCanvasContext)

          croppedCanvas.width = 300;
          croppedCanvas.height = 300;

          croppedCanvasContext.drawImage(
            canvas, //image
            x - 300, //sx
            y - 200, //sy
            300, //sw
            300, // sh
            0, // dx
            0, // dy
            300, //dw
            300 // dw
          );

          onSaveAs(croppedCanvas.toDataURL('image/png'), 'image-download.png')

         
          // const img = canvas.getContext('2d').getImageData(x - 200, y - 150, 200, 200)
          // const c = document.createElement("canvas");
          
          // c.width = 200;
          // c.height = 200;
          // c.getContext('2d').putImageData(img, 0, 0)
          // onSaveAs(c.toDataURL('image/png'), 'image-download.png')
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
      console.log('current event : ', e.nativeEvent)
      capture(e);
      // console.log('video width : ', vidRef.current.offsetWidth);
      // console.log('video height : ', vidRef.current.offsetHeight);
      // console.log('current X : ', e.nativeEvent.offsetX)
      // console.log('current Y : ', e.nativeEvent.offsetY)

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
import Cards from "./Cards";
import HlsPlayer from "./HlsPlayer";

const Video = () => {
    return (
        // <div style={{position: "relative", width:"100vw", height:"100vh", top: "0", bottom: "0", right: "0", left: "0"}}>
            
        //     {/* <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
        //         <Cards/>
        //     </div> */}
        // </div>
        // <div style={{position: "relative"}}>
        //     <video 
        //         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" muted loop autoPlay
        //         width="100%"
        //         height="100%">
        //     </video>
        // </div>
        <HlsPlayer
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        autoPlay={true}
        muted={"muted"}
        controls={true}
        width="100%"
        height="auto"
      />
    )
}

export default Video;
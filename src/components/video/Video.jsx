import Cards from "./Cards";
import Controller from "./Controller";

const Video = () => {
    return (
        <div style={{position: "relative", width:"100vw", height:"100vh"}}>
            <video 
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" muted loop autoPlay
            width="100%"
            height="100%">
            </video>
            <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
                <Cards/>
                <Controller />
            </div>
        </div>
    )
}

export default Video;
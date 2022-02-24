import React, { useEffect, useRef }  from "react";

import JoyStick from "./joy";

const RollStick = () => {

    const stickRef = useRef();

    useEffect(() => {
        const joy = new JoyStick(stickRef.current);
    }, [])

    return (
        <div id="joyDiv" ref={stickRef} style={{width: "200px", height: "200px", marginBottom: "20px"}}>
            
        </div>
    )
}

export default RollStick;
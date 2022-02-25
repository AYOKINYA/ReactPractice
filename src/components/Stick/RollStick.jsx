import React, { useState, useEffect, useRef }  from "react";

import JoyStick from "./joy";

function isEmptyObject(param) {
    return Object.keys(param).length === 0 && param.constructor === Object;
  }

const RollStick = () => {

    const stickRef = useRef();

    // const [posX, setPosX] = useState(0);
    // const [posY, setPosY] = useState(0);

    useEffect(() => {
        const joy = new JoyStick(stickRef.current);

        // setInterval(() => {
        //     if (!isEmptyObject(joy)) {
        //         console.log(joy.GetPosX());
        //         console.log(joy.GetX());
        //     }
        // }, 1000)
    }, [])

    return (
        <>
        <div id="joyDiv" ref={stickRef} style={{width: "200px", height: "200px", marginBottom: "20px", marginTop: "200px", marginLeft: "500px"}}>
        </div>
        </>
    )
}

export default RollStick;
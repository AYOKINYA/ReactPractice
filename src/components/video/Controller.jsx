import React, { useEffect, useRef } from 'react';
import nipplejs from 'nipplejs';

const Controller = () => {

    const pad = useRef(null);

    const print = () => {
        console.log(pad);
    }

    useEffect(()=> {
        var options = {
            zone: pad.current,
            threshold: 0.1,
            position: {  top: '80%', left: '75%' },
            mode: 'static',
            size: 150,
            color: 'rgba(0,0,0,1)',
            };
        var manager = nipplejs.create(options);
    }, [])

    return (
        <div id="game-pad" style={{zIndex: "100"}} ref={pad} onClick={print}>
            a
        </div>
    )
}

export default Controller;
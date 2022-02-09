// import React, { useEffect, useRef } from 'react';
// import nipplejs from 'nipplejs';

// const ControlPad = () => {

//     const pad = useRef(null);

//     const print = () => {
//         console.log(pad);
//     }

//     useEffect(()=> {
//         console.log(pad)
//         var options = {
//             zone: pad.current,
//             threshold: 0.1,
//             position: {  top: '60%', left: '25%' },
//             mode: 'static',
//             size: 150,
//             color: 'blue',
//             };
//         var manager = nipplejs.create(options);
//     }, [])

//     return (
//         <div id="game-pad" ref={pad} onClick={print}>
//             a
//         </div>
//     )
// }

// export default ControlPad;

import nipplejs from 'nipplejs';
import isEqual from 'lodash.isequal';
import React, { Component } from 'react';

import cx from 'classnames';

export default class ControlPad extends Component {

    constructor(props) {
        super(props);
        this.handleElement = this.handleElement.bind(this);
        this.handleJoystickDir = this.handleJoystickDir.bind(this);
        this.handleJoystickEnd = this.handleJoystickEnd.bind(this);
        this.handleJoystickHidden = this.handleJoystickHidden.bind(this);
        this.handleJoystickMove = this.handleJoystickMove.bind(this);
        this.handleJoystickPlain = this.handleJoystickPlain.bind(this);
        this.handleJoystickPressure = this.handleJoystickPressure.bind(this);
        this.handleJoystickShown = this.handleJoystickShown.bind(this);
        this.handleJoystickStart = this.handleJoystickEnd.bind(this);
    }

    get ownProps() {
        return [
            'options',
            'static',
            'onStart',
            'onEnd',
            'onMove',
            'onDir',
            'onPlain',
            'onShown',
            'onHidden',
            'onPressure',
            'onCreated'
        ];
    }
    get elementProps() {
        return Object.entries(this.props).reduce((result, [key, value]) => {
            if (this.ownProps.includes(key)) {
                return result;
            }
            result[key] = value;
            return result;
        }, {});
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.options, this.props.options)) {
            this.destroyJoystick();
            this.createJoystick();
        }
    }

    render() {
        return (
            <div {...this.elementProps} ref={this.handleElement} className={cx('ReactNipple', this.props.className)} />
        );
    }

    //-----------------------------------
    //
    // impl
    //
    //-----------------------------------

    handleElement(ref) {
        this._element = ref;
        if (ref) {
            this.createJoystick();
        } else if (this._element) {
            this.destroyJoystick();
        }
    }
    createJoystick() {
        const options = {
            zone: this._element,
            ...this.props.options
        };

        if (this.props.static) {
            options.mode = 'static';
            options.position = {
                top: '50%',
                left: '50%'
            };
        }

        const joystick = nipplejs.create(options);
        joystick.on('start', this.handleJoystickStart);
        joystick.on('end', this.handleJoystickEnd);
        joystick.on('move', this.handleJoystickMove);
        joystick.on('dir', this.handleJoystickDir);
        joystick.on('plain', this.handleJoystickPlain);
        joystick.on('shown', this.handleJoystickShown);
        joystick.on('hidden', this.handleJoystickHidden);
        joystick.on('pressure', this.handleJoystickPressure);

        this.joystick = joystick;

        if (this.props.onCreated) {
            this.props.onCreated(this.joystick);
        }
    }
    destroyJoystick() {
        if (this.joystick) {
            this.joystick.destroy();
            this.joystick = undefined;
        }
    }
    invokeCallback(type, evt, data) {
        if (this.props[type]) {
            this.props[type](evt, data);
        }
    }

    handleJoystickStart(evt, data) {
        this.invokeCallback('onStart', evt, data);
    }

    handleJoystickEnd(evt, data) {
        this.invokeCallback('onEnd', evt, data);
    }

    handleJoystickMove(evt, data) {
        this.invokeCallback('onMove', evt, data);
    }

    handleJoystickDir(evt, data) {
        this.invokeCallback('onDir', evt, data);
    }

    handleJoystickPlain(evt, data) {
        this.invokeCallback('onPlain', evt, data);
    }

    handleJoystickShown(evt, data) {
        this.invokeCallback('onShown', evt, data);
    }

    handleJoystickHidden(evt, data) {
        this.invokeCallback('onHidden', evt, data);
    }
 
    handleJoystickPressure(evt, data) {
        this.invokeCallback('onPressure', evt, data);
    }
}
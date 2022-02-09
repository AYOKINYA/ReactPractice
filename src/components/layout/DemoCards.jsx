import RGL, { WidthProvider } from "react-grid-layout";
import _ from "lodash";
import React, { useEffect, useState } from 'react';

import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css'

import LineDemo from "../video/LineDemo"
import AreaDemo from "../video/AreaDemo"
import ControlPanel from "./ControlPanel";

const ReactGridLayout = WidthProvider(RGL);

const DemoCards = ({open}) => {

    const defaultVals = { //temporary
        className: "layout",
        items: 3, // # of cards
        rowHeight: 30,
        y: 12,
        cols: 12,
        onLayoutChange: function() {},
        compactType: null
    };

    const [layout, setLayout] = useState();

    const generateLayout = () => { //temporary
        const v = defaultVals;
        return _.map(new Array(v.items), function (item, i) {
            const y = _.result(v, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: 9,
                y: i,
                w: 3,
                h: i === 2 ? 9 : 6,
                maxW: 12,
                maxH: 12,
                i: i.toString(),
                // static: true면 사이즈 위치 고정
            }
        })
    }

    const onLayoutChange = () => {defaultVals.onLayoutChange()}

    useEffect(() => {
        setLayout(generateLayout())
    }, []);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, [open]);


    const generateDOM = () => {
        return _.map(_.range(defaultVals.items), function(i) {
          return (
            <div key={i} className={i === 2 ? "control" : ""}>
              <span className="text"></span>
              {i === 0 ? <LineDemo/> : i === 1 ? <AreaDemo/> : <ControlPanel/>}
            </div>
          );
        });
      }


    return (
        <div>
            <ReactGridLayout
            layout={layout}
            // isBounded={true}
            onLayoutChange={onLayoutChange}
            useCSSTransforms={true}
            {...defaultVals}
            >
            {generateDOM()}
            </ReactGridLayout>
        </div>
    )
}

export default DemoCards;
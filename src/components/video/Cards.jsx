import RGL, { WidthProvider } from "react-grid-layout";
import _ from "lodash";
import React, { useEffect, useState } from 'react';

import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css'

import LineDemo from "./LineDemo"
import AreaDemo from "./AreaDemo"

const ReactGridLayout = WidthProvider(RGL);

const Cards = () => {

    const defaultVals = { //temporary
        className: "layout",
        items: 2,
        rowHeight: 30,
        // width: 600,
        y: 12,
        cols: 12,
        onLayoutChange: function() {},
        verticalCompact: false
    };

    const [layout, setLayout] = useState();

    const generateLayout = () => { //temporary
        const v = defaultVals;
        return _.map(new Array(v.items), function (item, i) {
            const y = _.result(v, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: 8,
                y: i,
                w: 2,
                h: 5,
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

    const generateDOM = () => {
        return _.map(_.range(defaultVals.items), function(i) {
          return (
            <div key={i}>
              <span className="text"></span>
              {i === 0 ? <LineDemo/> : <AreaDemo/>}
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

export default Cards;
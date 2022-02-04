
import RGL, { WidthProvider } from "react-grid-layout";
import _ from "lodash";
import React, { useEffect, useState } from 'react';

import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css'

import './grid-style.css'

const ReactGridLayout = WidthProvider(RGL);

const Grid = () => {

    const defaultVals = { //temporary
        className: "layout",
        items: 2,
        rowHeight: 30,
        // width: 600,
        y: 12,
        onLayoutChange: function() {},
        cols: 12
    };

    const [layout, setLayout] = useState();

    const generateLayout = () => { //temporary
        const v = defaultVals;
        return _.map(new Array(v.items), function (item, i) {
            const y = _.result(v, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: 12,
                y: i ? y * i : 6,
                w: 3,
                h: 5,
                i: i.toString()
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
              <span className="text">{i}</span>
            </div>
          );
        });
      }


    return (
        <div>
            <ReactGridLayout
            layout={layout}
            onLayoutChange={onLayoutChange}
            useCSSTransforms={true}
            allowOverlap={true}
            {...defaultVals}
            >
            {generateDOM()}
            </ReactGridLayout>
        </div>
    )
}

export default Grid;
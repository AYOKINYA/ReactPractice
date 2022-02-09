
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import React, { useEffect, useState } from 'react';

import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css'

import './grid-style.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Grid = () => {

    const defaultVals = { //temporary
        className: "layout",
        rowHeight: 30,
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        onLayoutChange: function() {},
    };

    const [stateObj, setStateObj] = useState({
        currentBreakpoint: "lg",
        compactType: null,
        mounted: false,
        layouts: { lg: [] },
    })

    const generateLayout = () => { //temporary
        return _.map(_.range(0, 2), function(item, i) {
            var y = Math.ceil(Math.random() * 4) + 1;
            return {
              x: Math.round(Math.random() * 5) * 2,
              y: Math.floor(i / 6) * y,
              w: 2,
              h: y,
              i: i.toString(),
              static: Math.random() < 0.05
            };
          });
    }

    useEffect(() => {
        setStateObj((prevState) => ({
            ...prevState,
            mounted: true,
            layouts: {lg: generateLayout()}
        }))
    }, []);

    const generateDOM = () => {
        return _.map(stateObj.layouts[stateObj.currentBreakpoint], l => {
            return (
              <div key={l.i} className={l.static ? "static" : ""}>
                  <div className="hide-button" onClick={ () => removeItem(l)}>
                    x
                    </div>
                {l.static ? (
                  <span
                    className="text"
                    title="This item is static and cannot be removed or resized."
                  >
                    Static - {l.i}
                  </span>
                ) : (
                  <span className="text">{l.i}</span>
                )}
              </div>
            );
          });
      }

      const removeItem = (item) => {
        console.log(item)
        setStateObj(prevState => ({
            ...prevState,
            layouts: {
                ...prevState.layouts,
                [prevState.currentBreakpoint]: prevState.layouts[
                  prevState.currentBreakpoint
                ].filter(({ i }) => i !== item.i)
              }
        }))
    }

      const onBreakpointChange = breakpoint => {
        setStateObj(prevState => ({
        ...prevState,
          currentBreakpoint: breakpoint,
          layouts: {
              ...prevState.layouts,
              [breakpoint]:
                prevState.layouts[breakpoint] ||
                prevState.layouts[prevState.currentBreakpoint] ||
                [] 
          }
        }));
      };
    
      const onCompactTypeChange = () => {
        const { compactType: oldCompactType } = stateObj;
        const compactType =
          oldCompactType === "horizontal"
            ? "vertical"
            : oldCompactType === "vertical"
            ? null
            : "horizontal";
        setStateObj((prevState) => ({
                ...prevState, 
                compactType: compactType
            }));
      };
    
      const onLayoutChange = (layout, layouts) => {
        defaultVals.onLayoutChange(layout, layouts);
      };

     const onNewLayout = () => {
        setStateObj((prevState) => ({
          ...prevState,
          layouts: { lg: generateLayout() }
        }));
      };


    return (
        <div>
            <div>
            Current Breakpoint: {stateObj.currentBreakpoint} (
            {defaultVals.cols[stateObj.currentBreakpoint]} columns)
            </div>
            <div>
            Compaction type:{" "}
            {_.capitalize(stateObj.compactType) || "No Compaction"}
            </div>
            <button onClick={onNewLayout}>Generate New Layout</button>
            <button onClick={onCompactTypeChange}>
            Change Compaction Type
            </button>

            <ResponsiveReactGridLayout
            {...defaultVals}
            layouts={stateObj.layouts}
            // isBounded={true}
            onBreakpointChange={onBreakpointChange}
            onLayoutChange={onLayoutChange}
            measureBeforeMount={false}
            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
            // and set `measureBeforeMount={true}`.
            useCSSTransforms={stateObj.mounted}
            compactType={stateObj.compactType}
            preventCollision={!stateObj.compactType}
            >
                {generateDOM()}
            </ResponsiveReactGridLayout>
        </div>
    )
}

export default Grid;
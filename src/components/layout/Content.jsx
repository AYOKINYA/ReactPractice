import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

import LineDemo from "../video/LineDemo"
import AreaDemo from "../video/AreaDemo"

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const originalItems = [0, 1];

const initialLayouts = {
  lg: [
    { w: 2, h: 5, x: 8, y: 0, i: 0, maxW: 12, maxH: 12, static: false },
    { w: 2, h: 5, x: 5, y: 3, i: 1, maxW: 12, maxH: 12, static: false },
  ]
};

// const componentList = {
//   0: LineDemo,
//   1: AreaDemo,
// };

const Content = () => {

    const [items, setItems] = useState(originalItems);

    const [layouts, setLayouts] = useState(
    // getFromLS("layouts") || 
      initialLayouts
    );

    const onLayoutChange = (_, allLayouts) => {
      setLayouts(allLayouts);
    };

    const onLayoutSave = () => {
      saveToLS("layouts", layouts);
    };

    const onRemoveItem = (itemId) => {
      setItems(items.filter((i) => i !== itemId));
    };

    const onAddItem = (itemId) => {
      setItems([...items, itemId]);
    };

    return (
    <>
       <ResponsiveReactGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        measureBeforeMount={false}
        useCSSTransforms={false}
        compactType={null}
        onLayoutChange={onLayoutChange}
       >
        {items.map((key) => (
            <div key={key}>
            {key === 0 ? <LineDemo/> : <AreaDemo/>}
          </div>
        ))}

       </ResponsiveReactGridLayout>
    </>
    )
}


function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
        } catch (e) {}
    }
    return ls[key];
}
  
function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

export default Content;

import { IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close"

const widgetNames = {
    0: 'Line Chart',
    1: 'Area Chart',
};

const Widget = ({ id, onRemoveItem, component: Item }) => {
    
    return (
        <div>
            <div>
                <Typography variant="h6" gutterBottom>
                    {widgetNames[id]}
                </Typography>
                <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
                <Item />
      </div>
    )
}

export default Widget;
import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import LineDemo from "./LineDemo"
import AreaDemo from "./AreaDemo"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const componentList = {
    0: <LineDemo />,
    1: <AreaDemo/>
}

const widgetHeaderIcons = {
    0: <CameraAltOutlinedIcon/>, 
    1: <LocationOnOutlinedIcon/>
}

const widgetHeaderTexts = {
    0: 'Camera',
    1: 'Location'
}

const Widget = ({i}) => {

    // copy i from parents (i는 grid 배치 때문에 수정해서는 안 된다.)
    // menu에서 아이템을 선택하면 key 값을 바꿔 헤더와 아이템 내용을 바꿔준다.
    const [key, setKey] = useState(i);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseBar = (i) => {
        setAnchorEl(null);
    };
    const handleCloseItem = (i) => {
        setAnchorEl(null);
        if (key !== i) {
            console.log("Change Item : ", i);
            setKey(i);
        }
    };

    return (
        <div style={{width:"100%", height:"100%"}}>
            <div className="item-header-name">
                {widgetHeaderIcons[key]} {widgetHeaderTexts[key]}
                <IconButton
                edge="start"
                color="inherit"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                    <MoreHorizIcon/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseBar}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {Object.values(widgetHeaderTexts).map((item, i) =>
                        <MenuItem key={ i + 1000 }  onClick={() => handleCloseItem(i)} >{item}</MenuItem>
                    )}
                </Menu>
            </div>
            {componentList[key]}
        </div>
    )
}

export default Widget
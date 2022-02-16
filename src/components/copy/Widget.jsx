import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import AreaDemo from "./AreaDemo"
import Camera from "./Camera"
import ControlPanel from "./ControlPanel"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const componentList = {
    0: <Camera/>,
    1: <AreaDemo/>,
    2: <ControlPanel/>
}

const widgetHeaderIcons = {
    0: <CameraAltOutlinedIcon/>, 
    1: <LocationOnOutlinedIcon/>,
    2: 'ControlPanel'
}

const widgetHeaderTexts = {
    0: 'Camera',
    1: 'Location',
    2: 'ControlPanel',
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

    const hasHeader = (header) => {
        if (header !== 'ControlPanel') // 나중에 다른 컴포넌트 list로 받아 비교
            return true;

        return false;
    }

    return (
        <div style={{width:"100%", height:"100%", display: "flex", flexDirection: 'column'}}>
            { 
                hasHeader(widgetHeaderTexts[i]) 
                    &&
                <div className="item-header-name" style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: '30px'}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        {widgetHeaderIcons[key]}
                        <span style={{width: "4px"}}> </span>
                        <span>{widgetHeaderTexts[key]}</span>
                    </div>
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
            }
            <div style={{width:"100%", height:"100%", position:'relative'}}>
                {componentList[key]}
            </div>
        </div>
    )
}

export default Widget
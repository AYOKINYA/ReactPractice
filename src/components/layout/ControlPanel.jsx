import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { Joystick } from 'react-joystick-component';

const ColorButton = styled(Button)(({ theme }) => ({

    backgroundImage: "linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)",
    flex: "1 1 auto",
    margin: "10px",
    padding: "10px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 4px 15px 0 rgba(65, 132, 234, 0.75)",
    borderRadius: "10px",
    '&:hover': {
        backgroundPosition: "right center",
    },
  }));

const ControlPanel = (props) => {

    const stopDraggable = (e) => {
        e.stopPropagation();
        console.log("Stop Drag");
        props.setIsDraggable(false);
    }

    const makeDragabble = () => {
        console.log("Go Drag");
        props.setIsDraggable(true);
    }

    return (
        <div>
            <Stack direction="row">
                    <ColorButton variant="contained">START</ColorButton>
                    <ColorButton variant="contained">STOP</ColorButton>
            </Stack>
            <Stack direction="row">
                    <ColorButton variant="contained">SIT DOWN</ColorButton>
                    <ColorButton variant="contained">STAND UP</ColorButton>
            </Stack>

                <Grid container direction="row" justifyContent="space-evenly" alignItems="stretch">
                        <Grid item xs={6}>
                            <div onMouseDown={(e) => {stopDraggable(e)}} onMouseUp={makeDragabble} style={{display:'flex', justifyContent: 'center'}}>
                                <Joystick size={120}
                                    sticky={false}
                                    baseColor="#B2E7E8"
                                    stickColor="#304D63"/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div onMouseDown={(e) => {stopDraggable(e)}} onMouseUp={makeDragabble} style={{display:'flex', justifyContent: 'center'}}>
                                <Joystick size={120}
                                    sticky={false}
                                    baseColor="#B2E7E8"
                                    stickColor="#304D63"/>
                            </div>
                        </Grid>
                </Grid>
        </div>
    )
}

export default ControlPanel;
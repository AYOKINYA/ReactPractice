import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Container, Grid, Paper } from '@mui/material';
import ControlPad from './ControlPad'
import { Joystick } from 'react-joystick-component';
import { useState } from 'react';

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

const ControlPanel = () => {

    const [tmp, SetTmp] = useState(true);

    const onMove = (e) => {
        console.log("clicked")
        console.log(e)
        SetTmp(!tmp);
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
            <Container>
                <Grid container spacing={2}>
                    <div onClick={(e) => {onMove(e)}}>
                        <Grid item xs={6} sx={{backgroundColor: 'green'}}>
                            <Joystick size={100}
                                sticky={false}
                                baseColor="red"
                                stickColor="blue"/>
                        </Grid>
                    </div>

                    
                    {/* <Grid item xs={6}>
                        <ControlPad 
                        options={{threshold: 0.1,
                                position: {  top: '70%', left: '75%' },
                                mode: 'static',
                                size: 150,
                                color: 'green'}}
                        onMove={(evt, data) => console.log(evt, data)}
                        />
                    </Grid> */}
                </Grid>
            </Container>

        </div>
    )
}

export default ControlPanel;
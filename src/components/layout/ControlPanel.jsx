import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Container, Grid, Paper } from '@mui/material';

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
                    <Grid item xs={6}>
                        <Paper>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>xs=6</Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default ControlPanel;
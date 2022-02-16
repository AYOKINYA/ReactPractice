
  
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import MuiContainer from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import api from "../../services/api"
import { useDispatch } from 'react-redux';
import { setUsername, setIsLoggedIn} from '../../store/features/user'
import { Link, useHistory } from 'react-router-dom';


const MyThemeComponent = styled(MuiContainer)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    component: "main",
    maxWidth: "xs"
  }));

const Login = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const loginUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const loginInfo = {
            username: data.get('username'),
            password: data.get('password')
        };

        console.log(loginInfo);

        api.post(process.env.REACT_APP_SERVER_ADDRESS_IP + "/auth/login", loginInfo)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authenticationToken', res.data.authenticationToken);
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                localStorage.setItem('expiresAt', res.data.expiresAt);

                dispatch(setIsLoggedIn());
                dispatch(setUsername());

                history.push("/");
            })
            .catch((err) => console.error(err))

      };

    return (
           <MyThemeComponent>
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </MyThemeComponent>
    )
}

export default Login;
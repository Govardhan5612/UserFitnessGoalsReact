import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from "../UserService/User"
function Login(){
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let changeEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    let changePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    let navigate = useNavigate();
    const change = () => {
        UserService.login(email,password)
        .then((response) => {
            console.log(response.data.data);
            if (response.data.data === "present") {
                const value = localStorage.getItem(email);
                navigate(`home/${value}`);
            }
            else {
                navigate(``);
                alert("Enter valid details")
            }
        })
        .catch((error) => {
            alert("Error in add details",error);
        });
        
    }

    return(
        <div style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingTop: "50px" }}>
        <Grid container spacing={2} xs={8} sm={3} sx={{ backgroundColor: "aliceblue" }} style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "goldenrod",
            borderRadius: "25px",
            paddingTop: "50px",
            paddingBottom: "25px",
            paddingLeft: "30px",
            paddingRight: "30px"
        }}>
            <Grid xs={12}>
                <span style={{ display: "flex", justifyContent: "center", alignitems: "center", fontStyle: "italic", fontWeight: "bold", fontSize: "24px", color: "darkgreen" }}>Fitness Goals Login Page</span>
            </Grid>
            <Grid xs={12}>
                <TextField
                    label="Email"
                    value={email} onChange={changeEmail}
                    name='firstName'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                />
            </Grid>
            <Grid xs={12}>
                <TextField
                type='password'
                    label="Pasword"
                    value={password} onChange={changePassword}
                    name='password'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                />
            </Grid>
            <Grid xs={12}>
                <span ></span>
            </Grid>
            <Grid xs={6}>
                    <Button onClick={change}   style={{ display: "flex", justifyContent: "center", alignitems: "center" }}>Login</Button>  
            </Grid>
            <Grid xs={6}>

                <a href="/" style={{ textDecoration: "none" }}>
                    <Button  style={{ display: "flex", justifyContent: "center", alignitems: "center", textDecoration: "none" }} >Welcome Page</Button>

                </a>

            </Grid>
        </Grid>
    </div>
    );
}
export default Login;
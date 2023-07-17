import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import UserService from "../UserService/User.js"
function Registration(){
    let initialValue = {
        name: "",
        height: "",
        weight: "",
        age: "",
        email: "",
        password: ""
        
    };



    const [formValue, setForm] = useState(initialValue);
    const ChangeValue = (event) => {
        console.log(event.target.value);
        setForm({ ...formValue, [event.target.name]: event.target.value });
    };

    const save = async (event) => {
        event.preventDefault();
        let object = {
            name: formValue.name,
            height: formValue.height,
            weight: formValue.weight,
            age: formValue.age,
            email: formValue.email,
            password: formValue.password
           
        }
        console.log(object);
        UserService.addUser(object)
        .then((response) => {
            console.log(response.data.data);
            if (response.data.data === "email") {
                alert("This "+object.email+" already present in data base");
            }
            else {
                alert(object.name + " details are added")
                localStorage.setItem(object.email, response.data.data);
            }
        })
        .catch((error) => {
            alert("Error in add details",error);
        });
    }

    return(
        <div style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingTop: "50px" ,paddingBottom:"100px"}}>
            
            <form onSubmit={save} style={{ display: "flex", justifyContent: "center", alignitems: "center"}}>
            
        <Grid container  spacing={2} xs={10} sm={5} sx={{ backgroundColor: "aliceblue" }} style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "goldenrod",
            borderRadius: "25px",
            paddingTop: "50px",
            paddingBottom: "25px",
            paddingLeft: "30px",
            paddingRight: "30px"
        }} >
            <Grid xs={12}>
                <span style={{ display: "flex", justifyContent: "center", alignitems: "center", fontStyle: "italic", fontWeight: "bold", fontSize: "24px", color: "darkgreen" }}>Fitness Goals Registration Page</span>
            </Grid>
            <Grid xs={12}>
                <TextField
                    label="Name"
                   value={formValue.name} onChange={ChangeValue}
                    name='name'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={4}>
                <TextField
                type='number'
                    label="Height in cm"
                   value={formValue.height} onChange={ChangeValue}
                    name='height'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={4}>
                <TextField
                type='number'
                    label="Weight in kg"
                   value={formValue.weight} onChange={ChangeValue}
                    name='weight'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={4}>
                <TextField
                type='number'
                    label="Age"
                   value={formValue.age} onChange={ChangeValue}
                    name='age'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={12}>
                <TextField
                    label="Email"
                   value={formValue.email} onChange={ChangeValue}
                    name='email'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={12}>
                <TextField
                
                    label="Pasword"
                    value={formValue.password} onChange={ChangeValue}
                    name='password'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                    required
                />
            </Grid>
            <Grid xs={12}>
                <span ></span>
            </Grid>
            <Grid xs={6}>
                    <Button  type='submit'  style={{ display: "flex", justifyContent: "center", alignitems: "center",paddingLeft:"50px" }}>Save</Button>  
            </Grid>
            <Grid xs={6}>

                <a href="/" style={{ textDecoration: "none" }}>
                    <Button  style={{ display: "flex", justifyContent: "center", alignitems: "center", textDecoration: "none",paddingLeft:"100px" }} >Welcome Page</Button>

                </a>

            </Grid>
        </Grid>
        </form>
    </div>
    );
}
export default Registration;
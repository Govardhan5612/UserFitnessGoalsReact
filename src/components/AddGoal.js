import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import GoalServic from "../UserService/Goal"

function AddGoal() {
    let initialValue = {
        description: "",
        startDate: document.getElementById("startDate"),
      
        id: "",
        isUpdate: false
    };



    const [formValue, setForm] = useState(initialValue);
    const ChangeValue = (event) => {
        console.log(event.target.value);
        setForm({ ...formValue, [event.target.name]: event.target.value });
    };
    const params = useParams();
    useEffect(() => {
        if (params.email) {
           // getDataByEmail(params.email);
           console.log(params.email)
           setEmail(params.email)
        }
    }, [params.email]);
    let[emailValue,setEmail]=useState();
    const save = async (event) => {
        event.preventDefault();
       // console.log(formValue);
        let object = {
            
            description: formValue.description,
            startDate: formValue.startDate,
              
        }
        console.log(object);
        
            GoalServic.add(object,emailValue)
                .then((response) => {
                    console.log(response.data.data);
                    alert( object.description+" Goal added")
                })
                .catch(() => {
                    alert("Error in add details");
                });
        
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingTop: "50px", paddingBottom: "100px" }}>

            <form style={{ display: "flex", justifyContent: "center", alignitems: "center" }} onSubmit={save}>

                <Grid container spacing={2} xs={10} sm={5} sx={{ backgroundColor: "aliceblue" }} style={{
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
                        <span style={{ display: "flex", justifyContent: "center", alignitems: "center", fontStyle: "italic", fontWeight: "bold", fontSize: "24px", color: "darkgreen" }}>Stark Fitness Goals Form Page</span>
                    </Grid>
                    <Grid xs={12}>
                        <label>Discription :</label>
                        <FormControl fullWidth margin='normal' color="warning">
                            <InputLabel >Goal</InputLabel>
                            <Select
                                 value={formValue.description}
                                onChange={ChangeValue}
                                label="Goal"
                                name='description'
                            >
                                <MenuItem value="Walking">Walking</MenuItem>
                                <MenuItem value="Running">Running</MenuItem>
                                <MenuItem value="WeightLifting">Weight Lifting</MenuItem>
                                <MenuItem value="LoseFat">Lose Fat</MenuItem>
                                <MenuItem value="BuidMuscle">Build Muscle</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={12}>
                        <label>Start Date :</label>
                        <TextField

                            type='date'
                            id='startDate'
                             
                            onChange={ChangeValue}
                            name='startDate'
                            fullWidth
                            margin="normal"
                            color="warning"
                            style={{ borderRadius: "5px" }}
                            required
                        />
                    </Grid>
                    <Grid xs={12}>
                    
                    </Grid>
                    <Grid xs={12}>

                    </Grid>
                    <Grid xs={6}>
                        <Button type='submit' style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingLeft: "50px" }}>Save</Button>
                    </Grid>
                    <Grid xs={6}>

                        <a href="/" style={{ textDecoration: "none" }}>
                            <Button type='reset' style={{ display: "flex", justifyContent: "center", alignitems: "center", textDecoration: "none", paddingLeft: "100px" }} >Reset</Button>

                        </a>

                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
export default AddGoal;
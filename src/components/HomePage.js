import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../UserService/User"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home(){
    let navigate = useNavigate();
    const add = () => {
        navigate(`addGoal/${email}`);
    }
    let [name,setName]=useState();
    let[email,setEmail]=useState();
    const params = useParams();
    useEffect(() => {
        if (params.token) {
            getDataById(params.token);
        }
    }, [params.token]);

    const getDataById = (token) => {
        console.log(token)
        service.getById(token)
            .then((response) => {
                console.log(response.data.data);
                setName(response.data.data.name);
                setEmail(response.data.data.email);
                
            }).catch(() => {
                console.log("Invalid details");
            });
    };
    
    return(
        <div >
            <div style={{ display: "flex", justifyContent: "center", alignitems: "center",backgroundColor:"aqua",paddingTop:"10px",paddingBottom:"10px",fontWeight: "bold", fontSize: "35px"}} >
            Stark Fitness Goals
            </div>
            <div style={{ display: "flex"}}>
                <div style={{ backgroundColor:"lightgrey",paddingTop:"25px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"460px"}}>
                <FitnessCenterIcon
                sx={{fontSize:50}}
                />
                    <h3>{name}</h3>
                    <h5>{email}</h5>
                    
                    <Button onClick={add} startIcon={<HealthAndSafetyIcon/>} >Add Goal</Button>
                    
                    
                </div>
                <div style={{ backgroundColor:"lightpink",paddingTop:"25px",paddingBottom:"25px",paddingLeft:"20px",paddingRight:"25px"}}>
                    <h3>List of {name} Goals</h3>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Home;
import Photo from "../Images/welcome.jpeg";
import Button from '@mui/material/Button';

function Welcome() {
    return (
        <div style={{ backgroundImage: `url(${Photo})`, paddingBottom: "560px" }}>
            <div style={{
                display: "flex", justifyContent: "center",
                alignitems: "center", fontWeight: "bold", fontSize: "55px"
            }}>
                Welcome to Stark Fitness Goals
            </div>
            <div style={{display: "flex", justifyContent: "center",
                alignitems: "center",paddingTop:"50px"}}>
                <Button variant="contained" href="/login">
                    Login
                </Button>
                <span style={{padding:"10px"}}></span>
                <Button variant="contained" href="/registration">
                    SignUp
                </Button>
            </div>
        </div>
    );
}
export default Welcome;
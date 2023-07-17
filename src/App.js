import Welcome from "./components/WelcomePage";
import Login from "./components/LoginPage";
import Registration from "./components/RegistrationPage"
import HomePage from "./components/HomePage";
import AddGoal from "./components/AddGoal";
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/> 
        <Route path="/login/home/:token" element={<HomePage/>}/>
        <Route path="/login/home/:token/addGoal/:email" element={<AddGoal/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

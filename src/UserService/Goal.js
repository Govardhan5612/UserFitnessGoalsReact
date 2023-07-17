import axios from "axios";
class GoalService {
    baseUrl = "http://localhost:8888/fitnessGoal";

    add(data,email) {
        return axios.post(`${this.baseUrl}/add/${email}`, data);
    }
  

}
export default new GoalService();
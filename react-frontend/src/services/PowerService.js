import axios from 'axios';

const PLAYER_API_BASE_URL = "http://localhost:8080/api/v1/powers";

class PowerService {

    getPowers() {
        return axios.get(PLAYER_API_BASE_URL);
    }

    createPower(power) {
        return axios.post(PLAYER_API_BASE_URL, power);
    }

    getPowerById(powerId) {
        return axios.get(PLAYER_API_BASE_URL + '/' + powerId);
    }

    updatePower(power, powerId) {
        return axios.put(PLAYER_API_BASE_URL + '/' + powerId, power);
    }

    deletePower(powerId) {
        return axios.delete(PLAYER_API_BASE_URL + '/' + powerId);
    }
}
let power = new PowerService();
export default power;
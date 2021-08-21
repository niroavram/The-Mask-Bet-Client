import axios from "axios";

export default axios.create({
    baseURL: 'https://the-mask-bet-server.herokuapp.com/'
})
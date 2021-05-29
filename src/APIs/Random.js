import axios from "axios";

export default axios.create({
    baseURL: "https://random-words-api.vercel.app/word"
});
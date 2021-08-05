import axios from "axios";

const instance = axios.create({
    // baseURL : "http://localhost:5001/ecommerce-9ab7a/us-central1/api", firebase
    // baseURL : "http://localhost:9000/.netlify/functions/stripe",
    baseURL : "https://llamazon.netlify.app/.netlify/functions/stripe",
    
});



export default instance;
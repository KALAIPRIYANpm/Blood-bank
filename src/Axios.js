import axios from "axios";
const url="http://localhost:1234"

export const AdminRecords = async () => {
    const res = await axios.get(`${url}/view`);
    console.log(res.data); // Check the response structure here
    return res.data; // Return the data directly
};



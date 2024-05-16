import axios from "axios";
const url="http://localhost:1234"


export const AdminRecords=async(empId)=>{
    const res=await axios.get(`${url}/view`)
    console.log(res.data.rows)
    return res
}
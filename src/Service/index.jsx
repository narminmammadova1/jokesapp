import axios from "axios"
import { BaseUrl } from "../Constant/BaseUrl"

export const getJokes=async ()=>{
try{

    const url=BaseUrl+"/search?limit=10"
const resp=await axios ({headers:{Accept:"application/json"},
    method:"GET",url})
return resp
}
catch(err){
    console.log("error" ,err);
}
}
import axios from "axios";

 const Api_URL="http://localhost:3999";
 export const getalldata=()=> axios.get(`${Api_URL}/LogInData`);

 export const postalldata= async(data)=>
 {
    try{
        const{data: existingData}=await axios.get(`${Api_URL}/LogInData`);
        const newId=(Math.max(...existingData.map(user => user.id)) + 1);
        const newData={
            ...data,
            id: newId
        };
        await axios.post(`${Api_URL}/LogInData`, newData);
        alert("signin success");
    }
    catch(err)
    {
        console.log(err);
    }
 }
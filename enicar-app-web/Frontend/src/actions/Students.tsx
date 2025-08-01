export const getAllStudents=async()=>{
    try{
        const response=await fetch('/api/students');
        const data =await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}
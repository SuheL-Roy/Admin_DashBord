 import axios from 'axios'
 import { addmovieFailure, addmovieStart, addmovieSuccess, deletemovieFailure, deletemovieStart, deletemovieSuccess, getmovieFailure, getmovieStart, getmovieSuccess } from "./MovieAction"

export const getMovies = async (dispatch) => {
  dispatch(getmovieStart())

   try{
       const res = await axios.get("/movies", {
           headers: {
               token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
           },
       });
       //console.log(res.data);
       dispatch(getmovieSuccess(res.data)) 
       

   }catch(err){
      dispatch(getmovieFailure());
   }
}

export const addMovies = async (movie,dispatch) => {
    dispatch(addmovieStart())
  
     try{
         const res = await axios.post("/movies",movie, {
             headers: {
                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
             },
         });
         //console.log(res.data);
         dispatch(addmovieSuccess(res.data)) 
         
  
     }catch(err){
        dispatch(addmovieFailure());
     }
  }


export const deleteMovies = async (id,dispatch) => {
    dispatch(deletemovieStart())
  
     try{
          await axios.delete("/movies/" + id, {
             headers: {
                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
             },
         });
         //console.log(res.data);
         dispatch(deletemovieSuccess(id)) 
         
  
     }catch(err){
        dispatch(deletemovieFailure());
     }
  }
  
  
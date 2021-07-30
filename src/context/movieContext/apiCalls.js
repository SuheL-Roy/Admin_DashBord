 import axios from 'axios'
 import { deletemovieFailure, deletemovieStart, deletemovieSuccess, getmovieFailure, getmovieStart, getmovieSuccess } from "./MovieAction"

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


export const deleteMovies = async (id,dispatch) => {
    dispatch(deletemovieStart())
  
     try{
          await axios.delete("/movies/"+id, {
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
  
  
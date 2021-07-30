
export const getmovieStart = () => ({
    type: "GET_MOVIE_START",
});

export const getmovieSuccess = (movies) => ({
    type: "GET_MOVIE_SUCCESS",
    payload: movies,
});
export const getmovieFailure = () => ({
    type: "GET_MOVIE_FAILURE",
});



export const deletemovieStart = () => ({
    type: "DELETE_MOVIE_START",
});

export const deletemovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
});
export const deletemovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
});
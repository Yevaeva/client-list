import request from "../helperFunc/request"
import * as actionTypes from './actionTypes'

const apiUrl = process.env.REACT_APP_API_URL
export const getClients = (data={}) =>{
    console.log('res')

    let url = `http://localhost:3001/client`;
    let query = '?';
    for(let key in data){
        query = `?${key}=${data[key]}&`
    }
    if(query === '?') query = ''
    return (dispatch)=>{
        dispatch({type:actionTypes.LOADING})
        request(url+query)
        .then(res=>{
            dispatch({type:actionTypes.GET_CLIENTS_SUCCESS, clientList:res})
            console.log(res,'res')
        })
        .catch((error) => {
            dispatch({type:actionTypes.ERROR, errorMessage:error.message})
          })
    }
   
}


// export const addTask = (data) =>{
//     return (dispatch)=>{
//         dispatch({type:actionTypes.LOADING})
//         request(`${apiUrl}/task`,"POST",data)
//         .then(res=>{
//             dispatch({type:actionTypes.ADD_TASK_SUCCESS, task:res})
//         })
//         .catch((error) => {
//             dispatch({type:actionTypes.ERROR, errorMessage:error.message})
//           })
//     }
   
// }
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


export const getProviders = () =>{
    
    let url = `http://localhost:3001/provider`;
    
    return (dispatch)=>{
        dispatch({type:actionTypes.LOADING})
        request(url)
        .then(res=>{
            dispatch({type:actionTypes.GET_PROVIDERS_SUCCESS, providerList:res})
            console.log(res,'providerList')
        })
        .catch((error) => {
            dispatch({type:actionTypes.ERROR, errorMessage:error.message})
          })
    }
   
}


export const addProvider = (data) =>{
    return (dispatch)=>{
        dispatch({type:actionTypes.LOADING})
        request(`http://localhost:3001/provider`,"POST",data)
        .then(res=>{
            dispatch({type:actionTypes.ADD_PROVIDER_SUCCESS, provider:res})
        })
        .catch((error) => {
            dispatch({type:actionTypes.ERROR, errorMessage:error.message})
          })
    }
   
}
export const addClient = (data) =>{
    return (dispatch)=>{
        dispatch({type:actionTypes.LOADING})
        request(`http://localhost:3001/client`,"POST",data)
        .then(res=>{
            dispatch({type:actionTypes.ADD_CLIENT_SUCCESS, client:res})
        })
        .catch((error) => {
            dispatch({type:actionTypes.ERROR, errorMessage:error.message})
          })
    }
   
}
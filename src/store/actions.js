import request from "../helperFunc/request"
import * as actionTypes from './actionTypes'


let apiUrl 
if (process.env.NODE_ENV === 'development') {
    apiUrl = process.env.REACT_APP_API_URL
} else {
    apiUrl = 'https://client-list-api.herokuapp.com'
}


export const getClients = (data = {}) => {
    let url = `${apiUrl}/client`;
    let query = '?';
    for (let key in data) {
        query = `?${key}=${data[key]}&`
    }
    if (query === '?') query = ''
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(url + query)
            .then(res => {
                dispatch({ type: actionTypes.GET_CLIENTS_SUCCESS, clientList: res })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}


export const getProviders = () => {

    let url = `${apiUrl}/provider`;

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(url)
            .then(res => {
                dispatch({ type: actionTypes.GET_PROVIDERS_SUCCESS, providerList: res })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}


export const addProvider = (data) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/provider`, "POST", data)
            .then(res => {
                dispatch({ type: actionTypes.ADD_PROVIDER_SUCCESS, provider: res })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}
export const addClient = (data) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/client`, "POST", data)
            .then(res => {
                dispatch({ type: actionTypes.ADD_CLIENT_SUCCESS, client: res })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}
export const editClient = (data) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/client/${data._id}`, "PUT", data)
            .then((editedClient) => {
                dispatch({ type: actionTypes.EDIT_CLIENT_SUCCESS, client: editedClient })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}

export const editProvider = (data) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/provider/${data._id}`, "PUT", data)
            .then((editedProvider) => {
                dispatch({ type: actionTypes.EDIT_PROVIDER_SUCCESS, provider: editedProvider })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}

export const removeProvider = (provider) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/provider/${provider._id}`, "DELETE")
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_PROVIDER_SUCCESS, provider })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}

export const removeClient = (id) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING })
        request(`${apiUrl}/client/${id}`, "DELETE")
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_CLIENT_SUCCESS, id })
            })
            .catch((error) => {
                dispatch({ type: actionTypes.ERROR, errorMessage: error.message })
            })
    }

}
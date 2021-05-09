import * as actionTypes from './actionTypes'



const defaultState = {
    clientList: [],
    providerList: [],
    client: null,
    errorMessage: '',
    successMessage: '',
    loading: false,
    addClientSuccess: false,
    editClientSuccess: false,
    editProviderSuccess: false,
    addProviderSuccess: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
                addClientSuccess: false,
                editClientSuccess: false,
                errorMessage: '',
                successMessage: ''
            }
        case "ERROR":
            return {
                ...state,
                errorMessage: '❌❌❌ ' + action.errorMessage,
                loading: false,
            }
        case actionTypes.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                clientList: action.clientList,
                loading: false,
            }
        case actionTypes.GET_PROVIDERS_SUCCESS:
            return {
                ...state,
                providerList: action.providerList,
                loading: false,
            }

        case actionTypes.ADD_PROVIDER_SUCCESS: {
            let providers = [...state.providerList, action.provider]
            return {
                ...state,
                providerList: providers,
                loading: false,
                successMessage: '✅✅✅ Provider added successfully!!!',
                addProviderSuccess: true
            }
        }
        case actionTypes.ADD_CLIENT_SUCCESS: {
            let clients = [...state.clientList, action.client]
            return {
                ...state,
                clientList: clients,
                loading: false,
                successMessage: '✅✅✅ Client added successfully!!!',
                addClientSuccess: true
            }
        }
        case actionTypes.REMOVE_PROVIDER_SUCCESS: {
            const newProviders = state.providerList.filter((item) => item._id !== action.provider._id)
            const client = state.clientList.map(client => client.providers)
            for (let i = 0; i < client.length; i++) {
                const boolArr = client[i].map(prov => prov._id === action.provider._id)
                const index = boolArr.indexOf(true)
                if (index !== -1) {
                    state.clientList[i].providers.splice(index, 1)
                }
            }
            return {
                ...state,
                providerList: newProviders,
                clientList: [...state.clientList],
                loading: false,
                successMessage: '🗑🗑🗑 Provider deleted successfully!!!',
            }
        }
        case actionTypes.REMOVE_CLIENT_SUCCESS: {
            const newClients = state.clientList.filter((client) => client._id !== action.id)
            return {
                ...state,
                clientList: newClients,
                loading: false,
                successMessage: '🗑🗑🗑 Client deleted successfully!!!',
            }
        }

        case actionTypes.EDIT_CLIENT_SUCCESS: {
            let clients = [...state.clientList];
            let newClientIndex = clients.findIndex((client) => client._id === action.client._id);
            clients[newClientIndex] = action.client;
            return {
                ...state,
                clientList: clients,
                loading: false,
                successMessage: '🖍🖍🖍 Client edited successfully!!!',
                editClientSuccess: true,
            }
        }
        case actionTypes.EDIT_PROVIDER_SUCCESS: {
            const providers = [...state.providerList];
            const newProviderIndex = providers.findIndex((p) => p._id === action.provider._id);
            providers[newProviderIndex] = action.provider;
            const client = state.clientList.map(client => client.providers)
            for (let i = 0; i < client.length; i++) {
                const boolArr = client[i].map(prov => prov._id === action.provider._id)
                const index = boolArr.indexOf(true)
                if (index !== -1) {
                    state.clientList[i].providers[index] = action.provider
                }
            }

            return {
                ...state,
                providerList: providers,
                loading: false,
                successMessage: '🖍🖍🖍 Provider edited successfully!!!',
                editProviderSuccess: true,
            }
        }
        default:
            return state
    }
}


export { reducer }
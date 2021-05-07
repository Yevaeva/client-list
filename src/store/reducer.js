import * as actionTypes from './actionTypes'



const defaultState = {
    clientList: [],
    providerList:[],
    client: null,
    errorMessage: '',
    successMessage: '',
    loading: false,
    addClientSuccess: false,
    editClientSuccess: false,
    editProviderSuccess:false,
    addProviderSuccess:false
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
                errorMessage:'❌❌❌ '+ action.errorMessage ,
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
    //         case actionTypes.GET_SINGLE_TASK_SUCCESS:
    //         return {
    //             ...state,
    //             task: action.task,
    //             loading: false,
    //         }
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
            const newProviders = state.providerList.filter((item) => item._id !== action.id)
            return {
                ...state,
                providerList: newProviders,
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
    //     case actionTypes.REMOVE_SELECTED_TASKS_SUCCESS: {
    //         let tasksCopy = [...state.tasks];
    //         action.taskIds.forEach((_id) => {
    //             tasksCopy = tasksCopy.filter((task) => {
    //                 return task._id !== _id
    //             })
    //         })
    //         return {
    //             ...state,
    //             tasks: tasksCopy,
    //             loading: false,
    //             successMessage: '🗑🗑🗑 Tasks deleted successfully!!!',
    //             removeSelectedTasksSuccess: true,

    //         }
    //     }
        case actionTypes.EDIT_CLIENT_SUCCESS: {
            let clients = [...state.clientList];
                let newClientIndex = clients.findIndex((client) => client._id === action.client._id);
                clients[newClientIndex] = action.client;
                return {
                    ...state,
                    clientList:clients,
                    loading: false,
                    successMessage: '🖍🖍🖍 Client edited successfully!!!',
                    editClientSuccess: true,
                }
            
            
        }
        case actionTypes.EDIT_PROVIDER_SUCCESS: {
            let providers = [...state.providerList];
                let newProviderIndex = providers.findIndex((p) => p._id === action.provider._id);
                providers[newProviderIndex] = action.provider;

                
                // let clients = [...state.clientList];
                // let newClientIndex = clients.findIndex((client) => client.providers.map((p)=>p._id === action.provider._id));
                // console.log('newClientIndex',newClientIndex)
                // clients[newClientIndex] = action.client;
                return {
                    ...state,
                    providerList:providers,
                    loading: false,
                    successMessage: '🖍🖍🖍 Provider edited successfully!!!',
                    editProviderSuccess: true,
                }
            
            
        }
    //     case actionTypes.CHANGE_TASK_STATUS_SUCCESS: {
    //         let message = ''
    //         if(action.task.status === 'active'){
    //             message = '🔃🔃🔃 The task is active now'
    //         }else {
    //             message = '✅✅✅ Congratulations, task has completed'
    //         }
    //         if(action.from === 'single'){
    //             return {
    //                 ...state,
    //                 task: action.task,
    //                 loading: false,
    //                 successMessage:message,
    //             }
    //         }else {
    //             let tasks = [...state.tasks];
    //             let newTaskIndex = tasks.findIndex((task) => task._id === action.task._id);
    //             tasks[newTaskIndex] = action.task;
    //             return {
    //                 ...state,
    //                 tasks: tasks,
    //                 loading: false,
    //                 successMessage: message,
    //             }
    //         }
            
    //     }
    //     case actionTypes.SEND_CONTACT_SUCCESS: {
    //         return {
    //             ...state,
    //             loading: false,
    //             successMessage: '✅✅✅ Your message was sent successfully!!!',
    //         }
    //     }
        default:
            return state
    }
}


export { reducer }
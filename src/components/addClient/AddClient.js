import React, { createRef } from 'react'
import './AddClient.scss'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addClient, addProvider } from '../../store/actions';
import { toast } from "react-toastify"
import ProviderList from '../providerList/ProviderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
class AddClient extends React.PureComponent {
    constructor(props) {
        super(props)
        this.inputRef = createRef()

        this.state = {
            name: '',
            email: '',
            phone: '',
            newProvider: '',
            selectedProviders: new Set(),
   
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value,
        })
    }
    // handleCheck = (e) => {
    //     const selectedProviders = new Set(this.state.selectedProviders);
    //     if (selectedProviders.has(e.target.name)) {
    //         selectedProviders.delete(e.target.name)
    //     } else {
    //         selectedProviders.add(e.target.name)

    //     }
    //     this.setState({
    //         selectedProviders,

    //     })
    // }
    handleCheck = (e) => {
        const selectedProviders = new Set(this.state.selectedProviders);
        if (selectedProviders.has(e.target.name)) {
            selectedProviders.delete(e.target.name)
        } else {
            selectedProviders.add(e.target.name)

        }
        this.setState({
            selectedProviders,

        })
    }


    addProvider = () => {
        let {newProvider} = this.state
        let {providerList} = this.props
        let reapeted = providerList.find((prov)=>{
           return prov.name===newProvider
        })

        if (newProvider.trim() && reapeted===undefined ) {
            this.props.addProvider({name:this.state.newProvider.trim()})
        }
        else if(reapeted){
            toast.error("Provider must be unique ❗❗❗")
        }

    }

    addClient = () => {
        let providers = [...this.state.selectedProviders]
        let data = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            providers
        }
        console.log(data)
        this.props.addClient(data)

    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            //   this.addTask()

        }

    }



    render() {
        let onClose = this.props.onClose
        return (
            <div>
                <Modal centered show={true} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="inputs">
                            <input ref={this.inputRef}
                                type='text'
                                placeholder='Name'
                                onChange={(event) => this.handleChange(event, 'name')}
                                onKeyDown={this.handleKeyDown}
                            />
                            <input
                                type='text'
                                placeholder='Email'
                                onChange={(event) => this.handleChange(event, 'email')}
                                onKeyDown={this.handleKeyDown}
                            />
                            <input
                                type='text'
                                placeholder='Phone'
                                onChange={(event) => this.handleChange(event, 'phone')}
                                onKeyDown={this.handleKeyDown}
                            />
                            <div>
                                <input
                                    type='text'
                                    placeholder='Providers'
                                    onChange={(event) => this.handleChange(event, 'newProvider')}
                                    onKeyDown={this.handleKeyDown}
                                />
                                <Button
                                    onClick={this.addProvider}
                                >Add provider</Button>
                            </div>
                        </div>

                        {
                            this.props.providers.map((provider) => {
                                return (
                                    <ProviderList
                                    provider={provider}
                                    handleCheck={this.handleCheck}
                                     />
                                )
                            })
                        }

                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="danger"
                            className='butn'
                            onClick={onClose}>
                            Cancel
              </Button>
                        <Button variant="primary"
                            onClick={this.addClient}
                        >
                            Add Client
             </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        providerList:state.providerList
    }
}

const mapDispatchToProps = {
    addProvider,
    addClient
}

export default connect(mapStateToProps,mapDispatchToProps)(AddClient)
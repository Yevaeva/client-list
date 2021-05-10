import React, { createRef } from 'react'
import './AddClient.scss'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addClient, addProvider } from '../../store/actions';
import { toast } from "react-toastify"
import ProviderList from '../providerList/ProviderList';


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
        let { newProvider } = this.state
        let { providerList } = this.props
        let reapeted = providerList.find((prov) => {
            return prov.name === newProvider
        })

        if (newProvider.trim() && reapeted === undefined) {
            this.props.addProvider({ name: this.state.newProvider.trim() })
            this.setState({
                newProvider: '',
            })
        }
        else if (reapeted) {
            toast.error("Provider must be unique ❗❗❗")
        }

    }

    addClient = () => {
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const reg = /^\d+$/
        let { email, name, phone } = this.state

        if (email && !regexp.test(email)) {
            toast.error("Write valid email address ❗❗❗")
            return
        }
        else if (phone && !reg.test(phone)) {
            toast.error("Phone must contain only numbers ❗❗❗")
            return

        }
        else if (!name || !email || !phone) {
            toast.error("All fields marked with * are required ❗❗❗")
            return
        }
        let providers = [...this.state.selectedProviders].map((p) => {
            return { name: p }
        }
        )
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: + this.state.phone,
            providers
        }
        this.props.addClient(data)
        this.props.onClose()

    }





    render() {
        let onClose = this.props.onClose
        return (
            <div>
                <Modal dialogClassName="size"
 centered show={true} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="inputs">
                            <input ref={this.inputRef}
                                type='text'
                                placeholder='Name *'
                                value={this.state.name}
                                onChange={(event) => this.handleChange(event, 'name')}

                            />
                            <input
                                type='email'
                                placeholder='Email *'
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event, 'email')}

                            />
                            <input
                                type='text'
                                placeholder='Phone *'
                                value={this.state.phone}
                                onChange={(event) => this.handleChange(event, 'phone')}

                            />
                            <div className='addProvider'>
                                <input
                                    type='text'
                                    placeholder='Providers'
                                    value={this.state.newProvider}
                                    onChange={(event) => this.handleChange(event, 'newProvider')}

                                />
                                <Button
                                    onClick={this.addProvider}

                                >Add provider</Button>
                            </div>
                        </div>
                        <div className='providerList'>
                            {
                                this.props.providers.map((provider) => {
                                    return (
                                        <div key={provider._id}>
                                            <ProviderList
                                                provider={provider}
                                                handleCheck={this.handleCheck}
                                            />
                                        </div>
                                    )
                                })

                            }
                        </div>

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

const mapStateToProps = (state) => {
    return {
        providerList: state.providerList
    }
}

const mapDispatchToProps = {
    addProvider,
    addClient
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)
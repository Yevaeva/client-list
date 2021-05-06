import React, { createRef } from 'react'
import './AddClient.scss'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';


class AddClient extends React.PureComponent {
    constructor() {
        super()
        this.inputRef = createRef()

        this.state = {
            name: '',
            email: '',
            phone: '',
            newProvider: '',
            providers: [
                {
                    id: 1,
                    name: 'provider1'
                },
                {
                    id: 2,
                    name: 'provider2'
                },
                {
                    id: 3,
                    name: 'provider3'
                },
            ]
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


    addProvider = () => {

        let { newProvider, providers } = this.state
        if (newProvider.trim()) {
            
          
                let newProviders = [...providers, { id: 5, name: newProvider }]
                this.setState({
                    providers:newProviders,
                    newProvider:''
                })
            


        }

    }

    addClient = ()=>{
        console.log(this.state)
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
                        <div>
                            {
                                this.state.providers.map((p) => {
                                    return (

                                        <div key={p.id}>
                                            <input
                                                type="checkbox"
                                            // onClick={this.checkHandler}
                                            />
                                            <p>{p.name}</p>
                                            <button>
                                                <FontAwesomeIcon icon={faEdit} />

                                            </button>
                                            <button>
                                                <FontAwesomeIcon icon={faTrash} />

                                            </button>

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

export default AddClient
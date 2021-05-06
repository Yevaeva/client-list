import React from 'react'
import './Clients.scss'
import { Table } from 'react-bootstrap'
import AddClient from '../addClient/AddClient'
import { connect } from 'react-redux'
import { getClients, getProviders } from '../../store/actions'



class Clients extends React.PureComponent {
    constructor() {
        super()

        this.state = {
            openNewClientModal: false
        }
    }

    componentDidMount() {
        this.props.getClients()
      }

    toggleNewClientModal = () => {
        this.props.getProviders()

        this.setState({
            openNewClientModal: !this.state.openNewClientModal,
        })
    }


    render() {
        const {clientList} = this.props
        return (
            <div className='back'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="5">
                                <div className='clientHeader'>
                                    <h4>Clients</h4>
                                    <button
                                        onClick={this.toggleNewClientModal}
                                    >New Client
                                 </button>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Providers</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientList.map((client)=>{
                                return(
                                    <tr>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.phone}</td>
                                        <td>{client.providers.map(p=>p.name).join(', ')}
                                            </td>
                                        <td>Edit</td>
                                </tr> 
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
                {
                    this.state.openNewClientModal &&
                    <AddClient
                        onClose={this.toggleNewClientModal} 
                        providers={this.props.providerList}
                        />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     clientList: state.clientList,
      addClientSuccess: state.addClientSuccess,
      editClientSuccess: state.editClientSuccess,
      providerList:state.providerList
  
    }
  }
  
  const mapDispatchToProps = {
    getClients,
    getProviders
  }

export default connect(mapStateToProps,mapDispatchToProps)(Clients)
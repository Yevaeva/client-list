import React from 'react'
import './Clients.scss'
import { Table } from 'react-bootstrap'
import AddClient from '../addClient/AddClient'
import { connect } from 'react-redux'
import { getClients } from '../../store/actions'



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
        this.setState({
            openNewClientModal: !this.state.openNewClientModal,
        })
    }


    render() {
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
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </Table>
                {
                    this.state.openNewClientModal &&
                    <AddClient
                        onClose={this.toggleNewClientModal} />
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
  
    }
  }
  
  const mapDispatchToProps = {
    getClients
  }

export default connect(mapStateToProps,mapDispatchToProps)(Clients)
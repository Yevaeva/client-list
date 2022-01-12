import React from "react";
import "./Clients.scss";
import { Table, Button } from "react-bootstrap";
import AddClient from "../addClient/AddClient";
import { connect } from "react-redux";
import { getClients, getProviders } from "../../store/actions";
import EditClientModal from "../editClientModal/EditClientModal";
import Search from "../search/Search";

class Clients extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      openNewClientModal: false,
      editClient: null,
    };
  }

  componentDidMount() {
    this.props.getClients();
  }

  toggleNewClientModal = () => {
    this.setState({
      openNewClientModal: !this.state.openNewClientModal,
    });
  };
  openNewClientModal = () => {
    this.props.getProviders();
    this.setState({
      openNewClientModal: !this.state.openNewClientModal,
    });
  };

  toggleEdit = (client) => {
    this.props.getProviders();
    this.setState({
      editClient: client,
    });
  };

  render() {
    const { clientList } = this.props;
    return (
      <div className="back">
        <Search />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="5">
                <div className="clientHeader">
                  <h4>Clients</h4>
                  <Button onClick={this.openNewClientModal}>New Client</Button>
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
            {clientList.map((client) => {
              return (
                <tr key={client._id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.providers.map((p) => p.name).join(", ")}</td>
                  <td>
                    <Button onClick={() => this.toggleEdit(client)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {this.state.openNewClientModal && (
          <AddClient
            onClose={this.toggleNewClientModal}
            providers={this.props.providerList}
          />
        )}
        {this.state.editClient && (
          <EditClientModal
            client={this.state.editClient}
            onClose={() => this.toggleEdit(null)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clientList: state.clientList,
    addClientSuccess: state.addClientSuccess,
    editClientSuccess: state.editClientSuccess,
    providerList: state.providerList,
  };
};

const mapDispatchToProps = {
  getClients,
  getProviders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

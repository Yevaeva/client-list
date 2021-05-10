import React from 'react'
import { connect } from 'react-redux';
import { toast } from "react-toastify"
import { addProvider, editClient, removeClient } from '../../store/actions';
import { Modal, Button } from 'react-bootstrap'
import ProviderList from '../providerList/ProviderList';
import Confirm from '../confirm/Confirm';



class EditClientModal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.state = {
      ...this.props.client,
      showConfirm: false,
      selectedProviders: new Set(),
    }

  }

  componentDidMount() {
    this.inputRef.current.focus()
    this.setState({
      selectedProviders: new Set([...this.state.providers.map((checked) => checked.name)])
    })
  }

  editChangeHandler = (event, type) => {

    this.setState({
      [type]: event.target.value
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

  editClient = () => {
    let { email, name, phone } = this.state

    if(!email || !name || !phone){
      toast.error("All fields marked with * are required ❗❗❗")
      return
    };
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const reg = /^\d+$/

    if (email && !regexp.test(email)){
        toast.error("Write valid email address ❗❗❗")
        return
    }
    else if(phone && !reg.test(phone)){
        toast.error("Phone must contain only numbers ❗❗❗")
        return

    }
    else if(!name || !email || !phone){
        toast.error("All fields marked with * are required ❗❗❗")
        return
    }
    
      const providers = [...this.state.selectedProviders].map(p=>{
        return {name:p}
      })
      const data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        _id: this.state._id,
        providers
      }
      this.props.editClient(data)

      this.props.onClose()
 
    
  }

  toggleConfirm = () => {
    this.setState({
      showConfirm: !this.state.showConfirm,
    })
  }

  removeClient = () => {
    this.props.removeClient(this.state._id)
    this.toggleConfirm()
    this.props.onClose()
  }


  render() {
    return (
      <div>
        <Modal centered show={true} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="inputs">
              <input ref={this.inputRef}
                type='text'
                placeholder='Name *'
                value={this.state.name}
                onChange={(event) => this.editChangeHandler(event, 'name')}
           
              />
              <input
                type='text'
                placeholder='Email *'
                value={this.state.email}
                onChange={(event) => this.editChangeHandler(event, 'email')}
              />
              <input
                type='text'
                placeholder='Phone *'
                value={this.state.phone}
                onChange={(event) => this.editChangeHandler(event, 'phone')}
              />
              <div className='addProvider'>
                <input
                  type='text'
                  placeholder='Providers'
                  value={this.state.newProvider}
                  onChange={(event) => this.editChangeHandler(event, 'newProvider')}
                />
                <Button
                  onClick={this.addProvider}
                >Add provider</Button>
              </div>
            </div>
            <div className='providerList'>
              {
                this.props.providerList.map((provider) => {
                  return (
                    <ProviderList
                      provider={provider}
                      checkedProvider={this.state.providers.map((checked => checked.name))}
                      handleCheck={this.handleCheck}
                    />
                  )
                })
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className='btns'>
            <Button variant="danger"
              onClick={this.toggleConfirm}
            >
              Delete Client
              </Button>
              <div>
            <Button 
           
              onClick={this.props.onClose}>
              Cancel
              </Button>
            <Button 
              onClick={this.editClient}
            >
              Edit Client
             </Button>
             </div>
             </div>
          </Modal.Footer>
        </Modal>

        {
          this.state.showConfirm &&
          <Confirm
            handleClose={this.toggleConfirm}
            removeClient={this.removeClient} />
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    providerList: state.providerList,
    errorMessage:state.errorMessage
  }
}

const mapDispatchToProps = {
  addProvider,
  editClient,
  removeClient
}

export default connect(mapStateToProps, mapDispatchToProps)(EditClientModal)
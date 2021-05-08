import React, { useState } from 'react'
import './ProviderList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { editProvider, removeProvider } from '../../store/actions';



class ProviderList extends React.Component {

    state={
        checkbox:false,
        edit:false,
        inputValue:this.props.provider.name
    }

    componentDidMount(){
        if (this.props.checkedProvider && this.props.checkedProvider.includes(this.props.provider.name)) {
            console.log(this.props.checkedProvider, 'checkedProvider')

            this.setState({
                checkbox: true

            })
        } else {
            this.setState({
                checkbox: false
            })
        }
    }
    handleCheck = (e) => {
        
      this.props.handleCheck(e)
      this.setState({
          checkbox:!this.state.checkbox
      })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(this.props.provider)
            const data = {
                name:this.state.inputValue,
                _id:this.props.provider._id
            }
            this.props.editProvider(data)
            this.setState({
                edit:false
            })
        }

    }

    render() {
        const { provider } = this.props
        
        return (
                   
            <div className='provWrapper' key={provider._id}>
                <div className='provName'>  
                    <input
                        name={provider.name}
                        type="checkbox"
                        id={provider.name}
                        onClick={(e) => this.handleCheck(e)}
                        checked={this.state.checkbox}
                    />
                    {
                        this.state.edit?
                        <input className='editInput' 
                        type='text' 
                        value={this.state.inputValue}
                        onChange={(e)=>this.setState({inputValue:e.target.value})}
                        onKeyDown={this.handleKeyDown}
                        />:
                   
                    <label for={provider.name}>
                    {provider.name}
                </label>

                    }
                    </div>
                    <div>
                    <button
                    onClick={()=>this.setState({edit:!this.state.edit})}
                    >
                        <FontAwesomeIcon icon={faEdit} color='#210794' />

                    </button>
                    <button
                    onClick={()=>this.props.removeProvider(provider._id)}
                    
                    >
                        <FontAwesomeIcon icon={faTrash} color='#ce0f0f' />

                    </button>
                </div>

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
    editProvider,
    removeProvider
}

export default connect(mapStateToProps,mapDispatchToProps)(ProviderList)
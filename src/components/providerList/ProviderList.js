import React, { useState } from 'react'
import './ProviderList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';



class ProviderList extends React.Component {

    

     state = {
            selectedProviders: new Set(),
            sel:[]
     }
   


    handleCheck = (e) => {
        
      this.props.handleCheck(e)
    }

    render() {
        const { provider } = this.props

        return (
            <div className='provWrapper' key={provider._id}>
                <div>
                    <input
                        name={provider.name}
                        type="checkbox"
                        onClick={(e) => this.handleCheck(e)}
                    // checked={state.toggleCheck}
                    />
                    <p>{provider.name}</p>
                    <button>
                        <FontAwesomeIcon icon={faEdit} />

                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTrash} />

                    </button>
                </div>

            </div>

        )

    }
}

export default ProviderList
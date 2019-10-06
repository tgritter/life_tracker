import React from 'react'
import { Add } from '@material-ui/icons';

class AddButton extends React.Component {

    render() {
        return (
            <div className="add_button" onClick={this.props.onClick}>
                <Add color="primary"/> 
            </div>
        )
    }
}

export default AddButton
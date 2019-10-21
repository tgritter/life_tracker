import React from 'react'
import { Add, Save } from '@material-ui/icons';

class Button extends React.Component {

    renderIcon = () => {
        const {icon} = this.props;

        if(icon === 'Add'){
            return <Add color="primary"/>
        }
        else if(icon === 'Save'){
            return <Save color="primary"/>
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div className="button" onClick={this.props.onClick}>
                {this.renderIcon()}
            </div>
        )
    }
}

export default Button
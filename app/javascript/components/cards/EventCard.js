import React from 'react'
import TextField from '@material-ui/core/TextField';

class FoodCard extends React.Component {

    handleChange = name => event => {
        console.log('Name')
    };
    
    render() {
        return (
            <div className="card">
                <TextField
                    id="outlined-name"
                    label="Event"
                    value={this.props.title}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="time"
                    label="Time"
                    type="time"
                    defaultValue={null}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 5, // 5 min
                    }}
                />
                <TextField
                    id="outlined-name"
                    label="Details"
                    value={null}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        )
    }
}


export default FoodCard
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
                    label="Meal"
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
                    label="Food"
                    value={null}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="standard-name"
                    label="Cost"
                    type="number"
                    value={'1'}
                    onChange={this.handleChange('name')}
                    margin="dense"
                />
                <TextField
                    id="standard-name"
                    label="Calories"
                    type="number"
                    value={'1'}
                    onChange={this.handleChange('name')}
                    margin="dense"
                />
            </div>
        )
    }
}


export default FoodCard
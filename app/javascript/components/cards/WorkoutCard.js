import React from 'react'
import TextField from '@material-ui/core/TextField';

class ReadingCard extends React.Component {

    handleChange = name => event => {
        console.log('Name')
    };
    
    render() {
        return (
            <div className="card">
                <TextField
                    id="outlined-name"
                    label="Exercise"

                    value={this.props.title}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="weight"
                    label="Weight"
                    type="number"
                    defaultValue={null}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <div className="flex_row">
                    <TextField
                        id="standard-name"
                        label="Amount"
                        type="number"
                        value={'1'}
                        onChange={this.handleChange('name')}
                        margin="dense"
                    />
                    <div>x</div>
                    <TextField
                        id="standard-name"
                        label="Reps"
                        type="number"
                        value={'100'}
                        onChange={this.handleChange('name')}
                        margin="dense"
                    />
                </div>
                <div>
                    <TextField
                        id="time"
                        label="Start"
                        type="time"
                        defaultValue={null}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                    <TextField
                        id="time"
                        label="End"
                        type="time"
                        defaultValue={null}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                </div>
            </div>
        )
    }
}


export default ReadingCard
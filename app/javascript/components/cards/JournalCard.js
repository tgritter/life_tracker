import React from 'react'
import TextField from '@material-ui/core/TextField';

class JournalCard extends React.Component {

    handleChange = name => event => {
        console.log('Name')
    };
    
    render() {
        return (
            <div className="card">
                <TextField
                    id="outlined-name"
                    label="Mood"
                    value={this.props.title}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Journal"
                    value={null}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        )
    }
}


export default JournalCard
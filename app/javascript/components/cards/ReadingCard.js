import React from 'react'
import TextField from '@material-ui/core/TextField';
import {KeyboardTimePicker} from '@material-ui/pickers';

class ReadingCard extends React.Component {

    handleChange = section => event => {
        const {index, onChange, category} = this.props;

        onChange(index, section, category, event.target.value);
    };

    onChangeHandle = (key, input_time) => {
        const {index, onChange, category} = this.props;
        
        onChange(index, key, category, input_time);
    }
    
    render() {
        const {object} = this.props;
        return (
            <div className="card">
                <TextField
                    id="outlined-name"
                    label="Title"
                    value={object.title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    variant="outlined"
                />
                <div>
                    <KeyboardTimePicker
                        id="time_start"
                        className="time_picker"
                        margin="normal"
                        label={'Start'}
                        value={object.time_start}
                        onChange={(time) => this.onChangeHandle('time_start', time)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        id="time_end"
                        className="time_picker"
                        margin="normal"
                        label={'End'}
                        value={object.time_end}
                        onChange={(time) => this.onChangeHandle('time_end', time)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-name"
                        label="Start"
                        type="number"
                        value={object.page_start}
                        onChange={this.handleChange('page_start')}
                        margin="dense"
                    />
                    <TextField
                        id="standard-name"
                        label="End"
                        type="number"
                        value={object.page_end}
                        onChange={this.handleChange('page_end')}
                        margin="dense"
                    />
                </div>

                <TextField
                    id="outlined-name"
                    label="URL"
                    value={object.url}
                    onChange={this.handleChange('url')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Notes"
                    value={object.notes}
                    onChange={this.handleChange('notes')}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        )
    }
}


export default ReadingCard
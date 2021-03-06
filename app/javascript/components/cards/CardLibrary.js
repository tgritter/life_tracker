import React from 'react'
import TextField from '@material-ui/core/TextField';
import {KeyboardTimePicker} from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
var moment = require('moment');

class CardLibrary extends React.Component {

    handleChange = name => event => {
        const {card, handleChange} = this.props;
        handleChange(card.id, name, event.target.value)
    };

    handleChangeTime = (name, time) => {
        const {card, handleChange} = this.props;
        handleChange(card.id, name, time)
    };

    parseInputData = (ultimate_data) => {
        switch(ultimate_data.input_type){
            case 'time_picker':
                return (
                    <KeyboardTimePicker
                        id={ultimate_data.input_type}
                        className={ultimate_data.input_type}
                        margin="normal"
                        label={ultimate_data.input_name}
                        value={ultimate_data.value}
                        onChange={(time) => this.handleChangeTime(ultimate_data.input_name, time)}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                )
            break;
            case 'text_field':
                console.log('UltimateData: ', ultimate_data.value)
                return (
                    <TextField
                        id={ultimate_data.type}
                        label={ultimate_data.input_name}
                        value={ultimate_data.value}
                        onChange={this.handleChange(ultimate_data.input_name)}
                        margin="normal"
                        variant="outlined"
                    />
                )
            break;
            case 'text_area_autosize':
                return (
                    <TextareaAutosize 
                        aria-label="minimum height" 
                        rows={3} 
                        placeholder={ultimate_data.input_name}
                        value={ultimate_data.value}
                        onChange={this.handleChange(ultimate_data.input_name)}
                    />
                )
            break;
            default: return null;
        }
    }
    
    render() {
        const {ultimate_data} = this.props;

        return (
            <div>
                {this.parseInputData(ultimate_data)}
            </div>

        )

    }
}


export default CardLibrary
import React from 'react'
import {KeyboardTimePicker} from '@material-ui/pickers';

class TimeCard extends React.Component {

    onChangeHandle = (key, input_time) => {
        const {index, onChange, category} = this.props;
        onChange(index, key, category, input_time);
    }

    render() {
        const {object, index} = this.props;
        return (
            <div className="card">
                {Object.keys(object).map(key => 
                        <KeyboardTimePicker
                            key={key + index}
                            id="time-picker"
                            className="time_picker"
                            margin="normal"
                            label={key}
                            value={object[key]}
                            onChange={(time) => this.onChangeHandle(key,time)}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    )
                }
            </div>
        )
    }
}

export default TimeCard
import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

class TrackGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickValues: this.props.values,
            tickFormat: this.props.format
        };
    }

    filter_format(format){
        
        var new_format = []

        for(var i = 0; i < format.length; i++){
            var string = format[i];
            var new_string = string.substring(string.length - 5, string.length)
            new_format.push(new_string);
        }

        return new_format
    }

    filter_values(values){
        
        var new_values = []

        for(var i = 0; i < values.length; i++){
            var string = values[i].category
            var new_string = string.substring(string.length - 5, string.length)
            const obj = {category: new_string, entries: values[i].entries}
            new_values.push(obj);
        }
        return new_values
    }
    
    render() {
        const { values, format, category } = this.props;
        const new_format = category === 'all' ? format : this.filter_format(format);
        const new_values = category === 'all' ? values : this.filter_values(values);

        return (
            <div>
                <VictoryChart
                    // domainPadding will add space to each side of VictoryBar to
                    // prevent it from overlapping the axis
                    domainPadding={50}
                    width={1500}
                >
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickFormat={new_format}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}`)}
                    />
                    <VictoryBar
                        data={new_values}
                        x="category"
                        y="entries"
                    />
                </VictoryChart>
            </div>
        )
    }
}

export default TrackGraph
import React from 'react'
import Calendar from 'react-calendar';
import Header from './ui/Header'
import TrackCategory from './ui/TrackCategory'
import Card from './cards/Card'
import AddButton from './ui/AddButton'; 

const categories = [
    'sleep',
    'oral_hygiene',
    'hygiene'
]

const test_data = [
    {
        id: 100,
        date: null,
        category: 'sleep',
        input_data: [
            {
                input_name: 'sleep_time',
                input_type: 'time_picker',
                value: null
            },
            {
                input_name: 'awake_time',
                input_type: 'time_picker',
                value: null
            },
        ]
    },
    {
        id: 101,
        date: null,
        category: 'oral_hygiene',
        input_data: [
            {
                input_name: 'brush_time_start',
                input_type: 'time_picker',
                value: null
            },
            {
                input_name: 'floss_time_start',
                input_type: 'time_picker',
                value: null
            },
        ]
    },
    {
        id: 102,
        date: null,
        category: 'hygiene',
        input_data: [
            {
                input_name: 'shower_time',
                input_type: 'time_picker',
                value: null
            },
            {
                input_name: 'shave_time',
                input_type: 'time_picker',
                value: null
            },
            {
                input_name: 'deodrant_time',
                input_type: 'time_picker',
                value: null
            }
        ]
    }         
]

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'sleep',
            date: new Date(),
            data: test_data
        };
    }

    onChangeDate = date => this.setState({ date })

    onChangeCategory = category => {
        this.setState({category})
    }

    filterData = (data) => {
        const {category} = this.state;
        const filtered_data = data.filter(card => card.category == category);

        return filtered_data
    }

    handleChangeData = (id, name, value) => {
        const array = [...this.state.data];
        const card_index = array.findIndex(x => x.id === id);
        const input_index = array[card_index].input_data.findIndex(x => x.inputName === name);

        array[card_index].input_data[input_index]['value'] = value;
        this.setState({filtered_data: array})
    };

    addToArray = (category) => {
        // const array = this.state[category];

        // if(category === 'readings'){
        //     array.push(new readings())
        // }

        // this.setState({[category]: array})
        console.log('Category: ', category);
    }

    render() {
        const {date, data, category} = this.state;
        return (
            <div>
                <Header/>
                <div className="calendar">
                    <Calendar
                        onChange={this.onChangeDate}
                        value={date}
                    />
                </div>
                <div className="form_container">
                    <TrackCategory
                        categories={categories} 
                        handleClick={this.onChangeCategory}
                    />
                    <div className="cards_array">
                        {this.filterData(data).map((card, index) => {
                            return (
                                <Card 
                                    key={index}
                                    index={index}
                                    card={card}
                                    handleChange={this.handleChangeData}
                                /> 
                        )})}
                        <AddButton onClick={() => this.addToArray(category)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Track
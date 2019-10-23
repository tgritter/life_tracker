import React from 'react'
import Calendar from 'react-calendar';
import Header from './ui/Header'
import TrackCategory from './ui/TrackCategory'
import {KeyboardDatePicker} from '@material-ui/pickers';
import Card from './cards/Card'
import {card_template, categories} from '../template/Card'
import axios from 'axios'
import update from 'immutability-helper' 
import Icon from '@material-ui/core/Icon'; 
import Button from './ui/Button'

var moment = require('moment');

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'sleep',
            date: new Date(),
            data: [],
            loading: true,
            filteredData: []
        };
    }

    componentDidMount(){
        this.getCards();
    }

    getCards(date) {
        axios.get('/api/v1/cards?date=' + moment(date).format('YYYY-MM-DD'))
        .then(response => {
            console.log('Response: ', response)
            this.setState({
                data: response.data,
                loading: false
            })
            this.filterData()
        })
        .catch(error => console.log(error))
    }

    onChangeDate = (date) => {
        this.setState({ date })
        this.getCards(date)
    }

    handleDateChange = date => {
        this.setState({ date })
        this.getCards(date)
    };

    onChangeCategory = category => {
        this.setState({category}, () => {
            this.filterData()
        })
    }

    filterData = () => {
        const {data, category} = this.state;
        const filteredData = data.filter(card => card.category == category);

        if(filteredData.length < 1){
            this.createCard()
        }
        else {
            filteredData.sort((a,b) => {return a.id - b.id})
            this.setState({filteredData})
        }
    }

    handleChangeData = (id, input_name, value) => {
        const array = [...this.state.filteredData];
        const card_index = id ? array.findIndex(x => x.id === id) : 0;
        console.log('array[card_index].data: ', array[card_index].data)
        console.log('input_name: ', input_name)
        const input_index = array[card_index].data.findIndex(x => x.input_name === input_name);
        array[card_index].data[input_index].value = value;
        this.setState({data: array}, () => this.filterData())
    };

    createCard = () => {
        const {category, date} = this.state;
        const dateString = moment(date).format('YYYYMMDD')
        let newCard = card_template(category, dateString)
        axios.post('/api/v1/cards', {card: newCard})
        .then(response => {
            console.log('Response: ', response)
            const data = update(this.state.data, {
                $splice: [[0, 0, response.data]]
            })
            this.setState({
                data: data
            },() => this.filterData())
        })
        .catch(error => {
            console.log(error)
        })
    }

    onSave = () => {
        const {filteredData} = this.state;

        for(var i = 0; i < filteredData.length; i++){
            const data = filteredData[i]
            axios.put('/api/v1/cards/' + data.id, {
                card: data
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(err);
            });
        }
    }

    onDelete = (card) => {
        axios.delete(`/api/v1/cards/${card.id}`)
        .then(response => {
            console.log('Response: ', response)
            const cardIndex = this.state.data.findIndex(x => x.id === card.id)
            const cards = update(this.state.data, {
                $splice: [[cardIndex, 1]]
            })
            this.setState({
                data: cards
            },() => this.filterData())
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        if(this.state.loading) {
            return(
                <div className="main">
                    <Header/>
                    <div>Loading</div>
                </div>
            )
        }
        else {
            const {date, filteredData, category} = this.state;

            return (
                <div className="main">
                    <Header/>
                    <div className="calendar">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="DD-MM-YYYY"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date Picker"
                        value={date}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </div>
                    <div className="form_container">
                        <TrackCategory
                            category={category}
                            categories={categories} 
                            handleClick={this.onChangeCategory}
                        />
                        <div className="cards_array">
                            {filteredData.map((card, index) => {
                                return (
                                    <Card 
                                        key={index}
                                        index={index}
                                        card={card}
                                        handleChange={this.handleChangeData}
                                        onDelete={() => this.onDelete(card, index)}
                                    /> 
                            )})}
                            <Button onClick={() => this.createCard()} icon="Add" />
                        </div>
                        <Button onClick={() => this.onSave()} icon="Save" />
                    </div>
                </div>
            )
        }
    }
}

export default Track
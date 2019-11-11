import React from 'react'
import Header from './ui/Header'
import TrackGraph from './graphs/track_graph';
import TrackCategory from './ui/TrackCategory'
import {KeyboardDatePicker} from '@material-ui/pickers';
import axios from 'axios'
import { categories } from '../template/Categories'

const moment = require('moment');

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            data: [],
            loading: true, 
            category: 'all'
        };
    }

    componentDidMount(){
        this.getCards(new Date());
    }

    getCards(date) {
        axios.get('/api/v1/cards?date=' + moment(date).format('YYYY-MM-DD'))
        .then(response => {
            this.setState({
                data: this.filterDataCategory(response.data),
                loading: false,
                
            })
        })
        .catch(error => console.log(error))
    }

    getCardsByCategory(category, dateAgo){
        axios.get('/api/v1/cards?category=' + category + (dateAgo ? '&dateAgo=' + moment(dateAgo).format('YYYY-MM-DD') : null))
        .then(response => {
            this.setState({
                data: this.filterDataDateRange(response.data),
                loading: false
            })
            return response.data
        })
        .catch(error => console.log(error))
    }

    handleDateChange = date => {
        this.setState({ date })
        this.getCards(date)
    };

    getDateAgo(daysAgo){
        var dateAgo = new Date();
        dateAgo.setDate(dateAgo.getDate() - daysAgo);
        return dateAgo
    }

    getDateRange(startDate) {
        var endDate = new Date();
        var dates = [],
            currentDate = startDate,
            addDays = function(days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };
        while (currentDate <= endDate) {
          dates.push(moment(currentDate).format('YYYY-MM-DD'));
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };

    filterDataDateRange = (data, daysAgo = 10) => {
        const new_data = []
        const date_range = this.getDateRange(this.getDateAgo(daysAgo));

        for(var i = 0; i < date_range.length; i++){
            var object = {category: date_range[i], entries: 0}
            new_data.push(object);
        }

        for(var i = 0; i < data.length; i++){
            var date = data[i].date;
            var found = new_data.findIndex((element) => {
                return element.category === date;
            });
            if(found > -1){
                new_data[found].entries += 1;
            }
        }
        return new_data
    }

    filterDataCategory = (data) => {

        const new_data = [];

        for(var i = 0; i < categories.length; i++){
            const obj = { category: categories[i], entries: 0}
            new_data.push(obj);
        }

        for(var i = 0; i < data.length; i++){
            for (var j=0; j < new_data.length; j++) {
                const data_name = data[i].category
                if (new_data[j].category === data_name) {
                    new_data[j].entries += 1;
                }
            }
        }

        return new_data
    }

    onChangeCategory = category => {
        const { date } = this.state;
        if(category === 'all'){
            this.getCards(date)
        }else{
            this.getCardsByCategory(category, this.getDateAgo(10));
        }
        this.setState({category});
    }

    onPress() {
        console.log('Test')
    }

    render() {
        const { date, data, category } = this.state;
        const newCategories = [...categories]
        newCategories.push('all')

        return (
            <div className="data_container">
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
                <TrackCategory
                    category={category}
                    categories={newCategories} 
                    handleClick={this.onChangeCategory}
                />
                <TrackGraph
                    category={category} 
                    values={data} 
                    format={category === 'all' ? categories : this.getDateRange(this.getDateAgo(10))}
                />
                <div onClick={() => this.onPress()}>Test</div>
            </div>
        )
    }
}

export default Data
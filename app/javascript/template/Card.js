export const categories = [
    'sleep',
    'hygiene',
    'food'
]

export const card_template = (category, date) => {
    let data = {}
    switch(category){
        case 'sleep':
            data = {
                date: date,
                category: 'sleep',
                data: [
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
            }
            return data;
        case 'hygiene':
            data = {
                date: date,
                category: 'hygiene',
                data: [
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
            return data;
        case 'food':
            data = {
                date: date,
                category: 'food',
                data: [
                    {
                        input_name: 'meal_type',
                        input_type: 'text_field',
                        value: null
                    },
                    {
                        input_name: 'meal_time',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'food_type',
                        input_type: 'text_field',
                        value: null
                    },
                    {
                        input_name: 'cost',
                        input_type: 'text_field',
                        value: null
                    },
                    {
                        input_name: 'calories',
                        input_type: 'text_field',
                        value: null
                    }
                ]
            }  
            return data;
        default: return null;
    }
}
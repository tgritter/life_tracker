export const categories = [
    'sleep',
    'hygiene',
    'food',
    'workout',
    'readings',
    'clean',
    'events',
    'journal'
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
                        value: ''
                    },
                    {
                        input_name: 'meal_time',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'food_type',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'cost',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'calories',
                        input_type: 'text_field',
                        value: ''
                    }
                ]
            }  
            return data;
        case 'workout':
            data = {
                date: date,
                category: 'workout',
                data: [
                    {
                        input_name: 'exercise_type',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'weight',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'amount',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'reps',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'time',
                        input_type: 'time_picker',
                        value: null
                    }
                ]
            }  
            return data;
        case 'readings':
            data = {
                date: date,
                category: 'readings',
                data: [
                    {
                        input_name: 'title',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'time_start',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'time_end',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'page_start',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'page_end',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'url',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'notes',
                        input_type: 'text_field',
                        value: ''
                    }
                ]
            }  
            return data;
        case 'clean':
            data = {
                date: date,
                category: 'clean',
                data: [
                    {
                        input_name: 'clean_time',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'room_clean_%',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'kitchen_clean_%',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'bathroom_clean_%',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'livingroom_clean_%',
                        input_type: 'text_field',
                        value: ''
                    },
                ]
            }  
            return data;
        case 'events':
            data = {
                date: date,
                category: 'events',
                data: [
                    {
                        input_name: 'label',
                        input_type: 'text_field',
                        value: ''
                    },
                    {
                        input_name: 'time',
                        input_type: 'time_picker',
                        value: null
                    },
                    {
                        input_name: 'notes',
                        input_type: 'text_field',
                        value: ''
                    },
                ]
            }  
            return data;
        case 'journal':
            data = {
                date: date,
                category: 'journal',
                data: [
                    {
                        input_name: 'mood',
                        input_type: 'text_field',
                        value: 'test'
                    },
                    {
                        input_name: 'journal',
                        input_type: 'text_field',
                        value: 'test'
                    }, 
                ]
            }  
            return data;
        default: return null;
    }
}
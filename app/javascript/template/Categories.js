export const categories = [
    'sleep',
    'hygiene',
    'grooming',
    'food',
    'workout',
    'readings',
    'clean',
    'drugs', 
    'events',
    'journal',
    'completed'
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
                        input_name: 'deodrant_time',
                        input_type: 'time_picker',
                        value: null
                    }
                ]
            }  
        return data;
        case 'grooming':
                data = {
                    date: date,
                    category: 'grooming',
                    data: [
                        {
                            input_name: 'shave_time',
                            input_type: 'time_picker',
                            value: null
                        },
                        {
                            input_name: 'clip_finger_nails',
                            input_type: 'time_picker',
                            value: null
                        },
                        {
                            input_name: 'clip_toe_nails',
                            input_type: 'time_picker',
                            value: null
                        },
                        {
                            input_name: 'hair_cut',
                            input_type: 'time_picker',
                            value: null
                        },
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
                        input_type: 'text_area_autosize',
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
        case 'drugs':
                data = {
                    date: date,
                    category: 'drugs',
                    data: [
                        {
                            input_name: 'drug_type',
                            input_type: 'text_field',
                            value: ''
                        },
                        {
                            input_name: 'drug_time',
                            input_type: 'time_picker',
                            value: null
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
                        input_type: 'text_area_autosize',
                        value: ''
                    }
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
                        value: ''
                    },
                    {
                        input_name: 'notes',
                        input_type: 'text_area_autosize',
                        value: ''
                    }
                ]
            }  
            return data;
        case 'completed':
            data = {
                date: date,
                category: 'completed',
                data: [
                    {
                        input_name: 'completed_time',
                        input_type: 'time_picker',
                        value: null
                    },
                ]
            }
            return data;
        default: return null;
    }
}
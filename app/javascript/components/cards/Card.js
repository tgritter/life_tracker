import React from 'react'
import TextField from '@material-ui/core/TextField';
import CardLibrary from './CardLibrary'

class Card extends React.Component {
    
    render() {
        const {card, index, onDelete} = this.props;
        return (
            <div className="card">
                <div className="card_title_container">
                    <div className="card_title">{card.category}</div>
                    <p onClick={onDelete}>X</p>
                </div>
                {card.data.map((ultimate_data, key) => {
                    return (
                        <CardLibrary 
                            key={key}
                            index={index}
                            card={card}
                            ultimate_data={ultimate_data}
                            handleChange={this.props.handleChange}
                        />
                    )
                })} 
            </div>
        )
    }
}


export default Card
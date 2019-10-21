import React from 'react'

class TrackCategory extends React.Component {

    renderTrackCategory = (category) => {
        if(this.props.category === category){
            return(
                <h1 key={category} onClick={() => this.props.handleClick(category)}>
                    {category[0].toUpperCase() + category.slice(1)}
                </h1>
            )
        }
        else {
            return(
                <p key={category} onClick={() => this.props.handleClick(category)}>
                    {category[0].toUpperCase() + category.slice(1)}
                </p>
            )
        }
    }

    render() {
        return (
            <div className="track_picker">
                {this.props.categories.map(category => 
                    this.renderTrackCategory(category)
                )}
            </div>
        )
    }
}

export default TrackCategory
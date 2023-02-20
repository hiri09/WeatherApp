import React from 'react'

const Cards = ({text}) => {
    return (
        <div className='cards'>
            <div className="first_card">
                <div className="description">
                    <h3>Description</h3>
                    <h4>{text.description}</h4>
                </div>
                <div className="description">
                    <h3>Temperature</h3>
                    <h4>{text.temp}</h4>
                </div>
                <div className="description">
                    <h3>Maximum Temperature</h3>
                    <h4>{text.temp_max}</h4>
                </div>
            </div>
            <div className="second_card">
                <div className="description">
                    <h3>Minimum Temperature</h3>
                    <h4>{text.temp_min}</h4>
                </div>
                <div className="description">
                    <h3>Humidity</h3>
                    <h4>{text.humidity}</h4>
                </div>
                <div className="description">
                    <h3>Sunrise</h3>
                    <h4>{text.sunrise}</h4>
                </div>
            </div>
            <div className="third_card">
                <div className="description">
                    <h3>Sunset</h3>
                    <h4>{text.sunset}</h4>
                </div>
                <div className="description">
                    <h3>Country</h3>
                    <h4>{text.country}</h4>
                </div>
            </div>
        </div>
    )

}

    
export default Cards

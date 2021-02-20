import React from 'react'

const Locationinfobox = ({ info }) => {
    return (
        <div className="location-info">
            <h2> Event Location Info</h2>
            <ul>
                <li>Name: <strong>{info.name}</strong></li>
                <li>Cuisines: <strong>{info.type}</strong></li>
                <li>Phone Number: <strong>{info.phone}</strong></li>

            </ul>
        </div>
    )
}

export default Locationinfobox

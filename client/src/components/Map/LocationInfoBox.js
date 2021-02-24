import React from 'react'

const Locationinfobox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>{info.name} </h2>
            <ul>

                <li>Cuisines: <strong>{info.type}</strong></li>
                <li>Phone Number: <strong>{info.phone}</strong></li>

            </ul>
        </div>
    )
}

export default Locationinfobox

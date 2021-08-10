import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'

const UserHighlight = () => {
    return (
        <div>
            <div >
                <img src={} alt={`${} user avatar`} />
            </div>
            <div >
                <div >{}</div>
                <div >{}</div>
            </div>
            <div >
                <span >
                    <CircleFill />
                </span>
                <span >{}</span>
            </div>
        </div>
    )
}

export default UserHighlight

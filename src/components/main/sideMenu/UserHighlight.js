import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import avatar from '../../../assets/batman.png'

const UserHighlight = () => {
    return (
        <div className={ ' flex-row row justify-content-space border hightlight my-1 ' }>
            {/* Avatar */}
            <div id={'avatar'} className={ 'border row justify-content-center align-items-center d-sm-inline-block'} >
                <img  src={avatar} alt={`${'user'} user avatar`}  />
            </div>
            <div className={ 'border d-none d-sm-inline-block'} >
                <div >{}</div>
                <div >{}</div>
            </div>
            <div className={ 'border d-none d-sm-inline-block'} >
                <span >
                    <CircleFill />
                </span>
                <span >{}</span>
            </div>
        </div>
    )
}

export default UserHighlight

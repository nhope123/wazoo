import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import avatar from '../../../assets/batman.png'

const UserHighlight = () => {
    return (
        <div className={ 'd-flex flex-row align-items-end  justify-content-space border rounded hightlight my-1 p-1 ' }
             onClick={ ()=>{}}>
            {/* Avatar */}
            <div id={'avatar'} className={ 'border d-flex flex-row justify-content-center align-items-center d-sm-inline-block'} >
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

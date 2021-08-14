import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import avatar from '../../../assets/batman.png'
import { formatNumber } from '../../../assets/helper_function';

import { userData } from '../../../assets/json-data';



const UserHighlight = () => {
    console.log(JSON.stringify(userData));
    return (
        <div className={ 'd-flex flex-row align-items-end  justify-content-space border rounded hightlight my-1 p-1 ' }
             onClick={ ()=>{}}>
            {/* Avatar */}
            <div id={'avatar'} className={ 'border d-flex flex-row justify-content-center align-items-center d-sm-inline-block'} >
                <img  src={avatar} alt={`${'user'} user avatar`}  />
            </div>
            <div className={ 'border d-none d-sm-inline-block'} >
                {/* User Name */}
                <div >{userData.channel.name}</div>
                {/* Games */}
                <div >{userData.channel.game}</div>
            </div>
            <div className={ 'border d-none d-sm-inline-block  '} >
                <div className={'online'} >
                    <CircleFill />
                </div>
                <div className={'online'} >{ formatNumber( userData.channel.views ) }</div>
            </div>
        </div>
    )
}

export default UserHighlight

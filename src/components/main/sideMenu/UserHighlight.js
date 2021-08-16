import React from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import avatar from '../../../assets/batman.png'
import { formatNumber } from '../../../assets/helper_function';

import { userData } from '../../../assets/json-data';



const UserHighlight = () => {
    console.log(JSON.stringify(userData));
    return (
        <div className={ 'd-flex flex-row align-items-end  justify-content-between border rounded hightlight my-1 p-1 ' }
             onClick={ ()=>{}}>

            {/* Avatar */}
            <div id={'avatar'} className={ 'border rounded-circle d-flex flex-row justify-content-center align-items-center d-sm-inline-block'} >
                <img  src={avatar} alt={`${'user'} user avatar`}  />
            </div>

            {/* User name and game played */}
            <div id={ 'user-game' } className={ 'border d-none d-sm-inline-block'} >
                {/* User Name */}
                <div className={'text-truncate'} >{`${userData.channel.name}jjhhkgtgtgkk`}</div>
                {/* Games */}
                <div className={'text-truncate'} >{userData.channel.game}</div>
            </div>

            {/* Online and viewer info */}
            <div id={ 'online-views'} className={ 'border d-none d-sm-inline-block  '} >
                <div className={'online'} >
                    <CircleFill />
                </div>
                <div className={'online'} >{ formatNumber( userData.channel.views ) }</div>
            </div>

        </div>
    )
}

export default UserHighlight

import React from 'react'
import { formatNumber } from '../../../assets/helper_function'

const FriendsInfo = ( props ) => {
    return (
        <div>
            <div >{ props.header }</div>
            <div >
                <span >
                    <img src={''} alt={'Shaded man avatar'} />
                </span>
                <span >{ formatNumber( props.count ) }</span>

            </div>
        </div>
    )
}

export default FriendsInfo

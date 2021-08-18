import React from 'react'
import { PersonBadge, PersonBadgeFill } from 'react-bootstrap-icons'
import { formatNumber } from '../../../assets/helper_function'


const FriendsInfo = ( props ) => {

    return (
        <div className={ ' d-inline-block px-2 py-0 friends-info text-nowrap '}>
            <div className={ 'lh-lg text-white '} >{ props.header }</div>
            <div >

                {
                    ( props.header === 'Followers' )? ( <PersonBadge className={'text-blue'} /> ) : ( <PersonBadgeFill className={'text-logo'} /> )
                }
               
                <span className={ 'count-value text-pink'} >{ formatNumber( props.count ) }</span>

            </div>
        </div>
    )
}

export default FriendsInfo

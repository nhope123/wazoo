import React, { Fragment, useContext } from 'react'
import { DisplayUserContext } from '../../../context/userContext'
import FriendsInfo from './FriendsInfo'

const Stats = () => {
    const { displayUser } = useContext( DisplayUserContext)
    let followers = {
        header: 'Followers',
        count: displayUser.followers,
    }
    let viewers = {
        header: 'Viewers',
        count: displayUser.views,
    }

    
    return (displayUser.online )? (
        <div className={ 'd-flex flex-sm-row flex-column justify-content-between align-items-sm-end align-items-center rounded py-3 px-3 w-100 mb-5 display-stats'} >

            
            {/* Game */}
            <div className={ 'd-inline-block text-truncate  px-2 fs-5 text-purple '} >{ displayUser.game }</div>

            <div className={ 'd-inline-flex stats'} >
                {/* Followers */}
                <FriendsInfo { ...followers } />

                {/* Views Viewers */}
                <FriendsInfo { ...viewers } />
            </div>
            

        </div>
    ) : < > </>
}

export default Stats

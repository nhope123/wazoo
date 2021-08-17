import React from 'react'
import FriendsInfo from './FriendsInfo'

const Stats = () => {
    let followers = {
        header: 'Followers',
        count: 25000000,
    }
    let viewers = {
        header: 'Viewers',
        count: 250000,
    }
    return (
        <div className={ 'd-flex flex-sm-row flex-column justify-content-between align-items-sm-end align-items-center rounded py-3 px-3 w-100 mb-5 display-stats'} >

            {/* Game */}
            <div className={ 'd-inline-block text-truncate  px-2 fs-5 text-purple '} >{ 'Game ljljjjjjjjjjjjjjbeing played' }</div>

            <div className={ 'd-inline-flex stats'} >
                {/* Followers */}
                <FriendsInfo { ...followers } />

                {/* Views Viewers */}
                <FriendsInfo { ...viewers } />
            </div>
            

        </div>
    )
}

export default Stats

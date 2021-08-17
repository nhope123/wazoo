import React from 'react'
import FriendsInfo from './FriendsInfo'

const Stats = () => {
    let followers = {
        header: 'Followers',
        count: 25000000,
    }
    let viewers = {
        header: 'Followers',
        count: 250000,
    }
    return (
        <div>
            {/* Game */}
            <div >{ 'Game being played' }</div>

            {/* Followers */}
            <FriendsInfo />

            {/* Views Viewers */}
            <FriendsInfo />

        </div>
    )
}

export default Stats

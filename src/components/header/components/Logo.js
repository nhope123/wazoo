import React from 'react'
import logo from '../../../assets/blue-logo.png'

const Logo = () => {
    return (
        <div>
            <div >
                <img src={ logo } alt={ 'A blue of number 3 turn 90 degrees clockwise with a blue border around it'} />
                <span >{ 'Wazoo' }</span>
            </div>
            <ul >
                <li role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'All' }</li>
                <li role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Online' }</li>
                <li role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Offline' }</li>
            </ul >            
        </div>
    )
}

export default Logo

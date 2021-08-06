import React from 'react'
import logo from '../../../assets/blue-logo.png'

// 1. d-block p-0

const Logo = () => {
    return (
        <div id={'left-header'} className={'navbar-brand'}>
            <div className={'d-inline-block ps'} >
                <img src={ logo } className={'my-auto'}
                     alt={ 'A blue of number 3 turn 90 degrees clockwise with a blue border around it'} />
                <span className={'fs-sm-1 ps-2 fw-bold lh-sm'} >{ 'Wazoo' }</span>
            </div>
            <ul className={'d-inline-block m-0 pe-3'} >
                <li className={'lh-1'} role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'All' }</li>
                <li role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Online' }</li>
                <li role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Offline' }</li>
            </ul >            
        </div>
    )
}

export default Logo

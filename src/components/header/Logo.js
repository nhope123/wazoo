import React from 'react'
import { List } from 'react-bootstrap-icons'
import logo from '../../assets/blue-logo.png'

// 1. d-block p-0

const Logo = () => {
    return (
        <div id={'left-header'} className={'d-flex f;ex-row justify-content-start align-items-end'}>
            <div className={'d-inline-block '} >
                <img src={ logo } className={'my-auto'}
                     alt={ 'A blue of number 3 turn 90 degrees clockwise with a blue border around it'} />
                <span className={'fs-sm-1 fs-3 ps-2 fw-bold lh-sm'} >{ 'Wazoo' }</span>
            </div>

            <div id={ 'group-users'} className={' border border-primary d-inline-block mx-2 px-2'} >
                <div className={'d-inline-block d-sm-none fs-4 '} >
                    <List  />
                </div>
                <ul className={'d-sm-inline-block position-absolute d-none m-0 pe-3'} >
                    <li className={' d-block d-sm-inline-block position-relative zindex-dropdown border    lh-1'} role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'All' }</li>
                    <li className={' d-block d-sm-inline-block position-relative zindex-dropdown border    lh-1'} role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Online' }</li>
                    <li className={' d-block d-sm-inline-block position-relative zindex-dropdown border    lh-1'} role={ 'button' } title={ '' } tabIndex={ '' } onClick={ '' } >{ 'Offline' }</li>
                </ul > 
            </div>
                       
        </div>
    )
}

export default Logo

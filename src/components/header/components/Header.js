import React from 'react'
import Logo from './Logo'
import UserCount from './UserCount'

//container-fluid  px-sm-4 py-sm-2

const Header = () => {
    return (
        <header className={ 'container-fluid ' } >
            <nav className={'navbar-expand-xl d-flex flex-row justify-content-between'} >
                <Logo />
                <UserCount />   
            </nav>
            
        </header >
    )
}

export default Header

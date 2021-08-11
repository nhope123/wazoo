import React from 'react'
import Logo from './Logo'
import UserCount from './UserCount'

//container-fluid  px-sm-4 py-sm-2

const Header = () => {
    return (
        <header className={ 'container-fluid py-2 px-4 row justify-center ' } >
            <nav className={'container-lg border d-flex flex-row justify-content-between'} >
                <Logo />
                <UserCount />   
            </nav>
            
        </header >
    )
}

export default Header

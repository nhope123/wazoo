import React from 'react'
import Logo from './Logo'
import UserCount from './UserCount'

//container-fluid  px-sm-4 py-sm-2

const Header = () => {
    return (
        <header className={ 'd-flex flex-row  vw-100 py-2 px-4  justify-content-center m-0' } >
            <nav className={'container-lg d-flex flex-row justify-content-between px-0'} >
                <Logo />
                <UserCount />   
            </nav>
            
        </header >
    )
}

export default Header

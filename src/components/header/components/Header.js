import React from 'react'
import Logo from './Logo'

const Header = () => {
    return (
        <header className={ 'container-fluid d-flex flex-row justify-content-between px-sm-4 py-sm-2' } >
            <Logo />
            
        </header >
    )
}

export default Header

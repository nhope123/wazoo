import React from 'react'
import Display from './display/Display'
import SideMenu from './sideMenu/SideMenu'



const miniMenu = {
    header: 'position-absolute d-block d-sm-none mini-menu text-white  px-2 py-1 rounded ',
    container: 'position-absolute d-flex d-sm-none flex-column align-items-center justify-content-start   m-0 p-1  menu-transition ',
};

const mainMenu = {
    header: 'text-white w-100 fw-bold text-center p-2 d-none d-sm-block',
    container: 'position-relative d-none d-sm-flex flex-column vw-25',
 };

const Main = () => {
    return (
        <div className={'container-fluid d-block position-relative p-0  m-o main-content'}>
            <div className={'d-flex flex-row p-0 m-0 position-relative vw-100'} > 
                <SideMenu { ...miniMenu} />
                <SideMenu { ...mainMenu} />
                <Display />
            </div>
            
            
        </div>
    )
}

export default Main

import React from 'react'
import UserHighlight from './UserHighlight'

const miniMenu = {
    header: 'position-absolute d-block d-sm-none mini-menu text-white  px-2 py-1 rounded ',
    container: 'position-absolute d-flex d-sm-none flex-column align-items-center justify-content-start  m-0 p-1  menu-transition   border border-primary',
};
 const mainMenu = {
    header: 'text-white w-100 border text-center p-2 d-none d-sm-block',
    container: '',
 };

 //'  m-0 p-1 p-sm-0 position-absolute d-flex d-sm-flex flex-column align-items-center justify-content-start '

const SideMenu = () => {
    return (
        <div id={'side-menu'} 
        className={ miniMenu.container} >

            {/* Mini menu */}
            <div className={ miniMenu.header } >
                <span >{'CHANNELS'}</span>
            </div>
            
            {
                <UserHighlight />

            }
        </div>
    )
}

export default SideMenu

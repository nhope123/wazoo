import React from 'react'
import UserHighlight from './UserHighlight'

const SideMenu = () => {
    return (
        <div id={'side-menu'} 
        className={' border border-primary m-0 p-0 d-sm-flex flex-column align-items-center justify-content-start '} >
            <div className={ 'text-white w-100 border text-center p-2 d-none d-sm-block'}  >
                <span >CHANNELS</span>
            </div>
            {
                <UserHighlight />

            }
        </div>
    )
}

export default SideMenu

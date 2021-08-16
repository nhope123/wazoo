import React from 'react'
import UserHighlight from './UserHighlight'

const SideMenu = (props) => {

    
    return (
        <div id={'side-menu'} 
        className={ props.container} >

            {/* Mini menu */}
            <div className={ props.header } >
                <span >{'CHANNELS'}</span>
            </div>
            
            {
                <UserHighlight />

            }
        </div>
    )
}

export default SideMenu

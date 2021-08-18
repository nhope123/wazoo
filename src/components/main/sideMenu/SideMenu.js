import React, { useContext, useEffect } from 'react'
import { UserChoiceContext } from '../../../context/userContext'
import UserHighlight from './UserHighlight'

const SideMenu = (props) => {
    const { userChoice } = useContext( UserChoiceContext )
    useEffect(() => {
        //console.log( 'side menu');
    }, [userChoice])

    console.log( userChoice );
    return (
        <div id={'side-menu'} 
        className={ props.container} >

            {/* Mini menu */}
            <div className={ props.header } >
                <span >{'CHANNELS'}</span>
            </div>
            
            {
                userChoice.map(element => {
                    
                    return ( <UserHighlight key={ element.id } { ...element } /> )
                })    

            }
        </div>
    )
}

export default SideMenu

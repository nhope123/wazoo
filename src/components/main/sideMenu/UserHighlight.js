import React, { useContext, useEffect } from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import avatar from '../../../assets/batman.png'
import { formatNumber } from '../../../assets/helper_function';
import { UserChoiceContext } from '../../../context/userContext';

//import { userData } from '../../../assets/json-data';



const UserHighlight = ( props ) => {
    //const {userChoice } = useContext( UserChoiceContext )

    useEffect(() => {
   }, [ props]) 

    //const data = userChoice.filter( item => item.id === props.id)
    
    console.log(props.id);
    //console.log('hope');
    return (
        <div className={ 'd-flex flex-row align-items-end  justify-content-between  rounded hightlight  px-2 py-1' }
             onClick={ ()=>{}}>

            {/* Avatar */}
            <div id={'avatar'} className={ 'border rounded-circle d-flex flex-row justify-content-center align-items-center '} >
                <img  src={ ( props.online )? props.logo : avatar } alt={`${ props.name } user avatar`}  />
            </div>

            {/* User name and game played */}
            <div id={ 'user-game' } className={ 'd-none d-md-inline-block text-white fw-bold'} >
                
                {/* User Name */}
                <div className={'text-truncate'} >{ props.name }</div>
                
                {/* Games */}
                <div className={'text-truncate'} >{ ( props.online )? props.game : 'Offline' }</div>
            </div>

            {/* Online and viewer info */}
            <div id={ 'online-views'} className={ 'd-none d-lg-inline-block  '} >
                <div className={'online'} style={{ color:  ( props.online )? 'green' : 'red'}}>
                    <CircleFill />
                </div>
                <div className={'online text-white'} >{ ( props.online )? formatNumber(props.live_viewers) : 0 }</div>
            </div>

        </div>
    )
}

export default UserHighlight

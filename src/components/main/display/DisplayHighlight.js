import React, { useContext } from 'react'
import icon from '../../../assets/batman.png'
import { DisplayUserContext } from '../../../context/userContext'

const DisplayHighlight = () => {

    const { displayUser } = useContext( DisplayUserContext)

    return (
        
        <div id={ 'display-highlight' } 
            className={'rounded  position-relative d-flex flex-row align-items-center justify-content-start mb-4 w-100'}>
            
                {/* Avatar */}
            <a href={ displayUser.link } target={'_top'} tabIndex={'0'} title={ `Go to ${ displayUser.name } page`} 
               className={'text-decoration-none overflow-hidden'} > 
                <div className={'d-block position-relative p-2 border border-warning rounded-circle  m-3 avatar-container' } >
                    <img id={'display-avatar'} src={ ( displayUser.online)? displayUser.logo:  icon } alt={ `User Avatar`} />                
                </div>
            </a> 
                {/* Channel name and Status */}
            
            <div id={ 'display-status' } className={' py-2 px-4 fw-bold fs-5'} > 
                <a href={ displayUser.link } target={'_top'} tabIndex={'0'} className={'text-decoration-none '} 
                    title={ `Go to ${ displayUser.name } page`}>
                    <div className={ 'd-block fs-5 lh-lg  w-100 user' } >
                        <span className={ 'text-white'} >{ 'Channel: '}</span>
                        <span className={ 'text-truncate ps-2 ' } >{ displayUser.name }</span>
                    </div> 
                </a >
                <div className={ 'd-block fs-6 text-truncate w-100 status'  } >
                    <span className={ 'text-white'} >{ 'Status:' }</span>
                    <span className={ 'text-truncate text-purple ps-2' } >{ ( displayUser.online)? displayUser.status : 'Offline'}</span>
                </div>
            </div>            
            
        </div>
        
    )
}

export default DisplayHighlight

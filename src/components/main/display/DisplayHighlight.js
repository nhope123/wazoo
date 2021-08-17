import React from 'react'
import icon from '../../../assets/batman.png'

const DisplayHighlight = () => {
    return (
        <div id={ 'display-highlight' } className={'rounded  position-relative d-flex flex-row align-items-center justify-content-start mb-4 w-100'}>
            
            {/* Avatar */}
            <div className={'d-block position-relative p-2 border border-warning rounded-circle  m-3' } >
                <img id={'display-avatar'} src={ icon } alt={''} />                
            </div>

            {/* Channel name and Status */}
            <div id={ 'display-status' } className={' py-2 px-4 fw-bold fs-5'} > 
                <div className={ 'd-block fs-5 lh-lg  w-100 user' } >
                    <span className={ 'text-white'} >{ 'Channel: '}</span>
                    <span className={ 'text-truncate ' } >{ 'Chanell name'}</span>
                </div> 
                <div className={ 'd-block fs-6 text-truncate w-100 status'  } >
                    <span className={ 'text-white'} >{ 'Status: '}</span>
                    <span className={ 'text-truncate text-purple ' } >{ 'User status'}</span>
                </div>
            </div>
        </div>
    )
}

export default DisplayHighlight

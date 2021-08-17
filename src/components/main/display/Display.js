import React from 'react'
import UserHighlight from '../sideMenu/UserHighlight'
import Stats from './Stats'

const Display = () => {
    return (
        <div className={' border border-warning  postion-relative d-flex flex-column justify-content-start align-items-center  display-content'} >
            <div className={'border container p-0 position-relative d-flex flex-column justify-content-start align-items-center  '}>

                {/* Banner  image  */}
                <div id={ 'banner' } className={ 'position-relative d-block w-100 '}>
                    <img className={ 'position-relative d-block w-100'} src={'https://s3.envato.com/files/156884535/Game_Background_Emerald_Lake_4270x2135.jpg' } alt={` banner`} /> 
                </div>

                <UserHighlight />

                <Stats />


            </div>
        </div>
    )
}

export default Display

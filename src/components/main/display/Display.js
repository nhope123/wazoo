import React from 'react'
import DisplayHighlight from './DisplayHighlight'
import Stats from './Stats'

const Display = () => {
    return (
        <div className={'postion-relative d-flex flex-column justify-content-start align-items-center  display-content overflow-scroll'} >
            <div className={'container p-0 position-relative d-flex flex-column justify-content-start align-items-center  '}>

                {/* Banner  image  */}
                <div id={ 'banner' } className={ 'position-relative d-block w-100 mb-4'}>
                    <img className={ 'position-relative d-block w-100'} src={'https://s3.envato.com/files/156884535/Game_Background_Emerald_Lake_4270x2135.jpg' } alt={` banner`} /> 
                </div>

                <DisplayHighlight />

                <Stats />


            </div>
        </div>
    )
}

export default Display

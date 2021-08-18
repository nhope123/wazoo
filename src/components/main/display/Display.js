import React, { useContext } from 'react'
import { DisplayUserContext } from '../../../context/userContext'
import DisplayHighlight from './DisplayHighlight'
import Stats from './Stats'


const Display = () => {

    const { displayUser } = useContext( DisplayUserContext )

    return (
        <div className={'postion-relative d-flex flex-column justify-content-start align-items-center  display-content overflow-scroll'} >
            <div className={'container p-0 position-relative d-flex flex-column justify-content-start align-items-center  '}>

                {/* Banner  image  */}
                <div id={ 'banner' } className={ 'position-relative d-block w-100 mb-4'}>
                    <img className={ 'position-relative d-block w-100'} src={displayUser.banner } alt={` banner`} /> 
                </div>

                <DisplayHighlight />

                <Stats />


            </div>
        </div>
    )
}

export default Display

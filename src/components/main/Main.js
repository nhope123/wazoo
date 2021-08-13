import React from 'react'
import Display from './display/Display'
import SideMenu from './sideMenu/SideMenu'

const Main = () => {
    return (
        <div className={'container-fluid  p-0 main-content'}>
            <div className={'d-flex flex-row p-0 m-0 position-relative'} >
                <SideMenu  />
                <Display />
            </div>
            
            
        </div>
    )
}

export default Main

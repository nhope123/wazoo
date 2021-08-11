import React from 'react'
import Display from './display/components/Display'
import SideMenu from './sideMenu/SideMenu'

const Main = () => {
    return (
        <div className={'container-fluid  p-0 main-content'}>
            <div className={'row'} >
                <SideMenu  />
                <Display />
            </div>
            
            
        </div>
    )
}

export default Main

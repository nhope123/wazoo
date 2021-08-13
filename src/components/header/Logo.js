import React from 'react'
import { List } from 'react-bootstrap-icons'
import logo from '../../assets/blue-logo.png'
import MenuList from './MenuList'


const HORIZONTALCONTENT = {
    item: 'horizontal-list rounded d-none d-sm-inline-block position-relative pb-1 fw-bold px-3 pt-2 lh-1',
    menu: 'd-none d-sm-inline-block position-relative m-0 ',
    label: '',
};

const DROPDOWNMENU = { 
        item:'dropdown-item d-block position-relative zindex-dropdown py-1 ps-3 pe-5 lh-1',
        menu: 'dropdown-menu dropdown-menu-dark d-sm-none position-absolute ',
        label: 'group-users',
};

const Logo = ( props ) => {
    return (
        <div id={'left-header'} className={'d-flex flex-row justify-content-start align-items-end min-w-50'}>
            <div className={'d-inline-block '} >
                <img src={ logo } className={'my-auto'}
                     alt={ 'A blue of number 3 turn 90 degrees clockwise with a blue around it'} />
                <span className={'fs-sm-1 fs-3 ps-2 fw-bold lh-sm'} >{ 'Wazoo' }</span>
            </div>

            {/* Dropdown menu for user diaplay */}
            <div  className={'dropdown d-sm-none d-inline-block mx-2 px-2'} >
                <button type={'button'} id={ 'group-users'} title={'menu'} tabIndex={'0'} 
                        className={'btn dropdown-toggle px-2  d-inline-block d-sm-none fs-4 '}  >
                    <List  />
                </button >
                <MenuList {...DROPDOWNMENU }  />
            </div >

            {/* Inline menu for user diaplay */}
            <MenuList { ...HORIZONTALCONTENT }  />
                       
        </div>
    )
}

export default Logo

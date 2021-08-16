import React from 'react'


const HORIZONTAL = {
    item: 'horizontal-list rounded d-none d-sm-inline-block position-relative pb-1 fw-bold px-3 pt-2 lh-1',
    menu: 'd-none d-sm-inline-block position-relative m-0 ',
    label: '',
};


///////////////////////     d-none d-sm-inline-block
//////////////////////      


const DROPDOWN = { 
        item:'dropdown-item d-block position-relative zindex-dropdown py-1 ps-3 pe-5 lh-1',
        menu: 'dropdown-menu dropdown-menu-dark d-sm-none position-absolute ',
        label: 'group-users',
};


const MenuList = (props) => {
    return (
        <ul className={ `${(props.menu === 'horzontal-menu')? HORIZONTAL.menu : DROPDOWN.menu } `} role={'alert'} 
            aria-labelledby={`${(props.menu === 'horzontal-menu')? HORIZONTAL.label : DROPDOWN.label } `} >
            <li className={ `${(props.menu === 'horzontal-menu')? HORIZONTAL.item : DROPDOWN.item } `} 
                role={ 'button' } title={ 'Show All Users' } tabIndex={ '0' } onClick={ '' } >
                { 'All' }
            </li>
            <li className={ `${(props.menu === 'horzontal-menu')? HORIZONTAL.item : DROPDOWN.item } `} 
                role={ 'button' } title={ 'Show Online Users' } tabIndex={ '0' } onClick={ '' } >
                { 'Online' }
            </li>
            <li className={ `${(props.menu === 'horzontal-menu')? HORIZONTAL.item : DROPDOWN.item } `} 
                role={ 'button' } title={ 'Show Offline Users' } tabIndex={ '0' } onClick={ '' } >
                { 'Offline' }
            </li>
        </ul>
    )
}

export default MenuList

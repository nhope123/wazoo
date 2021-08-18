import React, { useContext } from 'react'
import { UserChoiceContext } from '../../context/userContext';

const HORIZONTAL = {
    item: 'horizontal-list rounded d-none d-sm-inline-block position-relative pb-1 fw-bold px-3 pt-2 lh-1',
    menu: 'd-none d-sm-inline-block position-relative m-0 ',
    label: '',
};

const DROPDOWN = { 
        item:'dropdown-item d-block position-relative zindex-dropdown py-1 ps-3 pe-5 lh-1',
        menu: 'dropdown-menu dropdown-menu-dark d-sm-none position-absolute ',
        label: 'group-users',
};


const MenuList = (props) => {
    const { setChoice } = useContext( UserChoiceContext )

    let menuType = (props.menu === 'horizontal-menu')? HORIZONTAL : DROPDOWN

    return (
        <ul className={ menuType.menu } role={'alert'} 
            aria-labelledby={ menuType.label } >
            <li className={ menuType.item } 
                role={ 'button' } title={ 'Show All Users' } tabIndex={ '0' } onClick={ ()=> setChoice( 'All') } >
                { 'All' }
            </li>
            <li className={ menuType.item } 
                role={ 'button' } title={ 'Show Online Users' } tabIndex={ '0' } onClick={ ()=> setChoice( 'Online' ) } >
                { 'Online' }
            </li>
            <li className={ menuType.item } 
                role={ 'button' } title={ 'Show Offline Users' } tabIndex={ '0' } onClick={ ()=> setChoice( 'Offline' ) } >
                { 'Offline' }
            </li>
        </ul>
    )
}

export default MenuList

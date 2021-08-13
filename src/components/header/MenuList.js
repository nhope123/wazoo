import React from 'react'

const MenuList = (props) => {
    return (
        <ul className={ props.menu} role={'alert'} aria-labelledby={ props.label } >
            <li className={ props.item } 
                role={ 'button' } title={ 'Show All Users' } tabIndex={ '0' } onClick={ '' } >
                { 'All' }
            </li>
            <li className={ props.item } 
                role={ 'button' } title={ 'Show Online Users' } tabIndex={ '0' } onClick={ '' } >
                { 'Online' }
            </li>
            <li className={ props.item } 
                role={ 'button' } title={ 'Show Offline Users' } tabIndex={ '0' } onClick={ '' } >
                { 'Offline' }
            </li>
        </ul>
    )
}

export default MenuList

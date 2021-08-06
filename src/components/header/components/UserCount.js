import React from 'react'
import { PeopleFill } from 'react-bootstrap-icons'

const UserCount = () => {
    return (
        <div className={'d-inline-block px-3 pt-3 count-profile'} >
            <PeopleFill color={'white'}  />
            <div className={'d-block  position-absolute user-count'} >{'21'}</div>            
        </div>
    )
}

export default UserCount

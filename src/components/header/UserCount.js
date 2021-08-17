import React from 'react'
import { PeopleFill } from 'react-bootstrap-icons'

const UserCount = () => {
    return (
        <div className={'d-inline-block position-relative px-3 pt-3 me-4 count-profile '} >
            <PeopleFill color={'white'}  />
            <div className={'d-block  position-absolute user-count text-white fw-bold'} >{'21'}</div>            
        </div>
    )
}

export default UserCount

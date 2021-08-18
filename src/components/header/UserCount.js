import React, { useContext, useEffect } from 'react'
import { PeopleFill } from 'react-bootstrap-icons'
import { UserChoiceContext } from '../../context/userContext'

const UserCount = () => {
    const {userChoice } = useContext( UserChoiceContext )

    useEffect(() => {
   }, [userChoice]) 
        
    return (
        <div className={'d-inline-block position-relative px-3 pt-3 me-4 count-profile '} >
            <PeopleFill color={'white'}  />
            <div className={'d-block  position-absolute user-count text-white fw-bolder'} >{ userChoice.length }</div>            
        </div>
    )
}

export default UserCount

import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import {v4 as uuidv4 } from 'uuid';

const defaultBanner = 'https://s3.envato.com/files/156884535/Game_Background_Emerald_Lake_4270x2135.jpg'

const userList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

const TWITCHURL = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/'


const processUserData = user_data =>{
        
    if(user_data.stream === null){
       
        let name= user_data._links.channel.split('/')
        name = name[ name.length - 1]
      return ({ online: false , name, link: user_data._links.channel, id: uuidv4() })
    } 
    else{
        const stream = user_data.stream
        return ({
            id: stream._id,
            live_viewers: stream.viewers,
            link: stream.channel.url,
            online: true,
            status: stream.channel.status,
            name: stream.channel.display_name,
            game: stream.game,
            views: stream.channel.views,
            followers: stream.channel.followers,
            logo: stream.channel.logo,
            banner: (stream.channel.banner !== null)? stream.channel.banner : defaultBanner
        })
    }
}







export const UserContext = createContext()
export const DisplayUserContext = createContext()
export const UserChoiceContext = createContext()

const UserContextProvider = ( props ) =>{
    const [ users, setUsers] = useState( [] )
    const [displayUser, setdisplayUser] = useState(  [] )
    const [ userChoice, setUserChoice ] = useState( [])

    const setChoice = choice =>{
        let value;
        switch (choice) {
            case 'All':
                setUserChoice( users )
                break;
            case 'Online':
                value = users.filter( user => user.online )
                setUserChoice( value )
                setdisplayUser( value[0] )
                break;
            case 'Offline':
                value = users.filter( user => !user.online)
                setUserChoice( value )
                setdisplayUser( value[0] )
                break;
        
            default:
                break;
        }
    }

    useEffect( () => {
        let data = [];
        userList.forEach( (username) => {
           
            axios(`${TWITCHURL}${username}`)
           .then((response )=>{
               data.push( processUserData( response.data ))
           })
           .catch(err => console.log(`error: ${err}`))
           
       });
         
       setTimeout(() => {
        setUserChoice(data)
        setUsers( data)
        setdisplayUser(data[0])
        clearTimeout()
       }, 3000);       
           
    }, [])

    

    return (
        <UserContext.Provider value={{ users, setUsers }} >
            <DisplayUserContext.Provider  value={{ displayUser, setdisplayUser }} >
                <UserChoiceContext.Provider  value={{ userChoice, setChoice }} >
                    { props.children }
                </UserChoiceContext.Provider >
            </DisplayUserContext.Provider >            
        </UserContext.Provider>
    )
}
 export default UserContextProvider
import React, { useState, useEffect } from 'react';
import '../styles/search.scss';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faEnvelope, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faLocationDot, faEnvelope, faUserGroup, faArrowUpRightFromSquare)


function Userdata({id}) {

    const [user, setUser] = useState({});



    useEffect(() => {
        
        fetch(`https://api.github.com/users/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
             
                setUser(result);
             
              console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
              console.log(error);
            }
          )
      }, [id])

    return(
        <div className="userPanel">
            <div className="userPanel_top">
                <p>Username: <a href={user.html_url} target="_blank" rel="noreferrer" title={user.login} className="userPanel_link"> {user.login} <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a></p>
                <p>Email: {user.email ? user.email : 'n/a'} </p> 
                <p><FontAwesomeIcon icon="fa-solid fa-location-dot" title="Location"/> {user.location ? user.location : 'n/a'} </p>
                <p><FontAwesomeIcon icon="fa-solid fa-user-group" title="Followers"/> {user.followers}</p>
            </div>
           {user.bio && <><p>Bio:</p>
            <p dangerouslySetInnerHTML={{__html: user.bio}}></p></> }
        </div>
    );
}

export default Userdata;
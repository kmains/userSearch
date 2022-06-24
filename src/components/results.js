import React, { useState,useEffect } from 'react';
import '../styles/search.scss';
import Userdata from './Userdata';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


library.add(faChevronUp, faChevronDown)



function Results({res}) {

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        setIsActive(false)
    },[res])

    function formatData(x) {
        
            return (
                <div className="result">
                    <div className="result_top" onClick={() => setIsActive(!isActive)}>
                        { //<a href={x.html_url} target="_blank" rel="noreferrer" title={x.login} className="result_name">
        }
                            <img src={x.avatar_url} className="result_avatar" alt={x.login}/>
                            {x.login}        
                       {// </a>
        }
                        {isActive ? <FontAwesomeIcon icon="fa-solid fa-chevron-up" /> : <FontAwesomeIcon icon="fa-solid fa-chevron-down" />}
                    </div>
                    {isActive && <div className="result_panel" id={x.id}>

                        <Userdata id={x.login} />
                    </div>}
                </div>
            )
        }
    



    return (
       
           formatData(res) 
      );
    }
    
    export default Results;
    
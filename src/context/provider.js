import {useState} from 'react'
import PakageContext from './CreateContext'


function Provider(props) {
    const [mission,setMission] = useState({
        mname : "Go to Russia",
        agent : '007',
        accept : "Not Accept"
    })
    
    return (
        <PakageContext.Provider 
        value ={{
            data : mission,
            isMissionAccepted : ()=>
            setMission({...mission, accept :"ACCEPTED"})
        }}
        >
            {props.children}
        </PakageContext.Provider>
    )
}

export default Provider

import React from 'react'
import CreateContext from "./CreateContext";
function ConsumeData() {
    return (
        <div>
            <CreateContext.Consumer>
                {
                 
                    context =>(
                       <>
                       <h1>Agent Iinformation</h1>
                       <h1> Mission Name : {context.data.mname}</h1>
                       <p> Mission Status : {context.data.accept}</p>
                        <button onClick={context.isMissionAccepted} >Status Change</button>
                       </>
                    )
                }
            </CreateContext.Consumer>
        </div>
    )
}

export default ConsumeData

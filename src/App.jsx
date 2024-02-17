import { useState } from 'react'
import './App.css'


function App() {
  const data=[{
     subscriptionType:"FREE",
     subscriptionFee:"0",
     firstpoint:"Single",
     transparency:"transparency",
     check:"×",
     lastPoint:"× Monthly Status Reports"
  },
  {
    subscriptionType:"PLUS",
    subscriptionFee:"9",
    firstpoint:"5",
    singleTransparency:"singleTransparency",
    check:"√",
    lastPoint:"× Monthly Status Reports"
  },
  {
    subscriptionType:"PRO",
    subscriptionFee:"49",
    firstpoint:"Unlimited",
    check:"√",
    lastPoint:"√ Monthly Status Reports"
  }
];
    return (
    <div className="app">
        {
          data.map((value,index)=>(
            <Card key={index}
            type={value.subscriptionType}
            fee={value.subscriptionFee}
            user={value.firstpoint}  
            transparency={value.transparency} 
            singleTransparency={value.singleTransparency}  
            check={value.check}
            lastPoint={value.lastPoint}
              />
          ))
        }
        


    </div>
  )
}

export default App


function Card({type,fee,user,transparency,singleTransparency,check,lastPoint}){
  return(
    
    <div className="card">
    <div className="header">
        <p>{type}</p>
        <h1>${fee}/month</h1>
    </div><hr></hr>
    <div className="subject">
      <p>√ {user} User</p>
      <p>√ 50GB Storage</p>
      <p>√ Unlimited Public Projects</p>
      <p>√ Community Access</p>
      <p className={transparency}>{check} Unlimited Private Projects</p>
      <p className={transparency}>{check} Dedicated Phone Support</p>
      <p className={transparency}>{check} Free Subdomain</p>
      <p className={transparency} id={singleTransparency}>{lastPoint}</p>
    </div>
    <div className="footer">
         <button>BUTTON</button>
    </div>
    </div>
  )
}
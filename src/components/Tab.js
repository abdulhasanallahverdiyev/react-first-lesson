import { useEffect, useState } from "react";


function Tab({children,activeTab,onChange}) {
    const [active,setActive]=useState(activeTab)
    useEffect(()=>{
        setActive(activeTab)
    },[activeTab])
    // useEffect(()=>{
    //     onChange(active)
    // },[active])
    return(
        <div>
            <nav>
               {children.map((tab,index)=>(
            <button 
            onClick={()=>setActive(index)}
               className={active===index? 'bg-green-400':'bg-gray-400'} 
               key={index}>
                {tab.props.title}
            </button>
               ))} 
            </nav>
            {children[active]}
        </div>
    )
}
Tab.Panel=function ({children,title}) {
    console.log(children);
    return(
        <div>
            {children},{title}
        </div>
    )
}
export default Tab
import React,{useState} from 'react'
import ChildMemo from './ChildMemo'
import PureClassComponent from './PureClassComponent'
import PureComponent from './PureComponent'
import ShouldComponentUpdate from './ShouldComponentUpdate'

export const App = () => {
  const [isMuslim,setIsMuslim] = useState(false)
  const [login,setLogin] = useState(false)
  const [name,setName] = useState("ali")
  const [value,setValue] = useState(false)
  console.log("App rednered")
  return (
    <div>
      
      <button onClick = {()=>setIsMuslim(!isMuslim)}>chande App stae</button>
      <button onClick = {()=>setLogin(!login)}>chande child stae</button>
      <button onClick = {()=>setName("she jee")}>change  pure component child stae</button>
      <button onClick = {()=>setValue(!value)}>change should update props stae</button>
      
   <ChildMemo login={login}/>
   <PureComponent name={name} />
   <PureClassComponent name={name} />
   <ShouldComponentUpdate value={value} />
    </div>
  )
}

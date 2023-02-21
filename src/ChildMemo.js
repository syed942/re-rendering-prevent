import React,{memo} from 'react'

 const ChildMemo = () => {
    console.log("childMemo rendered")
  return (
    <div>ChildMemo</div>
  )
}
export default memo(ChildMemo)
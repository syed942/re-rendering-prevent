import React from 'react';
import { pure } from 'recompose';

const PureComponent=  (props)=> {
    console.log("pure component rendered")

  return (
    <div>
      
      <h6>pure functional component{props.name}</h6>
    </div>
  )
}

// Wrap component using the `pure` HOC from recompose
export default pure(PureComponent);
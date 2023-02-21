import React from 'react'
class PureClassComponent extends React.PureComponent {

    render() {
        
      //const { label, score = 0, total = Math.max(1, score) } = this.props;
  console.log(" react pure class component rendered")
      return (
        <div>
          <h6>pure class component{ this.props.name}</h6>
          
        </div>
      )
    }
}
export default PureClassComponent;
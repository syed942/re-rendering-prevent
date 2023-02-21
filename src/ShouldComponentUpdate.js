import React, { Component } from "react";

class ShouldComponentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {brand: "Ford",
    color:"red"};
      }
shouldComponentUpdate(nextProps) {
	// Rendering the component only if
	// passed props value is changed

	// if (nextProps.value !== this.props.value) {
	// return true;
	// } else {
	// return false;
	// }
    return true
}
changeColor = () => {
    this.setState({color: "blue"});
  }
componentDidUpdate(){
   // if(prevState.brand !== "jjj"){
        console.log("component did update")

  //  }
    
}
render() {
	console.log("should componentupdate rendered");
	return (
	<div>
		<h2>Counter 1:</h2>
		<h3>{this.props.value.toString()}</h3>
		
        <button
          
          onClick={this.changeColor}
        >Change color</button>
        <p>{this.state.color}</p>
	</div>
	);
}
}

export default ShouldComponentUpdate;

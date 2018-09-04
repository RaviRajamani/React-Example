import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var DemoSample = React.createClass({

propTypes:{
	
	name: React.PropTypes.string,
	email: React.PropTypes.string,
	totalCount: React.PropTypes.number,
	on: React.PropTypes.bool,
	
	
},


 getInitialState: function() {
    return { 
	  isAgreed: false
    }
  },
 
 componentWillMount: function() {
      console.log('Component WILL MOUNT!')
   },
   componentDidMount:function() {
      console.log('Component DID MOUNT!')
   },
  
  render : function() {
    return (
    <div>
      <h2> Name :  {this.props.name}</h2>
      <h2>Email Ids  : :{this.props.email}</h2>
       <h3>Age :  {this.props.totalCount}</h3>
       <h2>The boolean vale  {this.props.on}</h2>
          <input type='checkbox' checked={this.state.isAgreed} onClick={this.onAgreeChange} defaultChecked ={this.state.isAgreed} />check box text
		<br></br>
       </div>
      )
    
  },


 onAgreeChange: function(event) {
	alert("onAgreeChange", event, event.target.checked);
	this.setState({isAgreed: event.target.checked});

	alert(this.state.isAgreed);
	if(event.target.checked == true){
	

	}
	
  },
	

	onButtonPress : function(){
		alert("the click event is called");

	},
});

export default DemoSample;
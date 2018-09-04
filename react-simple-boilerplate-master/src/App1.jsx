import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var AppTest = React.createClass({

propTypes:{
	groupName: React.PropTypes.string,
	
},


getInitialState: function() {
    return { 
	  isAgreed: false,
	  name:'',
	  email:'',
	  page : 1
    }
  },

  render: function() {

  		var rsul= null;
			if(this.state.page ==1){
				return(

				<div className ="container-fluid">
	  <div className ="row">

	  	<div class="col-md-12">
			<h3 class="text-primary text-center">
			 Request for Join {this.props.groupName}
			</h3>
		</div>
	  </div>
	<div className ="row">
	
		<div className ="col-md-8">
			<form role="form" >
				<div className ="form-group">
					 
					<label for="exampleInputEmail1">
						Name
					</label>
					<input type="text" className ="form-control" id="exampleInputEmail1"  onChange={this.handleNameChange}/>
				</div>
				<div className ="form-group">
					 
					<label for="exampleInputPassword1">
						Email Address
					</label>
					<input type="email" className ="form-control" id="exampleInputPassword1"  onChange ={this.handleEmailChange}/>
				</div>

				<div className ="checkbox">	 
					<label>
						<input type='checkbox' checked={this.state.isAgreed} onClick={this.onAgreeChange} defaultChecked ={this.state.isAgreed} /> I Agree 
					</label>
				</div> 

				<button type="submit" className ="btn btn-primary" disabled={!this.state.isAgreed} onClick={this.showMessage}>
					Submit
				</button>
			</form>
		</div>
	</div>
</div>
				
				);
			}else{

			return(

<div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<h3 className="text-success text-center">
		Successfully joined the {this.props.groupName}<br/>
		welcome  {this.state.name}
		</h3>
		</div>
	</div>
</div>			
			);
			}

  },

 handleNameChange: function(e) {
   this.setState({name: e.target.value});
},
handleEmailChange: function(e) {
   this.setState({email: e.target.value});
},



onAgreeChange :function(event){
	this.setState({isAgreed: event.target.checked});
	if(event.target.checked == true){	
	}
},

showMessage:function(){	

this.setState({page: 2});

},

});

export default AppTest;

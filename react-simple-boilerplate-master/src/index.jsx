// Application entrypoint.

// Load up the application styles <Garden />
//<JioSpace/><DemoSample name="ravi" email="@gmail.com" totalCount={20} on={true}/>
require("../styles/application.scss");


import React from 'react';
import ReactDOM from 'react-dom';
import Garden from './component3.jsx';
import AppTest from './App.jsx';
import JioSpace from  './component4.jsx';
import DemoSample from  './DemoComponent.jsx';




ReactDOM.render(
<div>
	<AppTest groupName ="Learing React" id="1"/>	
</div>
, document.getElementById('testDiv')); 
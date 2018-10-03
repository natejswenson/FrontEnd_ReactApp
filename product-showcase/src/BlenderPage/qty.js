import React, { Component } from 'react';

class Qty extends Component {
  render() {
    
   return (   
   
<div class="rightpane">  
<br></br>
<form id='myform' method='POST' action='#'>
quanity:
<input type='button' value='-' class='qtyminus' field='quantity' />
<input type='text' name='quantity' value='0' class='qty' />
<input type='button' value='+' class='qtyplus' field='quantity' />
</form>
</div>
);
}
}
export default Qty;
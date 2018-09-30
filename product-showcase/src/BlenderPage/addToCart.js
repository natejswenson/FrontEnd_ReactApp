import React, { Component } from 'react';
class ADDbtn extends React.Component {

  render () {
    var obj =  require('./products.json')
    if(obj.Blender.inventoryCode === '1') {
      return (
        <div id= "true"><button class="btn" id="myBtn">ADD TO CART</button></div>
      );
    } else {
      return (
        <div id ="false">
          <h5>OUT OF STOCK</h5>
        </div>
    
      );
    }
  }
  
}

export default ADDbtn;
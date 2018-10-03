import React, { Component } from 'react';
class ShopBtns extends React.Component {

  render () {
   
      
    var obj =  require('./products.json')
    if(obj.Blender.purchasingChannelCode === '0') {
      return (
        <div class="rightpane">
         <br></br>
        <div id= "true"><button class="btn2" id="myBtn2">PICKUP IN STORE</button></div>
        <div id= "true"><button class="btn" id="myBtn">ADD TO CART</button></div>
        </div>
      );
    }
      
     if(obj.Blender.purchasingChannelCode === '1') {
      return (
        <div class="rightpane">
         <br></br>
        <div id= "true"><button class="btn4" id="myBtn4">ADD TO CART</button></div>
        <div id= "true"><button class="btn" id="myBtn">ADD TO CART</button></div>
        </div>
        
      );
     }
     if(obj.Blender.purchasingChannelCodee === '2') {
      return (
        <div class="rightpane">
         <br></br>
        <div id= "true"><button class="btn" id="myBtn">PICKUP IN STORE</button></div>
        <div id= "true"><button class="btn4" id="myBtn4">ADD TO CART</button></div>
        </div>
        
      );
    } else {
      return (
        <div class="rightpane">
         <br></br>
        <div id= "true"><button class="btn4" id="myBtn"></button></div>
        <div id= "true"><button class="btn4" id="myBtn4">ADD TO CART</button></div>
        </div>
        
      );
    }
  }
  
}

export default ShopBtns;

  
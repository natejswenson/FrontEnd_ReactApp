import React, { Component } from 'react';
class INSTOREbtn extends React.Component {

  render () {
    var obj =  require('./products.json')
    if(obj.Blender.purchasingChannelCode === '0'|| obj.Blender.purchasingChannelCode ==='2') {
      return (
        <div><button class="btn2" id="myBtn">PICK UP IN STORE</button></div>
      );
    } else {
      return (
        <div>
          <center><h4><i>not avalabile for pickup in your area</i></h4></center>
        </div>
      );
    }
  }
}

export default INSTOREbtn;
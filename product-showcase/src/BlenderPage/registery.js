import React, { Component } from 'react';
class RegistryBTN extends React.Component {

  render() {
    var obj =  require('./products.json')
    return (
      <div>
      <div class="rightpane">
      <br></br>
      <div class="pane-left-34">
       <div><button class="btn3" id="myBtn">ADD TO REGISTRY</button></div>
      </div>
      <div class="pane-left-33">
        <div><button class="btn3" id="myBtn">ADD TO LIST</button></div>
      </div>
      <div class="pane-right-33">
        <div><button class="btn3" id="myBtn">SHARE</button></div>
        </div> 
        </div> 
      <div class="rightpane">
      <br></br>
      <div>
   <h1>product highlights</h1>
   <ul>
     <li><h6>{obj.Blender.ItemDescription.features[1]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[2]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[3]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[4]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[5]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[6]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[7]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[8]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[9]}</h6></li>
     <li><h6>{obj.Blender.ItemDescription.features[10]}</h6></li>
   </ul>
   </div>
     </div>
     </div>
    );
  }
}

export default RegistryBTN;
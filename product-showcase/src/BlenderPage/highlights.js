import React, { Component } from 'react';
class Highlights extends React.Component {

  render() {
    var obj =  require('./products.json')
    return (
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
    );
  }
}

export default Highlights;
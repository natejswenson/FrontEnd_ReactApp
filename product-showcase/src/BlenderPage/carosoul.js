import React from "react";
import { Carousel } from "react-responsive-carousel";
var obj =  require('./products.json')

export default () => (
  <div class="leftpane">
  <Carousel autoPlay>
     <div><img src={obj.Blender.PrimaryImage.PI} /></div>
    <div><img src={obj.Blender.AlternateImages.AI1} /></div>
    <div><img src={obj.Blender.AlternateImages.AI2} /></div>
    <div><img src={obj.Blender.AlternateImages.AI3} /></div>
    <div><img src={obj.Blender.AlternateImages.AI4} /></div>
    <div><img src={obj.Blender.AlternateImages.AI5} /></div>
    <div><img src={obj.Blender.AlternateImages.AI6} /></div>
    <div><img src={obj.Blender.AlternateImages.AI7} /></div>
    
     
  </Carousel>
  </div>
);

import React, { Component } from 'react';
class Title extends Component {
  render() {
 
      
        var obj =  require('./products.json')
           
        return (
             <div class="Maincontainer"> 
              <div class="leftpane"> <h3><center>{obj.Blender.title}</center></h3></div>
              <div class="rightpane"> <div class="inline"><h3><strong>{obj.Blender.Offers.formattedPriceValue}</strong></h3> <h6>{obj.Blender.Offers.online}</h6></div></div>
                 </div> 
            );
          }
        }

export default Title;
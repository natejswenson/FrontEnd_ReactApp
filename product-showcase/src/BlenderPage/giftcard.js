import React, { Component } from 'react';

class GF extends Component {
  render() {
 
        var obj =  require('./products.json')
    
        
            return (
              <div class="rightpane-border">
                <h5>{obj.Blender.Promotions1}</h5>
                <h5>{obj.Blender.Promotions2}</h5>
              </div>
            );
          }
        }

export default GF;
import React, { Component } from 'react';

class GF extends Component {
  render() {
 
        var obj =  require('./products.json')
    
        
            return (
              
                <div><h5>{obj.Blender.Promotions1}</h5></div>
              
            );
          }
        }

export default GF;
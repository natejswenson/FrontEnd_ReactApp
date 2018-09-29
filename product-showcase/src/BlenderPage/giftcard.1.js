import React, { Component } from 'react';

class GF1 extends Component {
  render() {
 
    var obj =  require('./products.json')
    
        
            return (
              
                <div><h5>{obj.Blender.Promo2}</h5></div>
              
            );
          }
        }

export default GF1;
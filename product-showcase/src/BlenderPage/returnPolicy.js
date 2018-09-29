import React, { Component } from 'react';

class Returns extends Component {
  render() {
 
    var obj =  require('./products.json')
    
        
            return (
              
                <div><h3>{obj.Blender.returns}</h3></div>
              
            );
          }
        }

export default Returns;
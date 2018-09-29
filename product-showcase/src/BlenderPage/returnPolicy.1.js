import React, { Component } from 'react';

class ReturnPolicy extends Component {
  render() {
 
    var obj =  require('./products.json')
    
        
            return (
              
                <div><h6>{obj.Blender.ReturnPolicy[1].guestMessage}</h6></div>
              
            );
          }
        }

export default ReturnPolicy;
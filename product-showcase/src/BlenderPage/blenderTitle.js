import React, { Component } from 'react';

class Title extends Component {
  render() {
 
      
        var obj =  require('./products.json')
    
        
            return (
              
                <h3><center>{obj.Blender.title}</center></h3>
              
            );
          }
        }

export default Title;
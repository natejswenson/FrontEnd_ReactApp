import React, { Component } from 'react';

class Price extends Component {
  render() {
 
        var obj =  require('./products.json')
    
        
            return (
              
                <div class="inline"><h3><strong>{obj.Blender.Offers.formattedPriceValue}</strong></h3> <h6>{obj.Blender.Offers.online}</h6></div>
              
            );
          }
        }

export default Price;
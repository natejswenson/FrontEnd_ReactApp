import React, { Component } from 'react';

class GooReview extends Component {
  render() {
 
        var obj =  require('./products.json')
    
        
            return (
              <div>
               <h4><strong>{obj.Blender.title1}</strong></h4>
               <h6>{obj.Blender.review}</h6>
              </div>
            );
          }
        }

export default GooReview
import React, { Component } from 'react';

class BadReview extends Component {
  render() {
 
        var obj =  require('./products.json')
    
        
            return (
              <div>
               <h4><strong>{obj.Blender.title3}</strong></h4>
               <h6>{obj.Blender.review3}</h6>
              </div>
            );
          }
        }

export default BadReview
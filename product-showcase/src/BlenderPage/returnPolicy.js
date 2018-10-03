import React, { Component } from 'react';

class Returns extends Component {
  render() {
 
    var obj =  require('./products.json')
   
        
            return (
              <div class="rightpane">
              <br></br>
              <div class="pane-20">
               <div><h3>{obj.Blender.returns}</h3></div>
              </div>
              <div class="pane-80">
                <div><h6>{obj.Blender.ReturnPolicy[1].guestMessage}</h6></div>
              </div> 
              </div>
            );
          }
        }

export default Returns;
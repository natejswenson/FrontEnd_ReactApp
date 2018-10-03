import React, { Component } from 'react';


class Stars extends Component {
  render() {
    var obj =  require('./products.json')
      
    

            return (
              <div>
              <div class="Maincontainer">
              <div class="leftpane">
                <div class="pane-left-33">
                <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span><strong>overall</strong></span>
              </div>
                </div>
                <div class="pane-right-33">
                  <h6><strong>view all 14 reviews</strong></h6>
                </div>
                <div class="leftpane-ltgrey">
                  <div class="pane-right-50">
                    <h4>CON</h4>
                    <h6>most helpful 1-2 star review</h6>
                  </div>
                  <div class="pane-left-50">
                    <h4>PRO</h4>
                    <h6>most helpful 4-5 star review</h6>
                  </div>
                  <div class="pane-right-50-NoBorder">
                  <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              </div>
                    <div>
               <h4><strong>{obj.Blender.title3}</strong></h4>
               <h6>{obj.Blender.review3}</h6>
              </div>
                  </div>
                  <div class="pane-left-50-NoBorder">
                  <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              </div>
              <div>
               <h4><strong>{obj.Blender.title1}</strong></h4>
               <h6>{obj.Blender.review}</h6>
              </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  <script type="text/javascript" src="bundle.js"></script>
                  <script type="text/javascript" src="/src/btnINCREMENT.js"></script>
                 </div>
            );
          }
        }

export default Stars;
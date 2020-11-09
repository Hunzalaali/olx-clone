import React, {Component} from 'react'
import '../Components/Components.css'
import Rdata from './Rdata';
import Sdata from './Sdata';

class AdDetail extends Component{
    render() {
        return(
          <>
            <div className="adDetail">
              
              {
                    Rdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return (
                          <>
                            <div className="detail">
                            <h1>Details</h1>
            
                            <div className="row">
                              <h2>Condition</h2>
                              <p>{val.condition}</p>
                            </div>
            
                          </div>
            
                          <div className="description">
                            <h1>Description</h1>
                            <p>{val.title}</p>
                          </div>
                          </>
                        )
                      }
                    )
              }
              {
                    Sdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return (
                          <>
                            <div className="detail">
                            <h1>Details</h1>
            
                            <div className="row">
                              <h2>Condition</h2>
                              <p>{val.condition}</p>
                            </div>
            
                          </div>
            
                          <div className="description">
                            <h1>Description</h1>
                            <p>{val.title}</p>
                          </div>
                          </>
                        )
                      }
                    )
              }
            </div>
          </>
        )
    }
}

export default AdDetail;
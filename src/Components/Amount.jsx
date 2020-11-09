import React, {Component} from 'react'
import '../Components/Components.css'
import Rdata from './Rdata';
import Sdata from './Sdata';

class Amount extends Component{
    render() {
        return(
          <>
            <div className="amount">
              {
                    Rdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return (
                          <>
                            <h1>{val.price}</h1>
                            <h2>{val.title}</h2>
                            <h3>{val.date}</h3>
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
                            <h1>{val.price}</h1>
                            <h2>{val.title}</h2>
                            <h3>{val.date}</h3>
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

export default Amount;
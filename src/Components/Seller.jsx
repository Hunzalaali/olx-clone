import React, {Component} from 'react'
import '../Components/Components.css'
import user from '../Images/user.png'
import Rdata from './Rdata';
import Sdata from './Sdata';

class Seller extends Component{
    render() {
        return(
          <>
            <div className="seller">
              
              {
                    Rdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return (
                          <>
                            <h1>Seller description</h1>
                          <class className="row seller-user">
                            <img src={user} alt="user" width="60px"/>
                            <h2>{val.seller}</h2>
                          </class>
                          <button>Chat with seller</button>
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
                            <h1>Seller description</h1>
                            <class className="row seller-user">
                              <img src={user} alt="user" width="60px"/>
                              <h2>{val.seller}</h2>
                            </class>
                            <button>Chat with seller</button>
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

export default Seller;
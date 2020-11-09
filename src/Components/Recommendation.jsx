import React, {Component} from 'react'
import '../Components/Components.css'
import Card from '../Components/Card'
import Rdata from './Rdata';

class Recommendation extends Component{
    render() {
        return(
            <>
            <div className="recommendation col-10 mx-auto mt-4">
            <h1 className="f-title mb-3">Fresh recommendations</h1>
            <div className="row">
              <div className ="col-12 mx-auto">
                <div className="row">
                  {
                    Rdata.map(
                      (val, ind) => {
                        return <Card key={ind} adlink = {val.title} imgsrc = {val.imgsrc} price={val.price} title = {val.title} date = {val.date}/>
                      }
                    )
                  }
                </div>
              </div>
            </div>
        
      </div>

      <div  className="btn-load mt-4">
        <button>Load more</button>
      </div>
      
    </>

        )
    }
}

export default Recommendation;
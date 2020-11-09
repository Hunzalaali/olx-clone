import React, {Component} from 'react'
import '../Components/Components.css'
import Card from '../Components/Card'
import Sdata from './Sdata';

class Feature extends Component{
    render() {
        return(
            <>
            <div className="feature col-10 mx-auto mt-5">
            <h1 className="f-title mb-3">More on laptop</h1>
            <div className="row">
              <div className="col-12 mx-auto">
            <div className="row">
              {
                Sdata.map(
                  (val, ind) => {
                    return <Card key={ind} adlink = {val.title} imgsrc = {val.imgsrc} price={val.price} title = {val.title} date = {val.date} link={val.link}/>
                  }
                )
              }
            </div>
            </div>
          </div>
        </div>
        </>

        )
    }
}

export default Feature;


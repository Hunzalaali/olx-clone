import React, {Component} from 'react'
import '../Components/Components.css'
import Rdata from './Rdata';
import Sdata from './Sdata';

class AdImage extends Component{
    render() {
        return(
          <>
            <div className="adImage">
              {
                    Rdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return <img src={val.imgsrc} alt={val.imgsrc}/>
                      }
                    )
              }
              {
                    Sdata.map(
                      (val, ind) => {
                        if(val.title == this.props.ad)
                        return <img src={val.imgsrc} alt={val.imgsrc}/>
                      }
                    )
              }
            </div>
          </>
        )
    }
}

export default AdImage;
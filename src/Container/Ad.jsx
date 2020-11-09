import React, {Component} from 'react'
import AdImage from '../Components/AdImage'
import AdDetail from '../Components/AdDetail'
import Amount from '../Components/Amount'
import Seller from '../Components/Seller'

class Ad extends Component{
    constructor(props) {
        super(props);
        console.log("ad:  ",this.props.location.state.adLink);
    }
    render() {
        let ad = this.props.location.state.adLink;
        return(
            <>
            <div className="row">
                <div className="col">
                    <AdImage ad = {ad} />
                    <AdDetail ad = {ad} />
                </div>

                <div className="col">
                    <Amount ad = {ad} />
                    <Seller ad = {ad} />
                </div>
            </div>
            </>
        )
    }
}

export default Ad;
import React, {Component} from 'react';
import '../Components/Components.css';

class Copyright extends Component{
    render() {
        return(
            <div className="copyright">
                <div className ="col-10 mx-auto">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <h1>Other Countries</h1>
                            <a href="">India</a>
                            <p> - </p>
                            <a href="">South Africa</a>
                            <p> - </p>
                            <a href="">Indonesia</a>
                        </div>
                    </div>
                    <div className="col c-right">
                        <div className="row">
                            <h1>Free Classifieds in Pakistan </h1>
                            <p>. © 2006-2020 OLX</p>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        )
    }
}

export default Copyright;
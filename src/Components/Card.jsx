import React, {Component} from 'react';
import '../Components/Components.css';
import {NavLink} from 'react-router-dom';

class Card extends Component{
    render() {
      let link = this.props.adlink;
        return(
          <NavLink style={{ textDecoration: 'none' }} to={{
            pathname : `/ad/${this.props.adlink}`,
            state: {adLink : link}
          }} >
              <div className="card-style col-3 mb-3">
                <div className="card">
                  <img src={this.props.imgsrc} className="card-img-top" alt={this.props.imgsrc}/>
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{this.props.price}</h5>
                    <p className="card-text">{this.props.title}</p>
                    <p className="card-date">{this.props.date}</p>
                  </div>
                </div>
              </div>
            </NavLink>

        )
    }
}

export default Card;
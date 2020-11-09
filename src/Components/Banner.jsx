import React, {Component} from 'react'
import '../Components/Components.css'
import Hero from '../Images/hero.PNG'

class Banner extends Component{
    render() {
        return(
          <>
            <div className="hero-img">
                <img src={Hero} alt="hero img"/>
            </div>
          </>
        )
    }
}

export default Banner;
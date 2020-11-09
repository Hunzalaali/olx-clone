import React, {Component} from 'react'
import Feature from '../Components/Feature'
import Recommendation from '../Components/Recommendation';
import Banner from '../Components/Banner';

class Home extends Component{
    render() {
        return(
          <>
            <Banner />
            <Feature />
            <Recommendation />
          </>

        )
    }
}

export default Home;
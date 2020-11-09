import React, {Component} from 'react';
import '../Components/Components.css';
import app from '../Images/phone-app.webp'
import appstore from '../Images/appstore.webp'
import playstore from '../Images/playstore.webp'

class Mobile extends Component{
    render() {
        return(
            <div className="mobile">
                <div className ="col-10 mx-auto">
                <div className="row">
                    <div className="col c1">
                        <img src={app} alt="app"/>
                    </div>
                    <div className="col pt-4 pl-5 c2">
                        <h1>TRY THE OLX APP</h1>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                        
                    </div>
                    <div className="col my-5 c3">
                        <h3>GET YOUR APP TODAY</h3>
                        <img src={appstore} onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home';
                        }} width="130px" alt="appstore"/>
                        <img src={playstore} onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home';
                        }} width="130px" alt="playstore"/>
                    </div>
                </div>
             </div>
            </div>
        )
    }
}

export default Mobile;
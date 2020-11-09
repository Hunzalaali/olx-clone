import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import appstore from '../Images/appstore.webp'
import playstore from '../Images/playstore.webp'

class Footer extends Component {
    render() {
        const facebook = <FontAwesomeIcon icon={faFacebookF} size="xs"/>
        const twitter = <FontAwesomeIcon icon={faTwitter} size="xs"/>
        const youtube = <FontAwesomeIcon icon={faYoutube} size="xs"/>
        const instagram = <FontAwesomeIcon icon={faInstagram} size="xs"/>
        return (
            <div className="footer">
                <div className ="col-10 mx-auto">
                <div className="row pt-3 pb-4">
                    <div className="col">
                        <h1>POPULAR CATEGORIES</h1>
                        <a className="nav-link f-link">Cars</a>
                        <a className="nav-link f-link">Flats for rent</a>
                        <a className="nav-link f-link">Jobs</a>
                        <a className="nav-link f-link">Mobile Phones</a>
                    </div>
                    <div className="col">
                        <h1>TRENDING SEARCHES</h1>
                        <a className="nav-link f-link">Bikes</a>
                        <a className="nav-link f-link">Watches</a>
                        <a className="nav-link f-link">Books</a>
                        <a className="nav-link f-link">Dogs</a>
                    </div>
                    <div className="col">
                        <h1>ABOUT US</h1>
                        <a className="nav-link f-link">About OLX Group</a>
                        <a className="nav-link f-link">OLX Blog</a>
                        <a className="nav-link f-link">Contact Us</a>
                        <a className="nav-link f-link">OLX for Businesses</a>
                    </div>
                    <div className="col">
                        <h1>OLX</h1>
                        <a className="nav-link f-link">Help</a>
                        <a className="nav-link f-link">Sitemap</a>
                        <a className="nav-link f-link">Legal & Privacy Information</a>
                    </div>
                    <div className="col">
                        <h1>FOLLOW US</h1>
                        <div className="row mx-auto icons">
                        <a>{facebook}</a>
                        <a>{twitter}</a>
                        <a>{youtube}</a>
                        <a>{instagram}</a>
                        </div>
                        <div className="row mx-auto pt-4">
                        <img src={appstore} onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home';
                        }} width="90px" alt="appstore" style={{marginRight: "10px" , cursor:"pointer"}}/>
                        <img src={playstore} onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home';
                        }} width="90px" alt="playstore" style={{marginRight: "10px" , cursor:"pointer"}}/>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        )
    }
}

export default Footer;
import React, {Component} from 'react';
import '../Components/Components.css'
import logo from '../Images/olx-logo.png'
import searchIcon from '../Images/search-icon.png'
import searchBlack from '../Images/search-black.png'
import sell from '../Images/sell-btn.png'
import { Button, Modal } from 'react-bootstrap';

class Navbarmenu extends Component {
    
    constructor()
    {
        super()
        this.state={
            show: false
        }
    }

    handleModal(){
        this.setState(
            {show : !this.state.show}
        )
    }
    
    render() {
        return (
            <>
            <Modal show = {this.state.show} style={{textAlign:"center"}} onHide={()=>{this.handleModal()}}>
                <Modal.Header closeButton>Help make OLX safe place to buy and sell</Modal.Header>
                <Modal.Body>
                    <button className="btn-modal">Continue with phone</button>
                    <button className="btn-modal">Continue with facebook</button>
                    <button className="btn-modal">Continue with google</button>
                    <button className="btn-modal">Continue with email</button>
                </Modal.Body>
                <Modal.Footer>
                    We won't share your personal details with anyone
                </Modal.Footer>
            </Modal>

            <nav className="navbar navbar-expand navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" width="50px"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item location-li">
                    <div className="input-group my-2 location">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white" id="basic-addon1"><img src={searchBlack} alt="search Icon" width="20px"/></span>
                        </div>
                        <input type="text" className="form-control location-form" placeholder="Location" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </li>
                    <li className="nav-item search-li">
                    <form className="form-inline my-2 ml-3 search-bar">
                    <input className="form-control search-form" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search"/>
                    <button className="btn btn-dark" type="submit"><img src={searchIcon} alt="search icon" width="28px" height="33px"/></button>
                    </form>
                    </li>
                    <li className="nav-item my-2 ml-5 btn-login-li">
                        <a className="nav-link btn-login" href="#" onClick={()=>{this.handleModal()}}>Login</a>
                        
                    </li>
                    <li className ="nav-item my-2 ml-3 btn-sell-li">
                        <button className="btn-sell" onClick={()=>{this.handleModal()}}><img src={sell} alt="sell" width="100px"/></button>
                    </li>
                    
                    
                    </ul>
                    
                </div>
                </nav>
            </>
        );
    }
}

export default Navbarmenu;
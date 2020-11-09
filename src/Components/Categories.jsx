import React, {Component} from 'react'
import '../Components/Components.css'
import Hero from '../Images/hero.PNG'


class Categories extends Component {
    render() {
        return(
            <>
            <div className="categories">
            <div className="col-10 mx-auto">
                
                <ul className="row ul-categories flex-nowrap">
                <li>
                <div className="dropdown">
                <a className="btn dropdown-toggle all-categories" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ALL CATEGORIES
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div>
                </li>
                <li><a className="nav-link li-categories">Mobile Phones</a></li>
                <li><a className="nav-link li-categories">Cars</a></li>
                <li><a className="nav-link li-categories">Motorcycles</a></li>
                <li><a className="nav-link li-categories">Houses</a></li>
                <li><a className="nav-link li-categories">TV-Video-Audio</a></li>
                <li><a className="nav-link li-categories">Tablets</a></li>
                <li><a className="nav-link li-categories">Land and Plots</a></li>
            </ul>
                
            </div>
            </div>

            </>

        )
    }
}

export default Categories;
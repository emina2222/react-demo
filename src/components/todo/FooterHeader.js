import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <footer className="footer-app">
                    <span className="text-muted">
                        All rights reserved. 2021
                    </span>
                </footer>
            </div>
        )
    }
}
export default FooterComponent
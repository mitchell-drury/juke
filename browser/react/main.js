import React from 'react';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Albums from './albums.js';





export default class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            
            greeting: 'Sup'
        };
        this.props = {
            
        }
    }

    render () {
        return (
            <div id="main" className="container-fluid">
                <h1>Hello World </h1>
                
                <Sidebar />
                <Albums />
                        
                <Footer />
            </div>
        )
    }
}
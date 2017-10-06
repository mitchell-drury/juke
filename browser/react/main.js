import React from 'react';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Albums from './albums.js';





export default class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            albums:fakeAlbums,
            greeting: 'Sup'};
    }

    render () {
        return (
            <div id="main" className="container-fluid">
                <h1>Hello World! 99</h1>
                <h1>{this.state.albums[0].name}</h1>
                <Sidebar />
                <Albums />
                        
                <Footer />
            </div>
        )
    }
}
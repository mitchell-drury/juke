import React from 'react';

export default class sidebar extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="col-xs-2">
            <sidebar>
            <img src="juke.svg" className="logo" />
            <section>
                <h4 className="menu-item active">
                <a href="#">ALBUMS</a>
                </h4>
            </section>
            </sidebar>
            </div>        
        )
    }
}

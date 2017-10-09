import React from 'react';
import Axios from 'axios';

export default class albums extends React.Component {
    constructor (){
        super();
        
    }


    componentDidMount(){
      Axios.get('api/albums')
      .then(album => {
        this.setState({
          albums:album.data
        })
      })
    }

    render(){
        const albums =(
            this.state.albums.map((album, ind) =>{
                return (
                    <div className="col-xs-4" key={ind}>
                    <a className="thumbnail" href="#">
                        <img src={album.imageUrl} />
                        <div className="caption">
                            <h5>
                                <span>{album.name}</span>
                            </h5>
                            <small>{album.songs.length}</small>
                        </div>
                    </a>
                </div>
                )
            })
        )

        return(
            <div className="col-xs-10">
            <h3>Albums</h3>
            <div className="row">
                {albums}
            </div>
        </div>
        )
    }
}
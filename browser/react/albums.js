import React from 'react'

export default class albums extends React.component {
    constructor (){
        super();
        fakeAlbums:[
            {
              name: 'Abbey Road',
              id: 1,
              imageUrl: 'http://fillmurray.com/300/300',
              songs: [
                {
                  id: 1,
                  name: 'Romeo & Juliette',
                  artists: [ 
                    { name: 'Bill' } 
                  ],
                  genre: 'Funk',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }, 
                {
                  id: 2,
                  name: 'White Rabbit',
                  artists: [
                    { name: 'Bill' }, 
                    { name: 'Alice' }
                  ],
                  genre: 'Fantasy',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }, 
                {
                  id: 3,
                  name: 'Lucy in the Sky with Diamonds',
                  artists: [ 
                    { name: 'Bob' } 
                  ],
                  genre: 'Space',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }
              ]
            },
            {
              name: 'Yellow Submarine',
              id: 2,
              imageUrl: 'http://fillmurray.com/300/300',
              songs: [
                {
                  id: 4,
                  name: 'London Calling',
                  artists: [ 
                    { name: 'Bill' } 
                  ],
                  genre: 'Punk',
                  audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
                }
              ]
            }
          ];
    }

    render(){
        const albums =(
            fakeAlbums.map((album, ind) =>{
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
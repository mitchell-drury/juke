'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js';
import axios from 'axios';

ReactDOM.render (
    < Main />,
    document.getElementById('app')
);

axios.get('api/albums')
.then(album => {
	console.log(album.data);
});


console.log('Hello React');

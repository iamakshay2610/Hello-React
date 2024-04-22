// const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)
 import React from 'react';
 import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'parent'}, 
               React.createElement('div', {id: 'child'},
               [React.createElement('h1', {}, 'I am the H1 tag'),React.createElement('h2', {}, 'I am the H2 tag')]));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

console.log(parent)
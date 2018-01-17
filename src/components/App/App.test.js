import React from 'react';
import App from 'App';
import ReactDom from 'react-dom';

it.skip('Render without crashing' , () => {
    const div = Document.createElement('div');
    ReactDom.render(<App />, div);
})
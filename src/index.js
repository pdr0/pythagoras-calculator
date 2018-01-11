import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const lang = 'en';
const state = {
    user: {
        name: '',
        age: null,
        dob: null,
        fruits: ['orange', 'mandarin', 'pine', 'watermelon']
    },
    lang: lang
}

ReactDOM.render(<App user={state.user} lang={state.lang}/>, document.getElementById('root'))

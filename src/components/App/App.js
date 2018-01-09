import React from 'react';
import Hello from '../Hello/Hello';
// import PropTypes from 'prop-types';

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }

    //Method
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <Hello update={this.update.bind(this)}/>
                <Hello update={this.update.bind(this)}/>
                <Hello update={this.update.bind(this)}/>
                <Button> I <Heart></Heart> React</Button>
            </div>
        )
    }
}




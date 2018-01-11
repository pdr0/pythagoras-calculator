import React from 'react';
import Hello from '../Hello/Hello';
import Hoc from '../Hoc/Hoc';
import Button01 from '../Buttons/Button01';
import Button02 from '../Buttons/Button02';
import Label01 from '../Labels/Label01'
// import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

const Button = (props) => <button>{props.children}</button>
const Label = Hoc(Label01);

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
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <Hello update={this.update.bind(this)}>
                    This is a child
                    <div className='child'>Another child</div>
                </Hello>
                <Hello update={this.update.bind(this)}/>
                <Hello update={this.update.bind(this)}/>
                <Button> I <Heart></Heart> React</Button>
                <div id='Hoc'>
                    <Button01 /><br />
                    <Label />
                </div>
                <Nav>
                    <button value='1'>1</button>
                    <button value='2'>2</button>
                    <button value='3'>3</button>
                </Nav>
            </div>
        )
    }
}
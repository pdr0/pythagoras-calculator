import React from 'react';

class Label01 extends React.Component {
    render(){
        return <label onMouseEnter={this.props.update}>Label01 - {this.props.count}</label>
    }
}

export default Label01
import React from 'react';

const Hoc = (Component) => class extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    update = (e) => {
        console.log('Event Name', e.target.value);
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
                update={this.update.bind(this)}
            />
        )
    }



}

export default Hoc

import React from 'react';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {selected: 'state'}
    }

    selectItem = (selectedButton) => {
        this.setState({selected: selectedButton});
    }

    render() {

        const handler = (child) =>
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            })



        let items = React.Children.map(this.props.children, handler);
        console.log('items', items);
        return (
            <div>
                <p>{this.state.selected}</p>
                {items}
            </div>
        )
    }
}

export default Nav;
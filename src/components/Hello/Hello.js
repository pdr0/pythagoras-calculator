import React from 'react';

const Hello = (props) => <div>
    <input type="text" onChange={props.update} placeholder="Hello There!" />
    {console.log(React.Children.toArray(props.children))}
</div>

export default Hello;
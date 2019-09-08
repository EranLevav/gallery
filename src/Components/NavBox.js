import './Gallery.css';
import React from 'react'

class NavBox extends React.Component{
    render() {
        return (
        <div className={this.props.className}
             onClick={this.props.onClick} />
        );
    };
}

export default NavBox;

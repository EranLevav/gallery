import './Gallery.css';
import React from 'react';


class ExpansionBox extends React.Component{

    render() {
        const {BoxOpen,src,onImgClick} = this.props;

        if (BoxOpen===false)
            return null;

        return (
        <div className="box-overlay" onClick={onImgClick.bind(this,src)}>
         <div className="box-body">
          <div className="box-close" onClick={onImgClick.bind(this,src)}>
            <i className="close icon"></i>
          </div>
          
          <img src={src} alt={"This to expand"} />
         </div>
        </div>
        );
    }
}


export default ExpansionBox;   
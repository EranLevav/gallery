import './Gallery.css';
import React from 'react';


class ExpansionBox extends React.Component{

    render() {
        const {BoxOpen,src,onImgClick} = this.props;

        if (BoxOpen===false)
            return null;

        return (
        <div className="modal-overlay" onClick={onImgClick.bind(this,src)}>
         <div className="modal-body">
          <span className="modal-close" onClick={onImgClick.bind(this,src)}>
            <span><i className="close icon"></i></span>
          </span>
          
          <img src={src} alt={"This to expand"} />
         </div>
        </div>
        );
    }
}


export default ExpansionBox;   
import './Gallery.css';
import React from 'react';
import Image from './Image';
import ExpansionBox from './ExpansionBox';

class Gallery extends React.Component{

  constructor(props){
    super(props);
  
  this.state = {showBox: false, src: ''};

  this.openBox = this.openBox.bind(this);
  this.closeBox = this.closeBox.bind(this);
  this.downLoadImg = this.downLoadImg.bind(this);
  }

  openBox = (src) => {
    this.setState({
      showBox: true,
      src: src
    })
    // console.log("open " + src);
  };  

  closeBox = (src) => {
    this.setState({
      showBox: false,
      src: ''
    })
    // console.log("close " + src);
  };

  downLoadImg = (src) => {
    // console.log(src);
    return (<a href={src}>
             <img src={src} alt="download"/>
           </a>);
  }


  render() {
    console.log("rendering gallery");

    return(
      <div refs="gallery-container" className="container-fluid gallery-container">
        <div className="row">
          {this.props.imageUrls.map((imageUrl,index) => {
            return <div className="col-md-4 col-sm-6" key={index + 1}>
                      <div className="gallery-card">
                        <div className="gallery-thumbnail">
                        <Image src={imageUrl}
                               alt={"Image number" + (index + 1)}
                               onImgClick={this.openBox}/> 
                        </div>       
                      </div>
                    </div>;})
          }
        </div>

        <ExpansionBox BoxOpen={this.state.showBox}
                      src={this.state.src} 
                      onImgClick={this.closeBox}/> 
      </div> 
    ) 
  }
}

export default Gallery;
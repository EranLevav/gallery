import './Gallery.css';
import React from 'react';

class Image extends React.Component{

      state = ({ url:  this.props.src ,
                 likes: Math.floor(Math.random() * 6) ,
                 liked: false});

      toggleLike = () =>  {
        const action = this.state.liked ? -1 : 1;
        this.setState({liked:!this.state.liked,
                       likes: this.state.likes + action});
      }

      render() {
        return (
          <div>
            <img className="gallery-card" src={this.props.src}
                                          alt={this.props.src}
                                          onClick={this.props.onImgClick.bind(this,this.props.src)}/>
            <div className="card-icon">
              <div className="ui left labeled button">
                <button className="ui right pointing basic label" onClick={this.toggleLike} style={{width:40}}>
                  <i className="thumbs up icon"></i>
                </button>
                <a className="ui left pointed basic label">{this.state.likes}</a>
              </div>
              <button className="ui mini vertical animated color1 button" style={{width:45, height:33}}>
                <div className="hidden content">Share</div>
                <div className="visible content"><i class="share large icon"></i></div>
              </button> 
            </div>
            
          </div> 
          );
      }
}

export default Image;
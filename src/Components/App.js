import './App.css';
import React from 'react';
import unsplash from '../api/unsplash';
import Gallery from './Gallery';
import SearchBar from './SearchBar';


class App extends React.Component { 

  state = {images: this.props.imageUrls,
            urls: []};

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
        params: {query: term,
                 per_page:12	 },
    });
    this.setState({ urls: response.data.results });    
    this.changeImages();
  }

  changeImages(){
    this.setState({ images: this.state.urls.map(url=>url.urls.regular) });
  }
    

  render() {
    
    // console.log(this.state.images);
    return (
      <div className="app-root">
        <div className="header-site">
          <h1>Foo Gallery</h1>
          <SearchBar onSubmit={this.onSearchSubmit}/> 
        </div>
        <Gallery imageUrls={this.state.images}/>
      </div>
    );
  };
}
        
export default App;
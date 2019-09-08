import React from 'react';

class SearchBar extends React.Component {
    
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term:event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    
    render() {
        return (
            <div className="app-input">
                <form onSubmit={this.onFormSubmit} className="ui small icon input">
                    <input  style={{width: 700, height: 35}}
                            type="text"
                            placeholder="Search for images"
                            value={this.state.term}
                            onChange={this.onInputChange}/>
                    <i aria-hidden="true" className="search circular small link icon" onClick={this.onFormSubmit}></i>
                </form>
            </div>

        );
    };
}

export default SearchBar;
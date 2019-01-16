import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: []};

    onSearchSubmit = async term => {
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 1c28073ba0ae922ffd3a929c4943c725f606c17d706c75b5b7de06b836436d17'}
        });

     //console.log(this);//'this' is this function executing. So this.setState is wrong
     this.setState({ images: response.data.results });
    } 

    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar rudiSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
        </div>
    
        ) 

    }
}

export default App;
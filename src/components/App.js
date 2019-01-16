import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { 
        images: [],
        totalPages: 0};

    onSearchSubmit = async (term) => {
        
        const response = await unsplash.get('/search/photos', {
            params: { query: term},
        });

     //console.log(this);//'this' is inner this function. 
     //So 'this' is not referencing class App. Instead, is referencing this function

     this.setState({ 
        images: response.data.results,
        totalPages: response.data.total_pages });
    } 

    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar rudiSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
            <br/>
            Total Pages: {this.state.totalPages} pages

            <ImageList images={this.state.images}/>
        </div>
    
        ) 

    }
}

export default App;
import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}

    onTestFormSubmit = event => {//THIS SINTAXE AVOID ERROR of 'this' undefined 
        event.preventDefault();//avoid submit form on press Enter key

        this.props.rudiSubmit(this.state.term);
    }
    
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onTestFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }

}

export default SearchBar;
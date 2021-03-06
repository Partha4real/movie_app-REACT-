import React from 'react';
// import {data} from '../data';
import {addMovieToList, handleMovieSearch} from '../actions';


class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
    }

    handleSearch=()=>{
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    
    render () {
        const {result: movie, showSearchResult} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange= {this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResult && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="Search Poster"/>
                                <div className="movie-info">
                                <span>{movie.Title}</span>
                                <button onClick={()=>this.handleAddToMovies(movie)}>
                                    Add To My List
                                </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
           );
    }
}

export default Navbar;

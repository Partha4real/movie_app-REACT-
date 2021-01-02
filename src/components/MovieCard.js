import React from 'react';
import {addFavourites, removeFromFavourites} from '../actions';

class MovieCard extends React.Component{
    handelFavouriteMovie = () => {
        const {movie} = this.props;
        this.props.dispatch (addFavourites(movie)) 
    }
    handelUnFavouriteMovie = ()=>  {
        const {movie} = this.props;
        this.props.dispatch (removeFromFavourites(movie)) 
    }
    render () {
        const {movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="title">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handelUnFavouriteMovie}>Unfavourite</button>
                            : <button className="favourite-btn" onClick={this.handelFavouriteMovie}>Favourite</button>
                         
                        }
                    </div>
                </div>
            </div>
           );
    }
}

export default MovieCard;

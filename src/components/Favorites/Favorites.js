import React, { Component } from "react";
import store from '../../store/index';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

import { getMovies , getMovieDetail , addMovieFavorite , removeMovieFavorite  } from '../../actions/index';

export class ConnectedList extends Component {

  constructor(props){
    super(props);

    console.log('Ya!!!!' , this.props.favorites)

  }

  removeMovieFavorite(idMovie){
    
    this.props.removeMovieFavorite(idMovie);
  }


  render() {
    return (
      <section id="search-box">
        
        <div id="results">
            <h4>My Favorites</h4>

            {this.props.favorites.map((movie , index = 0)=>
              <div className={index%2 === 0? "result result-acent": "result"}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <a>{movie.Title}</a>
                </Link>
                {/*Favorite heart (if this movie is on favorite store array will be changes in fill)*/}
                {
                  this.props.favorites.some(element => element.imdbID === movie.imdbID)?
                    <button id="btn-favorite" onClick={() => this.removeMovieFavorite(this.props.movie.imdbID)}><i class="bi bi-heart-fill"></i></button>:
                    <button id="btn-favorite" onClick={() => this.removeMovieFavorite(this.props.movie.imdbID)}><i class="bi bi-heart"></i></button>
                }

                  <p>{movie.Plot}</p>
                
              </div>            
            )}

            
            
        </div> 

      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    movie: state.movieDetail,
    favorites: state.moviesFavourites,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
    getMovieDetail: id => dispatch(getMovieDetail(id)),
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);


